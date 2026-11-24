# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Portfolio website for **Yooyoung (UX/UI Designer)** built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and a custom WebGL "Living Portrait" hero engine.

## Commands

- Install dependencies: `npm install`
- Start dev server (http://localhost:3000): `npm run dev`
- Typecheck: `npm run lint` (`tsc --noEmit`)
- Production build: `npm run build`
- Preview production build: `npm run preview`

No environment variables or API keys are required to run or build the current frontend.

## Architecture & Key Files

- `index.html`: Loads the `Kanit` Google Font, page metadata, and the inline WebGL Living Portrait script (`bootLivingPortrait()`), which polls with `requestAnimationFrame` until React mounts `#faceGl`, `#magnetWrap`, and `.contact-btn`.
- `public/face/`: 1024x1024 RGBA transparent character frames served at `/face/<id>.png`:
  - `rest.png` — default resting expression
  - `closed.png` — blinking / idle eyes closed
  - `left.png`, `right.png` — horizontal eye-gaze frames
  - `pain.png` — face press/drag expression
  - `chu.png` — mouth hover expression
- `src/index.css`: Tailwind CSS v4 (`@import "tailwindcss";`), base resets inside `@layer base`, gradient `.hero-heading` styling, and `.hero-portrait-wrap` / `#faceGl` / `#faceProps` positioning.
- `src/App.tsx`: Main page composition (`HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`, `ProjectModal`, `ContactModal`).
- `src/components/`:
  - `HeroSection.tsx`: Top nav (`About`, `Projects`, `Contact`), `"Hi, i’m Yooyoung"` hero headline, Living Portrait canvas container, tagline, and magnetic `ContactButton`.
  - `MarqueeSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `ProjectsSection.tsx`, `Modals.tsx`: Remaining portfolio sections and modals.
  - `FadeIn.tsx`, `Magnet.tsx`, `AnimatedText.tsx`, `ContactButton.tsx`, `LiveProjectButton.tsx`: Reusable UI and motion components.

## Important Conventions & Gotchas

- **Living Portrait DOM Hooks**: Never remove `#faceGl`, `#magnetWrap`, `#magnetInner`, `#faceFallback`, `#faceProps`, `#faceFly`, `#faceHand`, or the `.contact-btn` class on contact buttons—`index.html` attaches WebGL rendering and pointer listeners to them.
- **Gaze & Expression Mapping (`IDS` in `index.html`)**:
  - `left.png` and `right.png` are cross-mapped in `IDS` so cursor-left shows `right.png` and cursor-right shows `left.png` (matching viewer-perspective eye direction).
  - Uncreated expression keys in `IDS` fall back to `'rest'` (`rest.png`) using a shared GPU texture cache (`byId`).
  - Lip hover (`zone === 'mouth'`) triggers `chu.png`; face `pointerdown` + drag triggers `pain.png`; hair-color tap cycling is intentionally disabled (`ZONES.tap = {}`).
  - Any new PNG added to `public/face/` must be 1024x1024 RGBA with identical head scale and pixel alignment to `rest.png`.
- **Tailwind CSS v4**: Keep global resets inside `@layer base` in `src/index.css` so Tailwind padding/margin utilities continue to work.
- **Hero Framing**: `.hero-portrait-wrap` uses negative `bottom` offsets (`-6vh` to `-9vh`) with `overflow-hidden` on the hero `<section>` so the lower torso crops cleanly while keeping `"Hi, i’m Yooyoung"` unobstructed above the head.
