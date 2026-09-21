# Validation: Events Calendar

The project has no automated test suite — validation is manual, in the browser, against the live GitHub Pages deploy (and locally with `python3 -m http.server 8000`).

## Automated Checks
- `git status` clean after commit — no stray files
- HTML validates as well-formed markup (spot check: the new iframe tag closes correctly; no unclosed `<section>`)
- No new console errors in Chrome DevTools when the home page loads (Google Calendar's iframe may log its own cookies notices — those are acceptable and not our code)

## Output Artifacts
- `index.html` gains one new `<section class="section events-section">` below Contact with heading, iframe, and subscribe button
- `css/style.css` gains an `.events-section` block (aspect-ratio wrapper, iframe fill, subscribe button spacing)
- `specs/roadmap.md` gains a new completed phase for this feature
- `specs/tech-stack.md` documents Google Calendar as an external service and lists the calendar ID / embed URL location so future officers can find it
- No changes to `js/main.js`, `about.html`, `officers.html`, or `resources.html`

## Manual Checks
1. **Calendar loads and shows a test event** — create a placeholder event in the org's Google Calendar; within ~5 minutes it appears in the embed on both `localhost:8000` and `https://csgradofficial.github.io`
2. **View switcher works** — toggling Month → Week → Agenda inside the iframe does not reload the page and shows the correct data
3. **Timezone locked** — an event set for 5:00 PM San Antonio shows as 5:00 PM in the embed regardless of the viewer's local timezone (verified by changing system timezone or using DevTools sensors)
4. **Subscribe button works** — clicking "Add to your calendar" opens the ICS URL / add-calendar flow in the visitor's default calendar app
5. **Mobile at 400px width** — iframe reflows, no horizontal page overflow, subscribe button remains tappable (Chrome DevTools device toolbar, iPhone SE preset)
6. **Nav unchanged across pages** — About, Officers, Resources and FAQ still show the same 3-item nav; no accidental regression from any JS or shared-CSS edit
7. **No auth prompts** — visitors are never asked to sign into Google when viewing the embed (confirms the calendar is public, not private)

## Merge Criteria
- All manual checks above pass on both `localhost:8000` and the branch previewed via a GitHub Pages preview build (or the merged main deploy)
- `specs/roadmap.md` and `specs/tech-stack.md` updates included in the PR
- PR from `feature/events-calendar` → `main` reviewed and squash-merged
- After merge, spot-check the live site at `https://csgradofficial.github.io` — calendar loads, event appears, subscribe works
