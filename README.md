# Thinh Phan — Personal Portfolio

A premium, highly-performant developer portfolio built with a "Liquid Motion" design language.

## 🚀 Tech Stack
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack.
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) (latest).
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & Pure CSS Keyframes.
- **Icons:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/).
- **Language:** TypeScript 5.

## 🎨 Design System: "Liquid Motion"
The portfolio follows a curated aesthetic aimed at a premium, state-of-the-art feel.

### Color Palette
- **Peach (#FFB09C):** Soft call-to-action and highlights.
- **Lavender (#C4B5FD):** Secondary accents and gradients.
- **Mint (#6EE7B7):** Success states and technical highlights.
- **Navy (#1A1A2E / #0D1117):** Deep backgrounds for high-contrast presentation.

### Typography
- **Syne:** Professional yet unique headings.
- **Inter:** Highly readable body text.
- **JetBrains Mono:** For code-like elements and the Interactive Terminal.

---

## 🛠️ Key Technical Features

### 1. High-Performance Tech Universe (Orbit)
Located in `src/components/TechOrbit.tsx`.
- **Optimization:** Uses pure CSS `@keyframes` for rotations to offload animations to the **GPU compositor thread**. This ensures 60FPS even when the main thread is busy.
- **Visuals:** Features official brand logos from Simple Icons CDN, dynamically color-tinted to match the theme.
- **Center Piece:** A custom-drawn SVG logo (`TPLogo.tsx`) which is vector-based for perfect scaling and transparency.

### 2. Interactive Terminal
Located in `src/components/InteractiveTerminal.tsx`.
- Provides an immersive way for tech-savvy visitors to explore the portfolio.
- **Commands:** `help`, `about`, `skills`, `projects`, `neofetch`, etc.
- **Logic:** Custom state-based command processor with command history support.

### 3. GitHub Contributions Bar Chart
Located in `src/components/GitHubHeatmap.tsx`.
- Fetches real-time data from GitHub.
- Offers a **3D perspective bar chart** view (simulating a cityscape) and a traditional 2D flat view.
- Optimized rendering using local state and CSS transforms instead of heavy motion libraries for every single cell.

### 4. SEO & Social Sharing
- **Meta Tags:** Fully configured Open Graph and Twitter Card tags in `layout.tsx`.
- **Favicon:** Uses a high-quality `icon.svg` for crisp rendering on high-DPI displays.
- **OG Image:** A custom-designed 1200x630 preview image at `public/og-image.png`.

### 5. Console Easter Egg
- A specialized component `ConsoleEasterEgg.tsx` that triggers a stylized ASCII "TP" logo and technical contact info in the browser's Developer Tools (F12).

---

## 📈 Performance Optimization Strategies
- **GPU Acceleration:** Heavy use of `will-change: transform` and `backdrop-filter` where appropriate.
- **Passive Listeners:** All scroll and mouse events use `{ passive: true }` to prevent blocking the scrolling thread.
- **SVG over PNG:** Critical logos and icons are SVG to ensure fast loading and zero blurring.
- **Framer Motion Tuning:** Transitions use `type: "spring"` for a physical feel or specific cubic-beziers for the liquid motion effect.

## 📂 Project Structure
- `src/app/`: Next.js pages and layouts.
- `src/components/`: Reusable UI modules (Atomic design approach).
- `src/lib/data.ts`: **The single source of truth** for all personal info, projects, and skills. Update this file to change site content.
- `src/lib/animations.ts`: Centralized animation variants.
- `public/`: Static assets (Logos, OG Images, SVGs).

## 🚀 Development & Maintenance
To update the skills or projects, modify the exports in `src/lib/data.ts`.
To fix animation timing site-wide, update constants in `src/lib/animations.ts`.

---
Built with ❤️ by Thinh Phan
