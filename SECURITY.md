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
- A honeypot field and per-instance rate limiting provide basic spam defence.
- Email content is HTML-escaped before rendering.
- Delivery is disabled (HTTP 503) unless credentials are present, so the form
  never reports false success.

Known limitations (see `docs/ENGINEERING_AUDIT.md`): rate limiting is
in-memory and per-instance; there is no request body-size cap; there is no
origin/referer check. These are acceptable while the form is disabled and
should be addressed before enabling delivery at scale.

## Private client content

Do not commit client source documents (DOCX, PDF, Drive exports), draft copy,
QA screenshots or participant data. The repository contains only approved
public copy and approved media.
