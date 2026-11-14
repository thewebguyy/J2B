# Security

## Reporting a vulnerability

Please report security issues privately to `hello@journey2better.com`. Do not
open a public issue for a vulnerability. Include a short description and, where
possible, steps to reproduce.

## Scope

Journey2Better is a public marketing site. The only server-side surface is the
enquiry API route, which is disabled until delivery credentials are configured.

## Secrets and configuration

- `NEXT_PUBLIC_ENQUIRY_ENABLED` — a public feature flag (not a secret). Set it
  to `"true"` only when delivery is configured.
- `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` — server-only. Never
  prefix these with `NEXT_PUBLIC_`, and never commit real values.

Use `.env.local` locally. `.env.example` documents the names without values.

## Enquiry form

- Inputs are validated server-side (`src/lib/enquiry.ts`); client validation is
  cosmetic only.
- The request body is capped at 16 KiB (enforced on `Content-Length` and during
  streamed consumption) and returns `413` when exceeded.
- Only `application/json` requests are accepted (`415` otherwise), and malformed
  JSON returns a controlled `400`.
- Browser requests are restricted to an exact-match origin allowlist. Defaults
  are the production URL, localhost, and this deployment's exact `VERCEL_URL`;
  previews use that trusted platform value. Override with `ALLOWED_ORIGINS`
  (exact origins only; wildcards are not supported).
- A honeypot field and per-instance rate limiting provide basic spam defence.
- Rate-limit keys trust `x-forwarded-for`/`x-real-ip` only when running on
  Vercel (`VERCEL=1`); elsewhere those headers are untrusted and all requests
  share a single bucket.
- Email content is HTML-escaped before rendering.
- Delivery is disabled (HTTP 503) unless credentials are present, so the form
  never reports false success.

Known limitations (see `docs/SECURITY_HARDENING_REPORT.md`): rate limiting is
in-memory and per-instance rather than distributed, and no Content-Security
Policy is set yet. These are acceptable while the form is disabled and should be
addressed before enabling delivery at scale.

## Response security headers

The application sends `X-Content-Type-Options: nosniff`, `Referrer-Policy:
strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, a restrictive
`Permissions-Policy`, and `X-DNS-Prefetch-Control: on` from `next.config.ts`.

## Private client content

Do not commit client source documents (DOCX, PDF, Drive exports), draft copy,
QA screenshots or participant data. The repository contains only approved
public copy and approved media.
