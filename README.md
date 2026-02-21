# MacBook 3D Showcase (Three.js + React + GSAP + Vite)

An interactive 3D product experience built with React, Three.js (via @react-three/fiber), and GSAP. The app showcases MacBook models with rich animations, lighting, and feature walkthroughs. Bundled with Vite and TypeScript.


## Features
- 3D MacBook models (14", 16") rendered with Three.js
- Smooth scene transitions and UI animations with GSAP
- Model switching and camera staging
- Responsive layout with React components
- Optimized asset pipeline via Vite
- TypeScript-first codebase


## Tech Stack
- React + TypeScript
- Vite (dev server, bundler)
- Three.js via @react-three/fiber and @react-three/drei helpers
- GSAP for timeline-based animations
- Zustand (lightweight state management)
- ESLint for code quality


## Getting Started

### Prerequisites
- Node.js 18+ (recommended LTS)
- pnpm, npm, or yarn

### Install
```bash
# with pnpm (recommended)
pnpm install

# or with npm
npm install

# or with yarn
yarn
```

### Development
```bash
# start local dev server with hot reload
pnpm dev
# or
npm run dev
# or
yarn dev
```
Then open the URL printed in the terminal (default http://localhost:5173).

### Build
```bash
# production build
pnpm build
# or
npm run build
# or
yarn build
```
The output will be in the dist/ directory.

### Preview (serve production build locally)
```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```


## Project Structure
```
.
├─ public/                 # Static assets copied as-is
│  ├─ fonts/               # OTF font files used in UI/branding
│  ├─ models/              # GLB models (MacBook variants)
│  ├─ videos/              # Feature/hero video assets
│  └─ ...                  # Icons, images, SVGs
├─ src/
│  ├─ assets/              # App-specific images, svgs, etc.
│  ├─ components/
│  │  ├─ models/           # 3D components (Macbook, variants)
│  │  ├─ three/            # Three.js helpers (lights, switcher)
│  │  ├─ Features.tsx      # Feature highlights section
│  │  ├─ Footer.tsx        # Footer section
│  │  ├─ Hero.tsx          # Landing hero with canvas
│  │  ├─ Highlights.tsx    # Animated highlight cards
│  │  ├─ Navbar.tsx        # Top navigation
│  │  ├─ Performance.tsx   # Performance comparisons
│  │  ├─ ProductViewer.tsx # 3D product viewer (R3F canvas)
│  │  └─ Showcase.tsx      # Combined experience section(s)
│  ├─ constants/           # Centralized constants/config
│  ├─ interfaces/          # Shared TypeScript interfaces
│  ├─ store/               # Zustand store configuration
│  ├─ App.tsx              # App shell / routing of sections
│  ├─ index.css            # Global styles
│  └─ main.tsx             # React entry
├─ index.html              # Vite HTML template
├─ vite.config.ts          # Vite configuration
├─ eslint.config.js        # ESLint configuration
├─ tsconfig*.json          # TypeScript configs
└─ package.json
```


## Available Scripts
Refer to package.json for the full list. Common ones include:
- dev: Start Vite dev server
- build: Build for production
- preview: Preview the production build locally
- lint: Lint the project (if configured in package.json)

Run with your preferred package manager, e.g. `pnpm dev`.


## Assets
- 3D Models: public/models/*.glb
- Videos: public/videos/*.mp4
- Fonts: public/fonts/*.otf

These are large files optimized for web usage. If you change filenames/paths, update references in components accordingly.


## Development Notes
- 3D: Components under src/components/models and src/components/three encapsulate Three.js logic. ModelSwitcher manages which GLB is displayed; StudioLight configures lighting.
- State: src/store contains the Zustand store for UI/scene state.
- Animations: GSAP timelines live within UI/section components for coordinated transitions. Keep timelines local to avoid tight coupling.
- Performance: Prefer lazy-loading heavy sections/assets and use Drei helpers (e.g., useGLTF, useProgress) to manage loading states. Keep texture and video sizes reasonable.
- Type Safety: Common interfaces live under src/interfaces.


## Troubleshooting
- Models not loading: Check console for CORS or 404 errors. Ensure model paths match files in public/models.
- Black screen / no canvas: Verify WebGL support in your browser and that R3F Canvas is mounted (ProductViewer/Hero components).
- Slow performance: Reduce video resolution/bitrate, compress GLB, or limit shadow quality and sample counts.
- Type errors: Run TypeScript in watch mode with the dev server or run your linter for quick feedback.


## Deployment
Any static host that supports SPAs will work:
- Build the project (see Build)
- Upload dist/ to your hosting provider (e.g., Netlify, Vercel, GitHub Pages, Cloudflare Pages)

If hosting under a subpath, configure base in vite.config.ts accordingly.


## License
This project is provided as-is. Replace this section with your chosen license (MIT, Apache-2.0, etc.) if you plan to distribute.


## Acknowledgements
- React Three Fiber and Drei maintainers
- GSAP team
- Model/icon/image authors as appropriate
