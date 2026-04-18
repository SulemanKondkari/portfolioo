import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

/**
 * CONFIGURATION
 * Keep all assets in scripts/assets-manifest.json
 */
const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, 'scripts', 'assets-manifest.json');
const DEFAULT_TIMEOUT_MS = Number(process.env.ASSET_DOWNLOAD_TIMEOUT_MS ?? 60000);

function shouldSkipAssetSync() {
  const force = process.env.FORCE_ASSET_SYNC === 'true';
  if (force) return false;

  const isHostedCi = process.env.CI === 'true' || process.env.VERCEL === '1';
  const allowInCi = process.env.ASSET_SYNC_IN_CI === 'true';
  return isHostedCi && !allowInCi;
}

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(`Missing manifest file: ${MANIFEST_PATH}`);
  }

  const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.assets)) {
    throw new Error('Invalid manifest: expected "assets" to be an array');
  }

  return parsed.assets;
}

async function sha256File(filePath) {
  const hash = crypto.createHash('sha256');
  const readStream = fs.createReadStream(filePath);
  readStream.on('data', (chunk) => hash.update(chunk));
  await finished(readStream);
  return hash.digest('hex');
}

async function downloadToFile(url, dest, headers = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  const res = await fetch(url, { headers, signal: controller.signal }).finally(() => clearTimeout(timeout));
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} ${res.statusText}`);
    err.status = res.status;
    throw err;
  }

  const tmpDest = `${dest}.part`;
  const fileStream = fs.createWriteStream(tmpDest);
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  fs.renameSync(tmpDest, dest);
}

async function downloadFile(asset, headers = {}) {
  const { name, url, dest, sha256, required = true } = asset;
  if (!url || !dest) {
    throw new Error(`Asset is missing required fields: ${JSON.stringify(asset)}`);
  }

  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(dest)) {
    if (sha256 && !sha256.startsWith('REPLACE_WITH_')) {
      const current = await sha256File(dest);
      if (current === sha256) {
        console.log(`- Skipping ${name ?? path.basename(dest)} (already valid)`);
        return { ok: true, downloaded: false };
      }
      console.log(`- Replacing ${name ?? path.basename(dest)} (checksum mismatch)`);
    } else {
      console.log(`- Skipping ${name ?? path.basename(dest)} (already exists)`);
      return { ok: true, downloaded: false };
    }
  }

  console.log(`- Downloading ${name ?? path.basename(dest)}...`);
  try {
    await downloadToFile(url, dest, headers);

    if (sha256 && !sha256.startsWith('REPLACE_WITH_')) {
      const current = await sha256File(dest);
      if (current !== sha256) {
        fs.unlinkSync(dest);
        throw new Error(`Checksum mismatch for ${dest}`);
      }
    }

    console.log(`  [Done] Saved to ${dest}`);
    return { ok: true, downloaded: true };
  } catch (err) {
    if (err?.status === 404) {
      console.warn(`  [Warning] Asset not found (404): ${url}`);
    } else {
      console.error(`  [Error] Failed to download ${name ?? path.basename(dest)}: ${err.message}`);
    }

    return { ok: !required, downloaded: false, optionalFailure: !required };
  }
}

function buildHeaders() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return {};
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/octet-stream'
  };
}

(async () => {
  if (shouldSkipAssetSync()) {
    console.log('Skipping asset sync in CI/Vercel. Set FORCE_ASSET_SYNC=true to override.');
    return;
  }

  console.log('Hydrating project assets...');

  const assets = loadManifest();
  if (assets.length === 0) {
    console.log('No assets configured.');
    return;
  }

  const headers = buildHeaders();
  let failures = 0;

  for (const asset of assets) {
    const result = await downloadFile(asset, headers);
    if (!result.ok) failures += 1;
  }

  if (failures > 0) {
    console.error(`Asset sync finished with ${failures} blocking failure(s).`);
    process.exitCode = 1;
  } else {
    console.log('Asset sync complete.');
  }
})();
