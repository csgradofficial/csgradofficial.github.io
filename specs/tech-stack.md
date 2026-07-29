# Tech Stack

## Languages & Markup
- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — custom stylesheet (`css/style.css`), no preprocessor
- **Vanilla JavaScript** (`js/main.js`) — injects shared nav and footer into every page via `innerHTML`; handles mobile nav toggle and active link highlighting

## Hosting & Deployment
- **GitHub Pages** — static hosting via `csgradofficial` organization
- Repository: `csgradofficial/csgradofficial.github.io`
- Live at: `csgradofficial.github.io` (deployed from `main` branch root)

## Design System
- **Color palette** — UT San Antonio brand colors:
  - Primary orange: `#F15A22`
  - Primary navy: `#002147`
  - White: `#FFFFFF`
  - Light gray: `#F5F5F5`
- **Typography** — Open Sans (Google Fonts), 400/600/700 weights
- **Nav layout** — CSS grid (`1fr auto 1fr`): CSGRAD logo left, nav links centered, UT San Antonio logo right; fixed top bar (125px height); white-padded logo frames on navy background
- **Footer** — dark navy "related links" bar (CS Department, UT San Antonio, GitHub) above a navy copyright bar

## Modularity
- Nav and footer HTML defined once in `js/main.js` as template literals (`NAV_HTML`, `FOOTER_HTML`) and injected into `#nav-placeholder` / `#footer-placeholder` divs on every page
- To update nav/footer content or links: edit `js/main.js` only
- To update global styles: edit `css/style.css` only

## Content Structure
- **Home** (`index.html`) — hero + contact cards
- **About** (`about.html`) — Who We Are, What We Do (3 cards), Get Involved CTA
- **Officers** (`officers.html`) — Executive Board cards, Board Members, Alumni by year
- **FAQ** (`faq.html`) — pending content
- **Resources** (`resources.html`) — 4 dropdown accordion sections (pending content)

## Assets
- `logos/csgradlogo.jpeg` — CSGRAD logo (also used as favicon)
- `logos/UT-sananotonio-logo.webp` — UT San Antonio logo
- `photos/` — officer headshots (nadia.jpg, Mohammad_Ahmad.png, rojan.jpeg, nasim.png, sakib.jpeg)
- All images served as static files

## External References
- Source packet for Resources: `Welcome to San Antonio (Table of Contents).docx` — 10 linked Google Docs, all publicly downloadable via `docs.google.com/document/d/{id}/export?format=txt`
- Membership sign-up: Google Form URL TBD (placeholders in `index.html` "Join Us!" button and `resources.html`)

## No Build Step
No bundler, transpiler, or SSG. Files are served exactly as written — compatible with GitHub Pages' static file serving. Preview locally with `python3 -m http.server 8000` from the project root.
