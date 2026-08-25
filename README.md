# Kreeda Studios

Cinematic single-page website for Kreeda Studios — a multidisciplinary studio for creative production and web development.

## What we offer

- **Creative production** — 3D animation, modelling, VFX, editing, archviz, Unity & Unreal
- **Web development** — Next.js, WordPress, PHP, Laravel, MERN, Three.js / React Three Fiber, ShadCN UI

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

The enquiry form posts to `/api/contact`.

### Make it deliver email (recommended)

1. Create a free [Resend](https://resend.com) account and API key.
2. Copy `.env.example` → `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=you@yourdomain.com
```

3. Restart `npm run dev`.

On Vercel: Project → Settings → Environment Variables → add the same keys for Production, then redeploy.

For production sending from your domain, verify the domain in Resend and set:

```bash
CONTACT_FROM_EMAIL="Kreeda Studios <hello@yourdomain.com>"
```

### Alternative: Formspree / webhook

```bash
CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Without either option configured, the form still validates and shows success locally, but nothing is emailed (a warning is logged on the server).


## Content

Services, process steps, portfolio studies, and tools live in `src/data/`. Portfolio cards are labeled as concept / internal study / demo until real work is supplied. Place project stills in `public/images/portfolio/` when available.

The brand mark is `public/logo.png`.
