# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a Vite + React rebuild of the Nolytech Limited website, a Kenyan B2B technology solutions company based in Mombasa. Nolytech focuses on custom software, ERP-style platforms, SAP S/4HANA-related support where applicable, AI automation, chatbots, WhatsApp integrations, mobile applications, web platforms, client portals, cloud, data, servers, networking, infrastructure support, and technology consulting.

The live PHP site lives at `/home/dev/web_files/nolytech` — treat it as read-only reference only. All active development happens here at `/home/dev/web_files/nolytech-react`.

## Brand Positioning

Nolytech Limited helps organisations move from manual, scattered, and disconnected operations to reliable digital systems.

The website should present Nolytech as a serious, premium, enterprise-ready technology partner — not a generic ICT vendor, not a playful startup template, and not a basic website agency.

Nolytech serves businesses, SACCOs, institutions, churches, and growing organisations that need practical digital systems, automation, infrastructure, and long-term technology support.

Avoid positioning Nolytech only as an “ICT company”. Use stronger language such as:

* B2B technology solutions company
* Business technology partner
* Digital systems provider
* Enterprise systems and automation partner
* Software, automation, infrastructure, and consulting company

## Commands

```bash
npm run dev          # Start Vite dev server, usually http://localhost:5173 unless the port is busy
npm run build        # Production build → dist/
npm run lint         # ESLint check
npm run preview -- --host 0.0.0.0   # Preview the production build
```

No test suite exists yet.

## Architecture

**Routing** — React Router 7, all routes nested under a single `Layout` component (`src/components/layout/Layout.jsx`). Scroll-to-top on navigation is handled there via `useEffect` on `pathname`. Routes are defined in `src/routes/AppRoutes.jsx`.

**Data layer** — Static JS data in `src/data/` (services, solutions, team). These are `.jsx` files imported directly by pages. There is no API or backend.

**Styling** — Tailwind CSS 4 via `@tailwindcss/vite` plugin. Brand design tokens are declared in `src/index.css` under `@theme {}` and are available as Tailwind utilities (`text-primary`, `bg-accent`, etc.). Many section-specific animations and complex layouts are written as named CSS classes in `src/index.css` (e.g., `.home-hero-section`, `.service-lens-card`, `.solution-orbit-panel`) rather than as inline Tailwind — add new section styles there following this pattern.

**Icons** — Lucide React only.

**Forms** — No backend. The Contact page and Delete Account page use `mailto:` links to open a pre-filled email. No fake success states.

## Brand Tokens

Defined in `src/index.css` `@theme {}`, usable as Tailwind utilities:

| Token             | Value     | Usage                                |
| ----------------- | --------- | ------------------------------------ |
| `primary`         | `#6D4CF6` | Buttons, links, active states        |
| `primary-dark`    | `#4C18C9` | Gradient depth                       |
| `accent`          | `#25D6A2` | Icon accents, hover highlights       |
| `accent-dark`     | `#0F8F66` | Teal text/icons on light backgrounds |
| `secondary`       | `#17131F` | Headings, dark backgrounds           |
| `secondary-light` | `#666666` | Body text, muted labels              |
| `bg-light`        | `#F7F8FB` | Alternate section backgrounds        |

Heading font: **Manrope** via Google Fonts. Body font: **Jost**.

## Design Direction

The visual style should feel:

* Premium and professional
* Enterprise-grade but still modern
* Clean, confident, and polished
* Suitable for B2B clients, SACCOs, institutions, businesses, churches, and growing organisations
* Technology-focused without feeling childish, overly flashy, or template-like

Use the existing brand palette intentionally:

* Deep navy and dark violet for premium dark sections
* Purple and violet for brand depth
* Teal and green for accents, active states, icons, and technology highlights
* Light backgrounds only where they improve readability and contrast

Avoid designs that feel:

* Generic SaaS template
* Overcrowded with too many cards
* Too playful or cartoon-like
* Too much like crypto, gaming, or cyberpunk
* Too dependent on fake statistics, fake testimonials, or fake client logos
* Overloaded with glow effects without clear hierarchy
* Visually impressive but hard to maintain

## UI Redesign Rules

When redesigning a section:

1. Audit first before editing.
2. Preserve the meaning of existing content unless asked to rewrite it.
3. Improve hierarchy, spacing, alignment, typography, responsiveness, and visual balance.
4. Prefer complete, finished-looking sections over decorative fragments.
5. Use subtle motion and transitions only when they support clarity.
6. Keep mobile layouts clean, readable, and simple.
7. Do not introduce new dependencies unless necessary.
8. Do not remove existing working functionality without explaining why.
9. Prefer reusable patterns and named classes in `src/index.css` where the project already uses section-specific CSS.
10. Keep React components readable and maintainable.
11. Avoid redesigning the whole site at once unless explicitly asked.
12. Work section by section and explain the reasoning before large visual changes.

## Motion and Interaction Rules

Animations should be subtle, premium, and purposeful.

Good uses of motion:

* Section reveal on scroll
* Soft hover states
* Active tab or selector transitions
* Gentle background movement
* Progress or carousel indicators
* Small icon, orb, or visual movement when it supports the concept

Avoid:

* Excessive bouncing
* Fast or distracting animations
* Too many moving elements at once
* Animations that hurt mobile performance
* Motion that ignores `prefers-reduced-motion`
* Heavy animation libraries unless clearly needed

Always respect accessibility and reduced-motion preferences.

## Content Style

Use British spelling such as “organisations”.

Tone should be:

* Professional
* Clear
* Confident
* Business-focused
* Practical
* Not desperate
* Not overly casual
* Not filled with AI-sounding buzzwords

Avoid overusing the word “ICT”. Prefer terms like:

* Technology solutions
* Digital systems
* Business technology
* Enterprise systems
* Automation
* Infrastructure
* Digital platforms
* Technology consulting

Do not invent:

* Fake statistics
* Fake testimonials
* Fake client logos
* Fake awards
* Fake partner badges
* Placeholder team members
* Claims of official SAP partnership unless explicitly confirmed

## Utility CSS Classes

`src/index.css` defines reusable layout and typography classes used across pages:

* `.site-container` — responsive horizontal padding; use instead of repeating `px-*`
* `.site-section` — responsive vertical padding; use instead of repeating `py-*`
* `.display-hero`, `.display-section`, `.display-subsection` — fluid heading sizes
* `.body-lead` — fluid body lead text
* `.section-kicker` — small-caps uppercase label above section headings
* `.editorial-rule` — gradient horizontal rule

## Button Component

`src/components/common/Button.jsx` renders as `<Link>`, `<a>`, or `<button>` based on props:

```jsx
<Button to="/contact">Get a Quote</Button>         // renders Link
<Button href="mailto:...">Email Us</Button>        // renders <a>
<Button onClick={fn}>Submit</Button>               // renders <button>
```

Variants: `primary` (default), `outline` (white, for dark backgrounds), `outline-dark` (for light backgrounds), `secondary`.

Sizes: `sm`, `md` (default), `lg`.

## File Extension Convention

All files use `.jsx`, including data files in `src/data/`. Do not use `.js`.

## Content Rules

* No fake statistics, testimonials, client logos, or placeholder team members.
* No social media icons until real Nolytech accounts exist.
* `data/team.jsx` currently exports an empty array — add only confirmed real members.
* Contact details: email `info@nolytech.co.ke`, phone `+254 795 112 229`, location: Mogadishu Estate, behind Premier Hospital, Nyali Links Road, Mombasa, Kenya (short form: Mombasa, Kenya).
* Images are in `public/images/` and are served at `/images/...`.

## Development Rules

Before making large edits:

1. Inspect the relevant component and CSS.
2. Explain the issue briefly.
3. Suggest the intended change.
4. Edit only the files needed.
5. Run `npm run lint` or `npm run build` when appropriate.
6. Do not make unrelated changes.

For UI work, prefer this workflow:

1. Audit the section.
2. Identify what feels unfinished.
3. Propose the design improvement.
4. Implement the selected approach.
5. Check responsiveness.
6. Polish spacing, alignment, and interaction states.

## Deployment

`npm run build` outputs to `dist/`.

The web server must rewrite all routes to `index.html` for React Router to work:

```apache
# Apache .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
