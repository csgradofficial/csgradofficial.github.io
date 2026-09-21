# Requirements: Events Calendar

## Overview
Add a live, embedded Google Calendar to the CSGRAD UT San Antonio site so members can see upcoming events at a glance and subscribe to the calendar in their own app. Modeled loosely on Boulder CS Grads' events feature, but improved: Boulder only exposes an ICS subscribe link; we will show a full month grid on-page **and** provide the subscribe flow.

## In Scope
- New "Upcoming Events" section on `index.html`, directly above the Contact section (page order: Hero → Upcoming Events → Contact)
- A Google Calendar iframe embed (mode=MONTH by default, view switcher enabled)
- Timezone locked to America/Chicago
- "Add to your calendar" button below the iframe linking to the public ICS URL
- Responsive styling so the iframe scales cleanly on desktop and mobile
- No nav changes (calendar lives on the home page)

## Out of Scope
- Building a custom calendar UI (no FullCalendar.io, no ICS parsing in JS)
- Event submission form or member-driven event creation
- Email/RSS notifications about new events
- Editing officer permissions on the Google Calendar (managed by officers outside the codebase)
- Any paid Google Workspace features

## Key Decisions
- **Provider:** Google Calendar (free) — chosen because the org's official account is `csgrad.official@gmail.com`, so no new account is needed. Boulder uses Outlook because their org uses a `colorado.edu` M365 account; we don't have that.
- **Embed mechanism:** the standard `<iframe src="https://calendar.google.com/calendar/embed?…">` tag copied from Google Calendar → Settings → Integrate calendar. No JavaScript library, no build step — fits the project's "no build" tech stack.
- **Placement:** home page section, directly above Contact (Hero → Upcoming Events → Contact). Chosen over a dedicated Events page or a Resources accordion so events are the first substantive content a visitor sees after the hero, without adding a new URL to maintain.
- **Timezone:** America/Chicago (`ctz=America/Chicago`) is forced so events show in San Antonio time regardless of the visitor's location.
- **View:** month grid is the default; the built-in Google view switcher is enabled so visitors can flip to Week/Agenda/List without leaving the page.
- **Subscribe UX:** a single button labeled "Add to your calendar" that links to the public ICS URL. Users' calendar apps handle the subscribe flow.

## Dependencies
- **External:** a Google account (`csgrad.official@gmail.com`) with a public calendar named "CSGRAD Events". Requires a human officer to create it and paste the embed URL + ICS URL into `index.html`.
- **Internal:** no new libraries. Reuses existing `.section`, `.container`, and `.btn` primitives from `css/style.css`. No changes to `js/main.js` (nav/footer unaffected).
- **Hosting:** GitHub Pages continues to serve everything statically. The iframe fetches from Google in the browser.

## Open Questions
- **Should past events stay visible?** Google Calendar's month grid shows past days by default; if that's undesirable we can switch the default view to Agenda (upcoming only). To decide during QA.
- **Calendar ID handoff:** who owns the Google Calendar long-term — the current Web Secretary or the shared org account? Recommend the shared account so it survives officer turnover; documented in tech-stack.md when merged.
- **Multiple calendars?** If we later want separate calendars (e.g. Social, Academic), the same iframe can accept multiple `src=<calId>` params. Out of scope for this phase.
