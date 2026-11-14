# Security Hardening Report

Branch: `security/backend-hardening`
Baseline: `main` = `b0b00363` (merged engineering hardening, PR #1)

## Threat model

The public attack surface is small: eight static routes, one JSON POST route
(`/api/enquiries`), public static assets (images and video), and an optional
Resend email delivery path. There is no authentication, database, or server
state. The primary risks are abuse of the enquiry endpoint (spam, request
flooding, oversized payloads), cross-origin form abuse, email content
injection, secret exposure, and missing response security headers.

## Findings and fixes

### P1 — Unbounded request body

The endpoint previously parsed `request.json()` without a size limit, allowing
a large body to be buffered before validation. Fixed by enforcing a 16 KiB cap
twice: a fast `Content-Length` check and an incremental streamed read that stops
as soon as the limit is exceeded. Oversized requests now return `413`.

### P1 — Uncontrolled media type and malformed JSON

Added a `Content-Type` check (`application/json` only, otherwise `415`) and
safe `JSON.parse` error handling that returns a controlled `400` without
leaking internals.

### P2 — Cross-origin form submissions

Added an exact-match `Origin` check. Requests without an `Origin` header
(non-browser clients) are accepted; browser requests must originate from an
explicitly allowed origin. Defaults are the production URL, localhost, and the
exact `VERCEL_URL`/`VERCEL_PROJECT_PRODUCTION_URL` hostnames for this
deployment, so previews work without trusting every `*.vercel.app` domain.
Wildcards are not supported; `ALLOWED_ORIGINS` lists exact origins. Rejected or
malformed origins (including the opaque `"null"`) return `403`. Origin is an
abuse/CSRF control, not authentication.

### P2 — Trusted-forwarded-header handling

`clientIp` trusts `x-forwarded-for`/`x-real-ip` only when `VERCEL=1`, where the
platform sets and overwrites them. Outside Vercel those headers are
client-controllable, so all requests share one conservative bucket instead of
letting a spoofed header bypass throttling. The limiter remains in-memory and
per-instance; it is not distributed.

### P2 — Missing security headers

Added `X-Content-Type-Options: nosniff`, `Referrer-Policy:
strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, a restrictive
`Permissions-Policy`, and `X-DNS-Prefetch-Control: on` via `next.config.ts`.

### P3 — HTML escaping consolidated

Email HTML escaping was moved into `src/lib/enquiry.ts` (`escapeHtml`) so it is
reused and unit-tested. The provider integration already kept the API key
server-only, controlled sender/recipient from configuration, and returned
predictable `502` responses on delivery failure.

## Remaining risks and deliberate limitations

- Rate limiting remains an in-memory, per-instance map. It is a first defence
  only and is not distributed. This is documented, not misrepresented. A durable
  limiter (e.g. Upstash) is recommended only if the form is enabled and abused;
  it is not provisioned here.
- A Content-Security-Policy is not yet set. A strict CSP requires nonce-based
  script handling across Next.js hydration and is a staged follow-up rather than
  a risk-free one-line change.
- Dependency audit could not be re-run offline; see the dependency section.
- The enquiry form remains disabled (delivery credentials are absent), which is
  the intended production state.

## Configuration

- `ALLOWED_ORIGINS` — optional comma-separated list of exact trusted origins
  (no wildcards). Defaults cover production, localhost, and the exact
  `VERCEL_URL`/`VERCEL_PROJECT_PRODUCTION_URL` hostnames.
- Delivery stays disabled until `RESEND_API_KEY` and `ENQUIRY_TO_EMAIL` are
  intentionally configured.

## Testing evidence

Local HTTP verification of `/api/enquiries` is automated in
`tests/enquiry-api.integration.mjs` (run with `npm run test:api`, also a CI
step). It launches Next and asserts: valid request → `503` disabled state with
no email sent, missing Origin accepted, invalid JSON → `400`, non-JSON → `415`,
unauthorized Origin → `403`, oversized body with Content-Length → `413`,
oversized streamed body without Content-Length → `413`, and the security
headers. Unit tests also cover `escapeHtml`, `isJsonContentType`,
`isAllowedOrigin` (exact match, malformed and opaque origins), and the
body-size constant. 32 unit tests plus 8 endpoint integration tests pass.

## Production rollout

Deploy as a normal preview first and re-check: enquiry response codes, form
submission, video playback and fonts, and the new response headers. Do not set
`NEXT_PUBLIC_ENQUIRY_ENABLED` or Resend variables until delivery is approved.
