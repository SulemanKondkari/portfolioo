import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

/**
 * CONFIGURATION
 * Add your GitHub release asset URLs here once you have uploaded them.
 */
const ASSETS = [
  {
    // Official GitHub Release URLs
    url: "https://github.com/SulemanKondkari/finalportfolio/releases/download/v1.0.0/animate_this_into_202604151849.mp4",
    dest: "public/animate_this_into_202604151849.mp4"
  },
  {
    url: "https://github.com/SulemanKondkari/finalportfolio/releases/download/v1.0.0/temp-mail-agent-v2.zip",
    dest: "public/temp-mail-agent-v2.zip"
  }
];

async function downloadFile(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  // Skip if file already exists to save bandwidth
  if (fs.existsSync(dest)) {
    console.log(`- Skipping ${path.basename(dest)} (already exists)`);
    return;
  }

  console.log(`- Downloading ${path.basename(dest)}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
        if (res.status === 404) {
            console.warn(`  [Warning] Asset not found (404). Please upload it to GitHub Releases: ${url}`);
            return;
        }
        throw new Error(`Unexpected response ${res.statusText}`);
    }
    
    const fileStream = fs.createWriteStream(dest);
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`  [Done] Saved to ${dest}`);
  } catch (err) {
    console.error(`  [Error] Failed to download ${path.basename(dest)}:`, err.message);
  }
}

(async () => {
  console.log("🚀 Hydrating project assets from GitHub Releases...");
  for (const asset of ASSETS) {
    await downloadFile(asset.url, asset.dest);
  }
  console.log("✅ Asset sync complete.\n");
})();
