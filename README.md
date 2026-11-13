# Journey 2 Better

Journey2Better is a personal-development brand founded by Sade Omatsuli. The
site begins with the founder's forthcoming memoir and opens into a wider journey
of life lessons, personal growth, community and mutual encouragement.

The site is built with Next.js 15 (App Router), React 19, TypeScript, Tailwind
CSS and GSAP. It is deployed on Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage with the cinematic hero |
| `/about` | Story, founder, values and vision |
| `/community` | Pillars, guidelines and disclaimer |
| `/events` | Better Together, annual events and the memoir launch |
| `/book` | The memoir |
| `/resources` | Provisional journals, study guide and cards |
| `/shop` | Merchandise catalogue preview |
| `/contact` | Enquiry form |

Several offerings are intentionally provisional. Dates, prices, formats and
availability are marked TBC until the client confirms them.

## Requirements

- Node.js 22.6 or newer (the tests import TypeScript directly, which needs
  Node's type-stripping support); Node 24 LTS is recommended
- npm

## Running locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint via Next.js
npm test            # Node test runner
npm run build       # Production build
```

## Environment variables

Copy `.env.example` to `.env.local` for local work. The enquiry form is disabled
until email delivery is configured. See [SECURITY.md](SECURITY.md) for the
server-only variables. Never commit real secrets.

## Media pipeline

The cinematic hero and page backgrounds are muted, optimized MP4 files under
`public/videos/`, with poster frames under `public/videos/posters/`. Original
footage lives outside `public/` in `assets/video-sources/` and is re-encoded
with `scripts/encode-videos.py`. See [ARCHITECTURE.md](ARCHITECTURE.md) for
details and long-term storage guidance.

## Deployment

Vercel builds from the `main` branch for production and creates preview
deployments for other branches. No `vercel.json` is required; the framework is
auto-detected.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). To report a security issue, follow
[SECURITY.md](SECURITY.md).
