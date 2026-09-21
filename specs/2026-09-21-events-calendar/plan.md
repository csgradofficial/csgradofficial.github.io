# Plan: Events Calendar

## 1. Google Calendar setup (external, user-owned)
- [ ] Sign in to `csgrad.official@gmail.com` and create a calendar named "CSGRAD Events"
- [ ] Set the calendar to **Public — Make available to public**, "See all event details"
- [ ] Set the calendar timezone to **America/Chicago**
- [ ] From Calendar settings → "Integrate calendar", copy: the public **Calendar ID**, the **Public URL**, the **Embed code** iframe, and the **Public address in iCal format** (ICS)
- [ ] Add one placeholder event so the embed renders non-empty for QA

## 2. Home page embed
- [ ] Add a new `<section class="section events-section">` on `index.html`, directly below the Contact section and above the footer
- [ ] Insert an `<h2>Upcoming Events</h2>` and an `<iframe>` from the copied embed code
- [ ] Configure the iframe URL to show the **Month grid** by default (`mode=MONTH`), enable the built-in view switcher (`showTitle=0&showTabs=1&showCalendars=0`), and force `ctz=America/Chicago`
- [ ] Add responsive wrapper so the iframe scales to 100% width and keeps a 16:10 aspect ratio on desktop; falls back to a taller aspect on narrow viewports
- [ ] Add an "Add to your calendar" button below the iframe linking to the ICS URL (falls back to Google's "Add other calendar" flow for signed-in Google users)

## 3. Styling
- [ ] Add rules to `css/style.css`: `.events-section` container, iframe aspect-ratio wrapper, subscribe button styled to match the `.btn` family (orange primary)
- [ ] Ensure the section respects the existing `.section` padding pattern and mobile breakpoint (`@media max-width: 720px`)

## 4. QA + Docs
- [ ] Preview locally: `python3 -m http.server 8000`, confirm the calendar loads with the placeholder event, view switcher works, subscribe button opens the ICS
- [ ] Mobile check at 400px viewport (Chrome devtools) — no horizontal overflow, iframe reflows, button remains tappable
- [ ] Cross-check that nav on all pages remains unchanged (no accidental regression from JS edits)
- [ ] Update `specs/roadmap.md` (mark phase done, list the new external dependency) and `specs/tech-stack.md` (add Google Calendar as an external service, note the ICS URL location)
- [ ] Commit and push branch; open PR to `main`
