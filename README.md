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

To maintain a lightweight repository and ensure fast cloning, this project uses a **GitHub Releases Asset Workflow**.

- **Code:** Hosted in the main branch.
- **Large Assets:** Videos (`.mp4`), Project ZIPs, and PDFs are hosted as GitHub Release Assets.
- **Hydration:** The project automatically fetches missing assets during `npm install` or `npm run dev` using the `scripts/download-assets.mjs` script.

### Adding New Assets
1. Upload your file to a GitHub Release.
2. Add the URL and destination path to `scripts/download-assets.mjs`.

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Components:** Radix UI, Shadcn UI
- **Form Handling:** Web3Forms

## 📄 License
Personal Project - All Rights Reserved.
