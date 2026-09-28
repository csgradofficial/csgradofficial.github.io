# Plan: Events Slideshow

## 1. Photo processing
- [ ] Verify `sips` and `cwebp` availability on macOS (built-in `sips` should handle HEIC → JPG and resizing)
- [ ] Create output directory `photos/events/game-mingling-2026-09-24/`
- [ ] Convert the 2 `.HEIC` files to `.jpg` and resize all 7 photos to max 1600px on the long edge, quality ~80
- [ ] Confirm each processed file is under 500 KB and total set is under 3 MB
- [ ] Keep the original source folder (`photos/GAME+MINGLING(Sep 24, 2026)/`) out of the deployed repo — either move originals outside the repo or gitignore that specific path

## 2. Home page markup
- [ ] Add a new `<section class="section events-gallery">` on `index.html`, between the Upcoming Events section and the Contact section
- [ ] Section header: `<h2>Recent Events</h2>` with a subtitle line ("Highlights from CSGRAD gatherings")
- [ ] Slideshow HTML: main stage (one `<img>` visible at a time), left/right arrow buttons, dot indicator row, thumbnail strip
- [ ] Data source: an inline JSON `<script type="application/json">` block or a `data-*`-attributed list of image paths + alt text, keyed by event, so future events can be added by editing one array
- [ ] Include a caption line under each photo ("Game + Mingling · Sep 24, 2026")

## 3. Slideshow behavior (JS)
- [ ] Create `js/slideshow.js` — pure vanilla, no library
- [ ] Auto-advance every ~5000 ms; pause on hover of the stage; pause when tab is hidden (`visibilitychange`)
- [ ] Left/right arrow click, dot click, thumbnail click all jump to a specific index
- [ ] Keyboard: ← / → arrows navigate when the slideshow has focus (roving `tabindex` on the stage)
- [ ] Respect `prefers-reduced-motion: reduce` — disable auto-advance and use instant swap instead of fade
- [ ] Lazy-load photos beyond the first two (native `loading="lazy"` + `decoding="async"`)

## 4. Styling
- [ ] Add `.events-gallery`, `.slideshow`, `.slideshow-stage`, `.slideshow-arrows`, `.slideshow-dots`, `.slideshow-thumbs` rules to `css/style.css`
- [ ] Stage: aspect-ratio 16:10 desktop / 4:3 mobile, `object-fit: cover`, rounded corners, subtle border matching site style
- [ ] Arrows: circular navy buttons with white chevrons; visible always on desktop, larger tap targets on mobile
- [ ] Dots: small navy dots, active dot orange; sit below the stage
- [ ] Thumbs: horizontal strip of small square thumbnails; active thumbnail has an orange border
- [ ] Crossfade transition on stage swap (opacity 0 → 1, ~400 ms)
- [ ] Mobile breakpoint (`@media max-width: 720px`): hide thumbnails, keep arrows + dots

## 5. QA + Docs
- [ ] Preview locally with `python3 -m http.server 8001`; verify auto-advance, hover pause, all navigation paths, keyboard arrows
- [ ] Mobile check at 400px width — no horizontal overflow, arrows tappable
- [ ] Lighthouse or DevTools Network: confirm home page total transfer under ~4 MB with slideshow loaded, LCP still reasonable
- [ ] Verify `prefers-reduced-motion` disables auto-advance and fade
- [ ] Update `specs/roadmap.md` (new phase entry) and `specs/tech-stack.md` (Home page content structure + photo path convention)
- [ ] Commit and merge `feature/events-slideshow` → `main`
