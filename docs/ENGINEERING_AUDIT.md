# Journey2Better — Engineering Audit

Date: 2026-11-13
Branch under review: `main` (`65657d0c`)
Audit branch: `audit/engineering-hardening`

## 1. Executive assessment

The codebase is a small, well-structured, content-driven Next.js site. Its
strengths are a single typed content source, a shared SEO helper, disciplined
server/client boundaries, and accessibility-conscious motion and video that
respect reduced-motion and Save-Data preferences. The main weaknesses are
repository weight from committed video sources, a disabled-by-default but
lightly-hardened enquiry endpoint, weak string-based tests, and a stale README.

There are no confirmed critical (P0) vulnerabilities in the code as reviewed.
The most material, concrete problem is hygiene: roughly 35 MB of original video
footage was committed inside `public/videos/sources/`, so it was both served and
deployed. This audit relocates that footage out of `public/`.

## 2. Architecture overview

App Router with eight static routes, one API route, and no database or
authentication. Approved copy, values, pillars, guidelines, founder biography
and the health disclaimer are centralized in `src/content/j2b.ts`; SEO is
centralized in `src/content/seo.ts`; media metadata in `src/content/videos.ts`.
Components are split by page area under `src/components/*`, with pure brand
SVG in `src/components/brand/*`. The only server code is
`src/app/api/enquiries/route.ts`.

The architecture is appropriate for the product stage. See
`ARCHITECTURE.md` for the full map and extension points.

## 3. Security findings

### Confirmed by code

- **P3 — No secrets committed.** No hardcoded credentials, tokens, or `.env`
  files in tracked files. `RESEND_API_KEY` is read from the server environment
  only; the single public variable is the non-secret
  `NEXT_PUBLIC_ENQUIRY_ENABLED` flag.
- **P3 — Safe HTML emission.** The only `dangerouslySetInnerHTML` is the static
  JSON-LD block in `src/app/layout.tsx`, and `<` is escaped. Enquiry email HTML
  escapes name/email/country/message (`escapeHtml` in the API route).
- **P3 — No dangerous client code.** No `eval`, `innerHTML`, `localStorage`,
  `sessionStorage`, or unexpected outbound requests. The only outbound call is
  the server-side Resend delivery; external links are limited to WhatsApp and
  mailto.
- **P3 — Enquiry validation is server-side.** Categories are allowlisted,
  lengths capped, email normalized and pattern-checked, and consent is
  mandatory (`src/lib/enquiry.ts`).

### Requiring runtime verification

- **P2 — Rate limiting is in-memory and per-instance**
  (`src/app/api/enquiries/route.ts`). It resets on cold start and is not shared
  across serverless instances. Low impact while the route is disabled; upgrade
  to a durable limiter (Upstash) before enabling delivery at volume.
- **P2 — No request body-size cap.** `request.json()` parses unbounded input;
  length checks run after parse. Add a content-length guard or capped read.
- **P2 — Dependency findings could not be re-verified.** `npm audit` cannot
  reach the registry from this sandbox. A prior networked run reported nine
  findings (eight moderate, one high) concentrated in the dev toolchain
  (`postcss` transitive of `next`, `minimatch` transitive of
  `@typescript-eslint`). Re-run `npm audit` in CI.

### Recommendations (not yet implemented)

- Add a Content-Security-Policy and base security headers via
  `next.config.ts` headers. Deploy only after validating against the inline
  JSON-LD and video/GSAP usage.
- Add an `Origin`/`Referer` check to the enquiry endpoint (low urgency: no
  authenticated state).
- Self-host the two Google fonts (`next/font/local`) to remove the
  build-time font fetch, a small availability and supply-chain dependency.

No evidence of backdoors, suspicious scripts, hidden routes, or unexplained
code paths was found. Automated scans cannot prove absence; the above is
limited to source review and an incomplete dependency audit.

## 4. Repository hygiene

- **P1 (fixed this audit) — Original video sources were committed and served.**
  Four 1080p source files (~35 MB total) lived in `public/videos/sources/`,
  so they were deployed with every build. Moved to `assets/video-sources/`
  (tracked, but outside `public/`). They remain in Git history; see section 10.
- **P3 — Duplicate logo assets.** `j2b logo.jpeg` (root, spaces in filename),
  `public/logo.jpeg`, and `public/images/logo.jpeg` are identical copies.
  Consolidate to one reference and update `src/content/seo.ts`.
- **P3 — Machine-specific QA script.** `scripts/qa-browser-playback.py` hardcodes
  `C:\Program Files\Google\Chrome\...` and depends on an undeclared `websocket`
  package. It is a manual tool, not CI.
- **P3 — Encode script dependency undeclared.** `scripts/encode-videos.py`
  requires `imageio-ffmpeg`, now documented in the module docstring.
- **P3 — `.gitignore` gaps.** Added ignores for stray root video intermediates
  and `public/qa-screens/`.

## 5. Dead code and duplication

- **P2 (fixed this audit) — Unused `VideoSequencer.tsx`.** The component
  reimplemented the double-buffer logic that `HomeHero` already inlines, and it
  had no importers. Deleted.
- **P3 — Unused motion tokens.** `BREATH_EASING`, `BREATH_EASING_ARRAY`, and
  `DURATIONS` in `src/utils/motion.ts` have no consumers. Left in place for
  possible future animation work.
- **P2 — Unused dependencies.** `clsx` and `tailwind-merge` are declared but
  not imported anywhere. Recommended removal; deferred to avoid clashing with
  concurrent UI work.

## 6. Dependency and supply chain

Next.js 15.5.28 (maintenance LTS), React 19.3.1, TypeScript 5.9.3, Tailwind
3.4.19, GSAP 3.15.0. `eslint-config-next` is pinned to 15.1.0 while Next
resolves to 15.5.28 — align these. The project has no `engines` field;
document Node 20+. `npm audit` could not run offline; see section 3.

## 7. API and backend reliability

The enquiry endpoint has consistent response shapes (400 with `fieldErrors`,
429, 502, 503, 201), server-side validation, a honeypot, HTML escaping, and a
truthful disabled state (503) when credentials are absent. It does not log
personal data. It has no retry or idempotency, which is acceptable for
low-stakes email while volume is low. Before enabling delivery, add a durable
rate limiter, a body-size cap, and an origin check, and choose a monitoring
signal for delivery failures.

## 8. Performance and media

Optimized renditions total ~19 MB; posters provide a zero-CLS LCP. The homepage
marks both buffer slots `preload="auto"`, fetching two desktop scenes upfront;
consider `preload="metadata"` (or `none`) for the inactive slot. Only MP4 is
shipped despite the storyboard's WebM targets; acceptable, but VP9 WebM would
reduce mobile payloads. Reduced-motion and Save-Data are honoured. GSAP is code
split. No Lighthouse or Core Web Vitals numbers are claimed; none were measured.
`next/image` uses `quality` values that will need `images.qualities` configured
before a Next 16 upgrade.

## 9. Scalability and teammate-readiness

The code is understandable and safely extendable by a second engineer. The
biggest onboarding gaps were the stale README (rewritten) and the absence of CI
(added). Avoid introducing databases, queues, or authentication until a
concrete product need (memberships, payments, event registrations) justifies
their operational cost.

## 10. Test and CI/CD assessment

Twenty-eight tests pass, but most assert implementation details by substring
matching source text rather than exercising behaviour. The meaningful unit
coverage is `tests/enquiry.test.mjs` (validation logic). Missing: an API
integration test for the route handler statuses, and any browser smoke test.
Added a minimal GitHub Actions workflow (`typecheck`, `lint`, `test`, `build`)
with `contents: read` permissions and no deployment step.

## 11. Prioritized remediation roadmap

- **P0** — None identified.
- **P1** — Keep video originals out of `public/` (done); before enabling
  enquiries, harden rate limiting/body cap/origin check; align
  `eslint-config-next` with Next.
- **P2** — Re-run `npm audit` in CI and remediate; self-host fonts; remove
  unused `clsx`/`tailwind-merge`; add an API route integration test; add
  `images.qualities`; reduce homepage video preload; deduplicate logo assets.
- **P3** — Centralize `siteUrl`; remove unused motion tokens; document the QA
  scripts; consider Git LFS or history cleanup for media (separate, reviewed
  task — removing files in a later commit does not erase history).

## 12. Evidence and validation commands

Run from the repository root:

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
npm audit
```

Results in this environment: typecheck passed, lint passed (no warnings), 28/28
tests passed. `npm ci`, `npm run build`, and `npm audit` require network and
were blocked; build failure was limited to the offline Google Fonts fetch and
is not a code regression.
