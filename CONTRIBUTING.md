# Contributing

## Setup

```bash
npm ci
npm run dev
```

## Before a pull request

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Workflow

- Branch from `main` using a short prefix such as `feat/`, `fix/`, `chore/` or
  `docs/`.
- Keep changes focused and preserve the existing teal/gold/ivory design system.
- Open a pull request targeting `main`. CI runs typecheck, lint, tests and build.
- Production deploys only from `main`. Preview deployments are created
  automatically for other branches.

## Client content rules

- Approved client copy lives in `src/content/j2b.ts`; do not re-type or silently
  reword it. Flag editorial suggestions separately for approval.
- Do not invent dates, prices, availability, testimonials or service claims.
- Do not commit private client documents, drafts or participant information.
- Keep the brand faith-inclusive; do not assert a settled religious or
  organizational classification on the client's behalf.

## Media

Re-encode video from `assets/video-sources/` using `scripts/encode-videos.py`
when the approved footage changes. Commit only optimized renditions under
`public/videos/`; keep originals outside `public/`.
