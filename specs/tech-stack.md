# Tech Stack

## Languages & Markup
- **HTML5** — semantic markup, one `.html` file per page
- **CSS3** — custom stylesheet(s), no CSS preprocessor
- **Vanilla JavaScript** — minimal, only for interactive elements (e.g., mobile nav toggle)

## Hosting & Deployment
- **GitHub Pages** — static hosting via `csgradofficial-sys` organization account
- Repository: `csgradofficial-sys/csgrad-website` (or similar)
- Deployed from the `main` branch, root or `docs/` folder

## Design System
- **Color palette** — UTSA official brand colors:
  - Primary orange: `#F15A22`
  - Primary navy: `#002147`
  - White: `#FFFFFF`
  - Light gray (backgrounds/borders): `#F5F5F5`
- **Typography** — clean sans-serif matching bouldercsgrads.org style:
  - Body: system-ui / sans-serif stack (or Google Font once identified from template)
  - Headings: same family, bold weight
- **Layout** — fixed top navigation bar, full-width hero on home page, content sections with max-width container

## Assets
- `logos/csgradlogo.jpeg` — CSGRAD association logo
- `logos/UT-sananotonio-logo.webp` — UTSA official logo
- All images served as static files from the repo

## No Build Step
No bundler, transpiler, or SSG. Files are served exactly as written — compatible with GitHub Pages' static file serving.
