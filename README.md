# Journey 2 Better — The Woven Thread

> A bespoke, editorial digital sanctuary for a UK-based women's community built on sisterhood, shared growth, and everyday encouragement.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/Motion-GSAP_3.12-88ce02?style=flat-square&logo=greensock)](https://gsap.com/)

---

## ✦ Overview

**Journey 2 Better** is an award-calibre digital platform crafted around the creative concept of **The Woven Thread**. Transcending standard corporate templates, it provides a warm, editorial sanctuary where women navigate the messy middle of life through intentional connection, curated sister circles, mindful workshops, and annual retreats.

---

## ✦ Core Pages

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Homepage** | Editorial welcome (*"Come as you are"*), the community ethos, 4 core pillars (Sisterhood, Growth, Sanctuary, Elevation), and threshold invitation. |
| `/about` | **About** | The founding journey, embracing the messy middle of life, the 4 foundational values, and community heritage. |
| `/community` | **Community** | The 3 core offerings (Sister Circles, Mentorship, Everyday Encouragement) and the 3-step vertical journey to belonging. |
| `/events` | **Events** | Both virtual and physical gatherings (Rise & Reflect Morning Circle, London Workshop, Annual Sisterhood Retreat) with an interactive gathering rhythm timeline. |

---

## ✦ Design System & Brand Identity

* **Creative Concept:** *The Woven Thread* — visualising life’s individual stories interweaving into a resilient tapestry of shared sisterhood.
* **Curated Palette:**
  * **Plum Deep:** `#24111E` — Primary grounding and editorial contrast
  * **Plum:** `#3B1D32` — Warm deep midtone
  * **Berry:** `#6B2D5C` — Vibrant brand accent
  * **Cream:** `#FAF7F2` — Soft, breathable parchment background
  * **Blush:** `#F3E8EE` — Gentle card container tint
  * **Gold:** `#C49A45` — Subtle metallic highlight symbolizing the golden thread
  * **Dark Grey:** `#2A2829` — High-legibility editorial typography
* **Motion & Interactivity:**
  * GSAP-driven scroll-triggered reveals and staggered text sequences
  * Interactive `MagneticButton` components with spring physics
  * Dynamic `GoldenThread` SVG flourishes connecting sections

---

## ✦ Tech Stack

* **Framework:** [Next.js 15.5](https://nextjs.org/) (App Router, Static Site Generation)
* **Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript 5.7](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS
* **Animation:** [GSAP 3.12](https://gsap.com/)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## ✦ Getting Started

### Prerequisites

* **Node.js** 18.18+ (Node 20.x or 22.x recommended)
* **npm**, **yarn**, or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thewebguyy/J2B.git
   cd J2B
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Production Build

To test and build the production bundle locally:

```bash
# Type check and build
npm run build

# Run production server
npm run start
```

---

## ✦ Deployment

This project is optimized for zero-config deployment on [Vercel](https://vercel.com):

* **Framework Preset:** `Next.js`
* **Root Directory:** `./`
* **Build Command:** `next build`
* **Output Directory:** `.next`

---

## ✦ License

Private repository. All rights reserved &copy; Journey 2 Better.
