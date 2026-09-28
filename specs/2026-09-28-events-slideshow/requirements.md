# Requirements: Events Slideshow

## Overview
Add a "Recent Events" slideshow to the home page (`index.html`) that surfaces photos from CSGRAD gatherings — starting with the **Game + Mingling** event on Sep 24, 2026. The slideshow lives between the Upcoming Events calendar and the Contact Us section, giving visitors a taste of the community's real-world activity right after seeing what's coming up next.

## In Scope
- New `<section class="section events-gallery">` on `index.html`, inserted **between** Upcoming Events and Contact
- Auto-advancing carousel: one photo at a time, ~5s per slide, left/right arrows, dot indicators, and a thumbnail strip below
- Manual navigation via arrows, dots, thumbnails, and keyboard arrow keys
- Pause on hover; pause when the browser tab is hidden
- Fade crossfade between slides
- Responsive: thumbnails hide on narrow viewports; arrows and dots always visible; no horizontal overflow at 400px width
- Full accessibility: alt text on every photo, keyboard nav, `prefers-reduced-motion` disables auto-advance and fade
- Photos processed locally: HEIC → JPG, all resized to max 1600px long edge at quality ~80, target under 500 KB each
- Photos stored under `photos/events/game-mingling-2026-09-24/`
- Original source folder (`photos/GAME+MINGLING(Sep 24, 2026)/`) excluded from the deployed repo (moved out or `.gitignore`d)

## Out of Scope
- Full-screen lightbox / zoom on click (may add later; not needed for MVP)
- Server-side image processing or a build pipeline (matches the site's "no build step" tech stack)
- Uploading photos through the site (photos are added by editing the repo)
- Video embeds or animated content
- Slideshow libraries (Swiper, Slick, Glide) — hand-written JS keeps the site dependency-free
- Multi-event tabs / filtering — a single scrolling reel for now; future events will just append to the same slideshow

## Key Decisions
- **Provider / library:** none — vanilla JS. Same philosophy as everything else on the site (matrix rain, reveal, officers scroll-in).
- **Style:** auto-advance carousel + thumbnails (rejected: simple crossfade, horizontal scroll strip, masonry lightbox). Rationale: gives passive visitors motion out-of-the-box, while active visitors get precise controls (thumbnails). Matches how event pages feel on organizational sites.
- **Photo processing:** convert + resize to 1600px max @ q80 using macOS `sips` locally. Rationale: HEIC won't render in browsers; 3–6 MB per photo would blow up the home page LCP. 1600px is sharp enough for retina at any realistic display size on this layout.
- **File location:** `photos/events/<event-slug>/` — matches the existing flat `photos/` layout but nests per event so future additions stay tidy.
- **Data model:** photos are declared inline in `index.html` (either JSON block or a repeatable `<li>` list). No JSON fetch. Keeps everything in one file for future officers to edit.
- **Placement:** between Upcoming Events and Contact — flows chronologically (what's next → what happened → how to reach us).

## Dependencies
- **Local tooling:** macOS `sips` (built in) to convert HEIC → JPG and resize. If a photo can't be processed with `sips`, fall back to another tool (`convert` from ImageMagick if installed).
- **Internal:** reuses `.section`, `.container`, and the existing color tokens (`--navy`, `--orange`, `--white`, `--gray-mid`). No changes to `js/main.js`, `js/matrix.js`, `js/officers.js`, or `js/reveal.js`.
- **Hosting:** GitHub Pages continues to serve the JPGs statically — no CDN, no image transforms in flight.

## Open Questions
- **Original photos:** should the raw HEIC/JPG originals live in the repo (under a gitignored path) so future officers can re-process, or should they live only in a shared cloud folder? Recommendation: keep out of the repo; store on the org's Google Drive so file size stays manageable.
- **Slide duration:** 5000 ms is a reasonable default. If the deck grows past ~15 photos we may want to bump it or offer a "play/pause" button. Out of scope for MVP.
- **Captions:** photos currently ship without individual captions — only an event-level caption ("Game + Mingling · Sep 24, 2026") shown for every photo in that event. Per-photo captions can be added later by making the alt text visible below the image.
