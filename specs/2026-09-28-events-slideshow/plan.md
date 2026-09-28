# Plan: Events Slideshow

## 1. Photo processing
- [x] Verify `sips` available on macOS (`/usr/bin/sips`)
- [x] Create output directory `photos/events/game-mingling-2026-09-24/`
- [x] Convert HEIC → JPG and resize all 7 photos with `sips -Z 1600 -s formatOptions 80`; two large Pixel shots re-resized to 1400px @ q72 to fit budget
- [x] All 7 processed files are under 500 KB (largest 489 KB); total 2.7 MB
- [x] Raw source folder `photos/GAME+MINGLING(Sep 24, 2026)/` added to `.gitignore` so originals stay out of the deployed repo

## 2. Home page markup
- [x] Add a new `<section class="section events-gallery">` on `index.html`, between the Upcoming Events section and the Contact section
- [x] Section header: `<h2>Recent Events</h2>` + intro paragraph
- [x] Slideshow HTML: `.slideshow-stage` with 7 `<img class="slide">` elements, prev/next arrow buttons, and a `.slideshow-caption` overlay
- [x] Empty `.slideshow-dots` and `.slideshow-thumbs` containers populated at runtime by `slideshow.js`
- [x] Alt text on every image; event-level caption ("Game + Mingling · Sep 24, 2026") shown on the stage
- [x] `<script src="js/slideshow.js">` added to `index.html`

## 3. Slideshow behavior (JS)
- [x] Create `js/slideshow.js` — vanilla JS, self-contained IIFE, supports multiple `.slideshow` roots per page
- [x] Auto-advance every ~5000 ms (configurable via `data-autoplay` attribute); pause on hover; pause on `visibilitychange` when the tab is hidden
- [x] Left/right arrow buttons, dots, thumbnails all jump to a specific slide
- [x] Keyboard: ← / → arrows navigate when the `.slideshow-stage` has focus (uses `tabindex="0"` + `keydown` handler)
- [x] Respect `prefers-reduced-motion` — disable auto-advance; CSS also drops transitions
- [x] Lazy-load photos beyond the first (native `loading="lazy"` + `decoding="async"`)

## 4. Styling
- [x] Add `.events-gallery`, `.slideshow`, `.slideshow-stage`, `.slide`, `.slideshow-arrow(-prev/-next)`, `.slideshow-caption`, `.slideshow-dots`, `.slideshow-dot`, `.slideshow-thumbs`, `.slideshow-thumb` rules to `css/style.css`
- [x] Stage: 16:10 aspect-ratio desktop, 4:3 mobile; `object-fit: cover`; rounded corners with subtle border
- [x] Arrows: circular translucent navy buttons, orange on hover
- [x] Dots: gray, active dot orange with slight scale
- [x] Thumbnails: horizontal strip with orange active border and hover lift; hidden on mobile
- [x] Crossfade transition on stage swap (opacity, 0.4s)
- [x] Mobile breakpoint hides thumbnails, shrinks arrows, tightens edges
- [x] `prefers-reduced-motion` block drops all transitions

## 5. QA + Docs
- [x] Local preview server running on `http://localhost:8001`
- [x] Update `specs/roadmap.md` (new Phase 10 entry) and `specs/tech-stack.md` (home page structure + `photos/events/<slug>/` convention)
- [ ] Manual browser QA: verify auto-advance, hover pause, keyboard arrows, dot/thumbnail clicks, mobile at 400px, `prefers-reduced-motion` disables auto-advance
- [ ] Commit all changes and merge `feature/events-slideshow` → `main`
