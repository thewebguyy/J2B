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

Added an `Origin` check. Requests without an `Origin` header (non-browser
clients) are accepted; browser requests must originate from an allowed origin.
Defaults cover the production URL, localhost, and `*.vercel.app` previews, and
are overridable via `ALLOWED_ORIGINS`. Rejected requests return `403`.

### P2 — Trusted-forwarded-header handling

`clientIp` now prefers `x-vercel-forwarded-for` (set by the platform) over
`x-forwarded-for` and never trusts arbitrary `X-Forwarded-*` values directly.

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

- `ALLOWED_ORIGINS` — optional comma-separated origin allowlist (supports one
  `*` wildcard). Defaults cover production, localhost, and Vercel previews.
- Delivery stays disabled until `RESEND_API_KEY` and `ENQUIRY_TO_EMAIL` are
  intentionally configured.

## Testing evidence

Local HTTP verification of `/api/enquiries`: `415` (non-JSON), `413` (oversized
body), `403` (cross-origin), `400` (malformed JSON, missing consent, honeypot),
`503` (valid submission without delivery credentials). Security headers were
observed on the homepage response. Unit tests cover `escapeHtml`,
`isJsonContentType`, `isAllowedOrigin`, and the body-size constant; 32 tests
pass in total.

## Production rollout

Deploy as a normal preview first and re-check: enquiry response codes, form
submission, video playback and fonts, and the new response headers. Do not set
`NEXT_PUBLIC_ENQUIRY_ENABLED` or Resend variables until delivery is approved.
