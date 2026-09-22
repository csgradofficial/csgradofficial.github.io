# Tech Stack

## Languages & Markup
- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — custom stylesheet (`css/style.css`), no preprocessor
- **Vanilla JavaScript** (`js/main.js`) — injects shared nav and footer into every page via `innerHTML`; handles mobile nav toggle and active link highlighting

## Hosting & Deployment
- **GitHub Pages** — static hosting via `csgradofficial` organization
- Repository: `csgradofficial/csgradofficial.github.io`
- Live at: `csgradofficial.github.io` (deployed from `main` branch root)
- Preview locally with `python3 -m http.server 8000` from the project root

## Design System
- **Color palette** — UT San Antonio brand colors:
  - Primary orange: `#F15A22`
  - Primary navy: `#002147`
  - White: `#FFFFFF`
  - Light gray: `#F5F5F5`
- **Typography** — Open Sans (Google Fonts), 400/600/700 weights
- **Nav layout** — CSS grid (`1fr auto 1fr`): CSGRAD logo left, nav links centered, UT San Antonio logo right; fixed top bar (145px height). Logos sit inside scalloped/gear-style white badge frames (130px diameter, 40 teeth) on the navy bar; both logo images sized at 114px with `object-fit: cover` for matching white-ring girth
- **Mobile nav** — hamburger toggle below 720px; dropdown shows inset orange pill highlights on hover/active (compact padding + horizontal margin) instead of full-width bars
- **Footer** — dark navy "related links" bar (CS Department at UT San Antonio, UT San Antonio, GitHub) above a navy copyright bar
- **Accordion** — native HTML `<details>`/`<summary>` with custom + / − indicators (used on the Resources and FAQ page)
- **Map preview cards** — grid of clickable thumbnails with download link and source attribution, used for campus maps and VIA maps
- **Favicon** — CSGRAD logo set on every page via `<link rel="icon">`

## Modularity
- Nav and footer HTML defined once in `js/main.js` as template literals (`NAV_HTML`, `FOOTER_HTML`) and injected into `#nav-placeholder` / `#footer-placeholder` divs on every page
- To update nav/footer content or links: edit `js/main.js` only
- To update global styles: edit `css/style.css` only

## Content Structure
- **Home** (`index.html`) — hero with 3 CTAs (Learn About Us, Meet Officers, Join Us → Microsoft Forms), Upcoming Events section (embedded Google Calendar iframe with view switcher + "Add to your calendar" button), contact cards (Email, Discord, Instagram)
- **About** (`about.html`) — Who We Are, What We Do (3 cards), Get Involved CTA linked to Microsoft Forms
- **Officers** (`officers.html`) — Executive Board cards (President, VP, Treasurer, PR Secretary, Web Secretary), Board Members, Alumni Officers by year in reverse chronological order (2025 → 2024 → 2023)
- **Resources and FAQ** (`resources.html`) — collapsible `<details>` sections: Important Documents, UT San Antonio Campus Maps, VIA Transportation Maps, Housing, Transportation, Groceries and Dining, Banking and Finance, Health and Well-Being, Discounts, Travel Funding

## Assets
- `logos/csgradlogo.jpeg` — CSGRAD logo (also used as favicon)
- `logos/UT-sananotonio-logo.webp` — UT San Antonio logo
- `photos/` — officer headshots (nadia.jpg, Mohammad_Ahmad.png, rojan.jpeg, nasim.png, rambod.png, sakib.jpeg); VIA maps (VIA26_Link-mainland.webp, VIA26_Link-downtown.webp); campus map preview JPGs generated from the PDFs
- `docs/` — downloadable PDFs (PhD-Handbook-v2025-Fall.pdf, maincampusmap.pdf, downtowncampusmap.pdf)
- All images and PDFs served as static files

## External References
- Membership sign-up: Microsoft Forms — `https://forms.cloud.microsoft/r/kxCNFFy83H` (linked from both "Join Us!" buttons)
- Campus maps source: `https://map.utsa.edu`
- VIA transportation maps source: `https://www.viainfo.net/link`
- Discord community: `https://discord.gg/RdWePc4hA3`
- Instagram: `https://www.instagram.com/csgrad.official/`
- Contact email: `csgrad.official@gmail.com`
- **Google Calendar** (events feed) — public calendar on `csgrad.official@gmail.com`
  - Embed URL: `https://calendar.google.com/calendar/embed?src=csgrad.official%40gmail.com&ctz=America%2FChicago&mode=MONTH&...` (see the iframe in `index.html`'s Upcoming Events section)
  - Public sharing URL (used by "Add to your calendar" button): `https://calendar.google.com/calendar/u/0?cid=Y3NncmFkLm9mZmljaWFsQGdtYWlsLmNvbQ`
  - ICS feed: `https://calendar.google.com/calendar/ical/csgrad.official%40gmail.com/public/basic.ics`
  - Ownership: managed via the shared `csgrad.official@gmail.com` Google account so it survives officer turnover

## No Build Step
No bundler, transpiler, or SSG. Files are served exactly as written — compatible with GitHub Pages' static file serving.
