# CreativeBee — Next.js Creator Platform Website

All-in-one creator platform website with a Cosmofeed-style pinned scroll hero,
built with Next.js 14 (App Router) + Framer Motion.

## Run locally
```bash
npm install
npm run dev        # development → http://localhost:3000
npm run build && npm start   # production
```

## Highlights
- `components/Hero.jsx` — Cosmofeed-style scroll effect: `useScroll` + `useSpring`
  drive CSS variables (`--pw`, `--pc`, `--pf`) that split the giant gradient
  words, glide the phone from centre into the layout and fade the headline in.
- Aurora gradient blobs + hue-wash overlay (magenta/purple/gold colour effects).
- Framer Motion reveals, honeycomb spring pop-ins, animated counters,
  testimonial carousel, FAQ height animation.
- Static fallback for mobile (≤820px) and `prefers-reduced-motion`.

## Deploy
Push to GitHub and import in Vercel (zero-config), or `npm run build` on any Node host.
