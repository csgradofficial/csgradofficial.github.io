# Plan: Events Calendar

## 1. Google Calendar setup (external, user-owned)
- [x] Sign in to `csgrad.official@gmail.com` and use the existing **csgrad utsa** calendar (no new calendar needed — reuses the account's primary calendar)
- [x] Set the calendar to **Public — Make available to public**, "See all event details"
- [x] Set the calendar timezone to **America/Chicago** (already the account default)
- [x] From Calendar settings → "Integrate calendar", copy: the public **Calendar ID** (`csgrad.official@gmail.com`), the **Public URL** (`https://calendar.google.com/calendar/u/0?cid=Y3NncmFkLm9mZmljaWFsQGdtYWlsLmNvbQ`), the **Embed code** iframe, and the **Public address in iCal format** (`https://calendar.google.com/calendar/ical/csgrad.official%40gmail.com/public/basic.ics`)

## 2. Home page embed
- [x] Add a new `<section class="section events-section">` on `index.html`, directly above the Contact section (order: Hero → Upcoming Events → Contact → Footer)
- [x] Insert an `<h2>Upcoming Events</h2>` and an `<iframe>` from the copied embed code
- [x] Configure the iframe URL to show the **Month grid** by default (`mode=MONTH`), enable the built-in view switcher (`showTitle=0&showTabs=1&showCalendars=0`), and force `ctz=America/Chicago`
- [x] Add responsive wrapper so the iframe scales to 100% width and keeps a 16:10 aspect ratio on desktop; falls back to a taller aspect on narrow viewports
- [x] Add an "Add to your calendar" button below the iframe linking to the public sharing URL (opens Google's "Add other calendar" flow for signed-in users)

## 3. Styling
- [x] Add rules to `css/style.css`: `.events-section` container, iframe aspect-ratio wrapper, subscribe button styled to match the `.btn` family (orange primary)
- [x] Ensure the section respects the existing `.section` padding pattern and mobile breakpoint (`@media max-width: 720px`)

## 4. QA + Docs
- [x] Preview locally: `python3 -m http.server 8000`, confirm the calendar loads, view switcher works, subscribe button opens the Google "Add other calendar" flow
- [x] Mobile check at 400px viewport (Chrome devtools) — no horizontal overflow, iframe reflows, button remains tappable
- [x] Cross-check that nav on all pages remains unchanged (no accidental regression from JS edits)
- [x] Update `specs/roadmap.md` (Phase 9 entry added) and `specs/tech-stack.md` (Google Calendar external ref + Home page structure updated)
- [x] Commit and push branch, then merge `feature/events-calendar` → `main` (merged 2026-09-22 via a no-ff merge commit)
