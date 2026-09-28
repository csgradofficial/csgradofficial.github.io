# Validation: Events Slideshow

Validation is manual, in the browser, on the local dev server (`python3 -m http.server 8001`) and on the live GitHub Pages deploy. The site has no automated test suite.

## Automated Checks
- `git status` clean after commit — no stray files, no oversized binaries
- `ls -la photos/events/game-mingling-2026-09-24/` — every processed image is under 500 KB
- Total slideshow payload (sum of file sizes for all photos in the folder) under 3 MB
- No new console errors when the home page loads (Chrome DevTools)
- `.gitignore` blocks the raw `photos/GAME+MINGLING(Sep 24, 2026)/` source folder from being committed

## Output Artifacts
- `index.html` gains one new `<section class="section events-gallery">` between the Upcoming Events section and the Contact section
- `js/slideshow.js` — new file, vanilla JS carousel driver
- `css/style.css` — new `.events-gallery`, `.slideshow`, `.slideshow-stage`, `.slideshow-arrows`, `.slideshow-dots`, `.slideshow-thumbs` rules plus a `prefers-reduced-motion` block
- `photos/events/game-mingling-2026-09-24/*.jpg` — 7 processed images (2 originally HEIC, 5 originally JPG), all under 500 KB
- `specs/roadmap.md` gains a new completed phase for this feature
- `specs/tech-stack.md` updated to reflect the new `photos/events/` convention and slideshow content on the home page
- No changes to `about.html`, `officers.html`, `resources.html`, `js/main.js`, `js/matrix.js`, `js/officers.js`, or `js/reveal.js`

## Manual Checks
1. **Slideshow renders and advances** — visiting the home page shows the first Game + Mingling photo; after ~5s the next photo fades in; dots update to reflect the active slide
2. **Manual navigation works** — clicking left/right arrows moves one slide; clicking a dot jumps to that slide; clicking a thumbnail jumps to that slide
3. **Keyboard navigation** — focus the slideshow (Tab), press ←/→, active slide changes
4. **Hover pause** — mousing over the stage stops auto-advance; leaving resumes it
5. **Tab-hidden pause** — switching to another tab pauses auto-advance; returning resumes it
6. **Photos under 500 KB each** — verify via `ls -la` on the processed folder
7. **Mobile at 400px width** — Chrome DevTools iPhone SE preset: iframe reflows, no horizontal page overflow, arrows and dots remain tappable, thumbnails hide
8. **Alt text present** — inspect each `<img>`, alt attribute is non-empty and descriptive (e.g. "CSGRAD Game + Mingling event, Sep 24 2026")
9. **Reduced motion** — enable "Reduce motion" in System Settings (or DevTools rendering emulation): auto-advance is disabled, crossfade becomes instant swap
10. **Placement correct** — order on `index.html` is: Hero → Upcoming Events → Recent Events → Contact → Footer

## Merge Criteria
- All manual checks above pass on both `localhost:8001` and, once merged, the live site at `https://csgradofficial.github.io`
- `specs/roadmap.md` and `specs/tech-stack.md` updated in the same PR
- PR from `feature/events-slideshow` → `main` reviewed and merged with a merge commit (`--no-ff`)
- After merge, spot-check the live home page — slideshow loads within 3 seconds on a normal connection, no broken images, no console errors
