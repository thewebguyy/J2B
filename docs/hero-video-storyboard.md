# Journey2Better (J2B) — Homepage Hero Film Storyboard & Production Specification

## 1. Creative Objective & Brand Alignment
- **Core Promise:** Reflection. Growth. Connection. Hope. Becoming better.
- **Runtime:** 12 seconds target (acceptable range: 8–15 seconds), designed as a seamless loop.
- **Tone & Aesthetic:** Editorial, cinematic, human, international, optimistic, and grounded. Inspired by the kinetic emotional immediacy and visual confidence of modern digital flagships (such as Chowdeck's homepage energy) while remaining 100% faithful to Journey2Better's calm, authentic identity.
- **Explicit Guardrails:**
  - No baked-in text, titles, or lower thirds (HTML/CSS renders all typography & CTAs).
  - No narration or voiceover; strip all audio tracks (`-an`) so playback is strictly silent.
  - No rapid, jarring cuts; no generic corporate wellness clichés.
  - No artificial faces, distorted hands, or unverified "J2B member" claims.
  - Preserve J2B's inclusive positioning: men and women across ages, cultures, backgrounds, and faiths.

---

## 2. Colour Grading & Visual Continuity
Grade all four scenes to a unified palette derived from the official Journey2Better brand tokens:
- **Shadows / Depth:** Midnight Teal (`#02404D`)
- **Foliage / Midtones:** Living Teal (`#036E76`) & natural greens
- **Highlights:** Warm Ivory (`#FCF9E8`)
- **Sunlight / Rim Light:** Harvest Gold (`#D5A044`)
- **Framing / Safe Zone:** Keep primary subjects and focal action in the **right-center / upper-center 55%** of the 16:9 desktop frame so the left-side Warm Ivory editorial scrim never obscures faces or key motion. On mobile (4:5 / 9:16 crop), keep focal action centered.

---

## 3. Four-Part Visual Storyboard (12s Seamless Loop)

### Scene 1 — The Journey (`00:00 – 00:03`)
- **Visual:** A lush, green walking path at sunrise. Soft morning mist lifts off foliage; warm golden light filters through trees onto the ascending trail.
- **Camera Motion:** Gentle forward gimbal/Steadicam glide along the path, inviting the viewer into motion.
- **Narrative Connection:** Directly anchors the approved walking-path imagery (`/images/journey-path-hero.jpg`).
- **Transition Out:** Soft natural light bloom / match-cut dissolve into Scene 2.

### Scene 2 — Reflection (`00:03 – 00:06`)
- **Visual:** A quiet, grounded human moment of introspection—a person pauses in warm morning light beside an open journal or looking thoughtfully toward a window/horizon.
- **Emotional Tone:** Calm, purposeful, hopeful. *Do not portray sadness, trauma, or despair as the only starting point for personal growth.*
- **Camera Motion:** Subtle, unhurried push-in or gentle lateral drift (24fps).
- **Transition Out:** Warm cross-dissolve into Scene 3.

### Scene 3 — Connection (`00:06 – 00:10`)
- **Visual:** A natural, warm sequence of people from different racial, cultural, gender, and age backgrounds interacting—sharing tea across a wooden table, walking side-by-side, or exchanging genuine smiles in conversation.
- **Authenticity Rule:** Capture candid, lived-in human warmth rather than an artificial lineup of demographic representatives. Footage must not imply subjects are existing J2B members unless filmed at an actual J2B gathering with consent.
- **Camera Motion:** Smooth, eye-level handheld/gimbal movement that feels present without feeling shaky.
- **Transition Out:** Light-leak / golden-hour dissolve into Scene 4.

### Scene 4 — Hope and Becoming (`00:10 – 00:12`)
- **Visual:** Return to an uplifting walking-path moment bathed in warm natural light, with gentle forward movement toward an open sunlit horizon.
- **Loop Engineering:** Match camera speed, focal length, and horizon line to Scene 1 (`00:00`) using a 0.5s–0.8s cross-dissolve / frame blend so the loop back to `00:00` feels continuous and effortless.

---

## 4. Required Deliverables & Encoding Specification

Place the final client-approved / licensed files in `public/videos/`:

| Rendition | Path | Resolution | Codec / Profile | Target Size | Audio |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Desktop WebM | `public/videos/j2b-hero-desktop.webm` | 1920×1080 (or 1600×900) | VP9 (`libvpx-vp9`), 24fps | ≤ 2.2 MB | None (`-an`) |
| Desktop MP4 | `public/videos/j2b-hero-desktop.mp4` | 1920×1080 (or 1600×900) | H.264 High@L4.0 (`yuv420p`, `+faststart`) | ≤ 2.8 MB | None (`-an`) |
| Mobile WebM | `public/videos/j2b-hero-mobile.webm` | 720×900 (4:5) or 720×1280 | VP9 (`libvpx-vp9`), 24fps | ≤ 1.0 MB | None (`-an`) |
| Mobile MP4 | `public/videos/j2b-hero-mobile.mp4` | 720×900 (4:5) or 720×1280 | H.264 Main@L3.1 (`yuv420p`, `+faststart`) | ≤ 1.3 MB | None (`-an`) |
| Fallback Poster | `public/images/journey-path-hero.jpg` | Existing approved asset | JPEG | 931 KB | N/A |

### Reference `ffmpeg` Encoding Commands
```bash
# Desktop MP4 (H.264, faststart, silent)
ffmpeg -i master_desktop_1080p.mov -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -crf 24 -preset slow -r 24 -movflags +faststart -an public/videos/j2b-hero-desktop.mp4

# Desktop WebM (VP9 2-pass, silent)
ffmpeg -i master_desktop_1080p.mov -c:v libvpx-vp9 -b:v 0 -crf 32 -r 24 -an -pass 1 -f null /dev/null && \
ffmpeg -i master_desktop_1080p.mov -c:v libvpx-vp9 -b:v 0 -crf 32 -r 24 -an -pass 2 public/videos/j2b-hero-desktop.webm

# Mobile MP4 (720x900 crop, H.264, faststart, silent)
ffmpeg -i master_mobile_720x900.mov -c:v libx264 -profile:v main -level 3.1 -pix_fmt yuv420p -crf 25 -preset slow -r 24 -movflags +faststart -an public/videos/j2b-hero-mobile.mp4

# Mobile WebM (720x900 crop, VP9, silent)
ffmpeg -i master_mobile_720x900.mov -c:v libvpx-vp9 -b:v 0 -crf 33 -r 24 -an public/videos/j2b-hero-mobile.webm
```

