# Architecture

## Overview

The project is a static, content-driven Next.js site using the App Router. It
has no database, no authentication and no server state. The only server code is
a single API route for the (disabled by default) enquiry form.

## Directory map

```
src/
  app/               # App Router routes and metadata files
    api/enquiries/   # POST handler for the enquiry form
    {about,book,community,contact,events,resources,shop}/
  components/
    about/           # Founder, values, hero, etc.
    book/            # Memoir presentation
    brand/           # LogoMark, BotanicalMotif, PathRibbon (pure SVG)
    common/          # Navigation, Footer, EnquiryForm, MotionReveal,
                     # PageVideoBackground, MagneticButton
    community/       # Pillars, offerings, guidelines, steps
    events/          # Programme, timeline, thresholds
    home/            # Hero, truth, book, pillars, reflection, threshold
    resources/       # Resource grid and mentorship/speaking
    shop/            # Catalogue preview
  content/           # j2b.ts (copy), seo.ts (metadata), videos.ts (media)
  lib/               # enquiry.ts (validation, categories)
  utils/             # motion.ts (GSAP tokens and helpers)
public/
  images/            # Approved photography and logo
  videos/            # Optimized MP4 renditions + posters
assets/
  video-sources/     # Original footage (kept out of public/)
scripts/             # encode-videos.py, qa-browser-playback.py
tests/               # Node test-runner suites
docs/                # Design/engineering notes
```

## Key decisions

- **Single content source** (`src/content/j2b.ts`): approved copy, values,
  pillars, guidelines, founder biography and the health disclaimer live in one
  typed module so page components never hardcode client wording.
- **Shared SEO utility** (`src/content/seo.ts`): pages build canonical, Open
  Graph and Twitter metadata from one helper.
- **Server vs client**: pages are server components; only interactive pieces
  (`Navigation`, `EnquiryForm`, the video hero, `MotionReveal`) are `"use client"`.
- **Motion**: GSAP is loaded dynamically and only when `prefers-reduced-motion`
  is not set. `MotionReveal` wraps content and clears inline styles on finish.
- **Video**: the homepage uses a double-buffered sequencer; secondary pages use
  `PageVideoBackground`. Both respect reduced motion and Save-Data and fall back
  to a static poster frame.

## Extension points

- New pages follow the existing `page.tsx` + section-component pattern and reuse
  `pageMetadata(...)` for SEO.
- New enquiry categories are added in `src/lib/enquiry.ts`.
- New media is registered in `src/content/videos.ts`.

## Media ownership

Optimized renditions are the only video assets served. Originals are tracked in
`assets/video-sources/` so they are preserved without being deployed. Long-term,
move originals to object storage or Git LFS and re-generate renditions with
`scripts/encode-videos.py`; the script reads from `assets/video-sources/` and
writes to `public/videos/`.
