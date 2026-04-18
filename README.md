# Suleman Kondkari | Cinematic Portfolio

A high-performance, cinematic portfolio built with Next.js, Framer Motion, and GSAP. This project is designed for visual impact and editorial-grade aesthetics.

## 🚀 Quick Start

1. **Clone and Install:**
   ```bash
   git clone https://github.com/SulemanKondkari/finalportfolio.git
   cd finalportfolio
   npm install
   ```

2. **Environment Setup:**
   Create a `.env.local` file in the root and add your keys:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
   ```

3. **Development:**
   ```bash
   npm run dev
   ```

## 📦 Architecture & Assets

This repository follows a code-only architecture and keeps heavy files out of Git history.

### Recommended Approach

Use **GitHub Releases** for large immutable files (videos, zip exports, datasets, PDFs).

Why this is best here:
- Keeps clone/pull operations fast for contributors.
- Couples each asset pack to a clear version/tag.
- Avoids managing a second repository unless your assets need independent permissions/lifecycle.

When a separate assets repository is better:
- You need private/public split between code and assets.
- Assets are updated by a different team with separate access control.
- You want an independent release cadence from code.

### Clean Structure

- Main repository (code only):
   - `src/`, `components/`, `scripts/`
   - `scripts/assets-manifest.json` (asset catalog)
   - `scripts/download-assets.mjs` (asset hydrator)
- Release assets (outside git history):
   - Release tag: `assets-vX.Y.Z`
   - Asset naming: `<domain>-<name>-vX.Y.Z.<ext>`
   - Example: `hero-showreel-v1.0.0.mp4`

### Step-by-Step Setup (GitHub Releases)

1. Create an assets release tag:

```bash
git tag assets-v1.0.0
git push origin assets-v1.0.0
```

2. Create a release and upload heavy files (GitHub CLI):

```bash
gh release create assets-v1.0.0 \
   --title "Assets v1.0.0" \
   --notes "Initial production asset pack" \
   path/to/hero-showreel-v1.0.0.mp4 \
   path/to/project-bundle-v1.0.0.zip
```

Project-ready command for this repository:

```bash
gh release create assets-v1.0.0 \
   --title "Assets v1.0.0" \
   --notes "Production asset bundle for portfolio runtime" \
   public/animate_this_into_202604151849.mp4 \
   public/media/temp-mail-agent.mov \
   public/temp-mail-agent.zip \
   public/temp-mail-agent-report.pdf
```

3. Generate checksums locally:

```bash
shasum -a 256 path/to/hero-showreel-v1.0.0.mp4
shasum -a 256 path/to/project-bundle-v1.0.0.zip
```

4. Update `scripts/assets-manifest.json` with:
- `url`: release download URL
- `dest`: destination in `public/...`
- `sha256`: checksum
- `required`: `true` for hard requirements, `false` for optional assets

5. Sync assets:

```bash
npm run assets:sync
```

### Integration in This Repo

Assets are auto-hydrated using:
- `postinstall`
- `dev`
- `build`

Manual sync command:

```bash
npm run assets:sync
```

Private release support:
- Set `GITHUB_TOKEN` before running sync (script sends auth header automatically).

CI/Vercel behavior:
- Asset sync is skipped automatically in hosted CI environments (`CI=true` or `VERCEL=1`).
- To force hydration in CI, set `ASSET_SYNC_IN_CI=true` (or `FORCE_ASSET_SYNC=true`).
- Download timeout can be tuned with `ASSET_DOWNLOAD_TIMEOUT_MS`.

### Updating Assets Safely

1. Add new files under a new release tag (`assets-v1.0.1`, `assets-v1.1.0`, etc.).
2. Keep previous assets available until all code references are migrated.
3. Update manifest entries and checksums in one PR.
4. Run `npm run assets:sync` and validate pages/features that consume those assets.
5. Merge only after both old and new environments are verified.

### Best Practices

- Versioning:
   - Treat asset updates like API versions.
   - Use immutable file names with semantic versions.
- Stability:
   - Never overwrite existing release asset files in-place.
   - Prefer additive releases and deprecate old versions gradually.
- Performance:
   - Compress videos (H.264/H.265) and archives before upload.
   - Keep only assets required at runtime.
   - Mark non-critical assets as optional (`required: false`) to avoid blocking setup.
- Storage control:
   - Periodically audit unused release assets.
   - Keep dataset snapshots in coarse-grained versions to reduce churn.

### Example Manifest Snippet

```json
{
   "version": "1.0.0",
   "assets": [
      {
         "name": "hero-showreel",
         "url": "https://github.com/<owner>/<repo>/releases/download/assets-v1.0.0/hero-showreel-v1.0.0.mp4",
         "dest": "public/media/hero-showreel-v1.0.0.mp4",
         "sha256": "<sha256_here>",
         "required": true
      }
   ]
}
```

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Components:** Radix UI, Shadcn UI
- **Form Handling:** Web3Forms

## 📄 License
Personal Project - All Rights Reserved.
