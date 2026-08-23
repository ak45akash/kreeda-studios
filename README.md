# Kreeda Studios

Cinematic single-page website for Kreeda Studios — a creative production studio working in 3D animation, VFX, modelling, architectural visualization, and real-time (Unity / Unreal).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + GSAP ScrollTrigger
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Contact form

The enquiry form posts to `/api/contact`. By default it validates the payload and returns success. To forward submissions, copy `.env.example` to `.env.local` and set:

- `CONTACT_FORM_ENDPOINT`
- `CONTACT_FORM_API_KEY` (optional)

## Content

Services, process steps, portfolio studies, and tools live in `src/data/`. Portfolio cards are labeled as concept / internal study / demo until real work is supplied. Place project stills in `public/images/portfolio/` when available.

The brand mark is `public/logo.png`.
