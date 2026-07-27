# Tech Stack

## Languages & Markup
- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — custom stylesheet (`css/style.css`), no preprocessor
- **Vanilla JavaScript** (`js/main.js`) — injects shared nav and footer into every page via `innerHTML`; handles mobile nav toggle and active link highlighting

## Hosting & Deployment
- **GitHub Pages** — static hosting via `csgradofficial` organization
- Repository: `csgradofficial/csgradofficial.github.io`
- Deployed from the `main` branch root; live at `csgradofficial.github.io`

## Design System
- **Color palette** — UTSA official brand colors:
  - Primary orange: `#F15A22`
  - Primary navy: `#002147`
  - White: `#FFFFFF`
  - Light gray: `#F5F5F5`
- **Typography** — Open Sans (Google Fonts), 400/600/700 weights
- **Nav layout** — CSS grid (`1fr auto 1fr`): CSGRAD logo left, nav links centered, UTSA logo right; fixed top bar, height `125px`
- **Footer** — navy bar with centered copyright text

## Modularity
- Nav and footer HTML defined once in `js/main.js` as template literals (`NAV_HTML`, `FOOTER_HTML`) and injected into `#nav-placeholder` / `#footer-placeholder` divs on every page
- To update nav/footer: edit `js/main.js` only
- To update styles/sizes: edit `css/style.css` only

## Assets
- `logos/csgradlogo.jpeg` — CSGRAD logo (75px height in nav)
- `logos/UT-sananotonio-logo.webp` — UTSA logo (110px height in nav, white background visible — displayed on white-padded frame in navy bar)
- All images served as static files from the repo

## No Build Step
No bundler, transpiler, or SSG. Files are served exactly as written — compatible with GitHub Pages' static file serving.
