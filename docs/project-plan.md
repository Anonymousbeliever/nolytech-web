# Nolytech Website Rebuild — Full Project Plan

## Context

Nolytech Limited is a startup ICT solutions company based in Kilifi, Kenya. The current live website (`/home/dev/web_files/nolytech`) was built on a purchased "itodo" template using plain PHP, HTML, CSS, and JavaScript. While it provides a working foundation, it contains placeholder content (fake team members, duplicate blog posts, inflated stats, template testimonials), broken functionality (contact form posts to the theme vendor's server, newsletter does nothing, social links go to platform homepages), and several trust issues that make the company look template-based rather than professional.

The goal is to rebuild the website from scratch using Vite + React — not as a direct copy of the PHP template, but as a deliberate redesign that presents Nolytech as a professional, honest, and trustworthy Kenyan technology startup. The PHP site stays live and untouched throughout. The React project is built separately and only replaces the live site after it is approved.

---

## Workspace Layout

| Path | Purpose |
|---|---|
| `/home/dev/web_files/nolytech` | Live PHP website — reference only, never modified |
| `/home/dev/web_files/nolytech-react` | New React project — all active development happens here |

---

## Technology Stack (Decided)

| Tool | Version | Purpose |
|---|---|---|
| Vite | 8.x | Build tool and dev server |
| React | 19.x | UI framework |
| React Router | latest | Client-side routing |
| Tailwind CSS | 4.x via `@tailwindcss/vite` | Styling |
| Lucide React | latest | Icons |
| Framer Motion | optional | Subtle page/section animations (add in polish phase) |
| EmailJS | optional | Contact form without a backend |

---

## Brand Guidelines

| Token | Value | Use |
|---|---|---|
| Primary purple | `#6D4CF6` | Buttons, links, active nav, logo-aligned accents |
| Primary dark | `#4C18C9` | Darker purple surfaces and gradient depth |
| Accent teal | `#25D6A2` | Icon accents, hover states, secondary brand highlights |
| Accent dark | `#0F8F66` | Teal text/icons on light backgrounds |
| Secondary | `#17131F` | Headings, dark text, footer/background depth |
| Secondary light | `#666666` | Body text, muted labels |
| Background light | `#F7F8FB` | Alternate section backgrounds |
| White | `#ffffff` | Main background |
| Heading font | Manrope (400–800) | All headings via Google Fonts |
| Body font | Jost (300–700) | All body text via Google Fonts |

These tokens are defined in `src/index.css` under `@theme {}` and are available as Tailwind utilities.

---

## Content Rules

### Keep from the PHP site
- Company name, email (`info@nolytech.co.ke`), phone (`+254 795 112 229`), location (Kilifi, Kenya)
- 8–9 service definitions (descriptions need rewriting, not copying)
- Privacy Policy full text (13 sections, last updated June 5 2026)
- Terms of Service full text (14 sections, last updated June 5 2026)
- Delete Account form logic
- Image assets copied to `public/images/`

### Remove entirely
- Fake statistics (12K members, 1.5K projects, 14 awards, 50 team members)
- Placeholder team members (template names / "Managing Director" ×4)
- Duplicate blog posts (all dated 01 Jan 2023, same title)
- Placeholder testimonials (same two template names repeated)
- Client logos (unknown if real — remove until confirmed)
- Non-functional newsletter form
- Language switcher (decorative, no i18n)
- Generic YouTube video popup
- Social media icons (until real Nolytech accounts exist)
- Footer Instagram gallery (placeholder images)
- Contact form AJAX that posts to `theme7x.com`

---

## Folder Structure (Established in Phase 1)

```
nolytech-react/
├── public/
│   └── images/          ← All images copied from PHP site
├── src/
│   ├── assets/          ← React-imported assets (SVGs, etc.)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── ServiceCard.jsx
│   │       ├── SolutionCard.jsx
│   │       └── PageBanner.jsx
│   ├── data/
│   │   ├── services.jsx
│   │   ├── solutions.jsx
│   │   └── team.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Solutions.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── DeleteAccount.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docs/                ← Project documentation (this folder)
├── index.html
├── vite.config.js
└── package.json
```

All data files use `.jsx` extension for consistency across the project.

---

## Route Map

| URL | Page Component |
|---|---|
| `/` | `Home.jsx` |
| `/about` | `About.jsx` |
| `/services` | `Services.jsx` |
| `/solutions` | `Solutions.jsx` |
| `/team` | `Team.jsx` |
| `/contact` | `Contact.jsx` |
| `/privacy-policy` | `PrivacyPolicy.jsx` |
| `/terms-of-service` | `TermsOfService.jsx` |
| `/delete-account` | `DeleteAccount.jsx` |

All routes are wrapped in `Layout` (Navbar + Footer). Scroll-to-top on navigation is handled in `Layout.jsx` via `useEffect` on `pathname`.

---

## Phase Status Tracker

| Phase | Description | Status |
|---|---|---|
| 1 | Project setup | ✅ Done |
| 2 | Folder structure and architecture | ✅ Done |
| 3 | Routing setup | ✅ Done |
| 4 | Layout components (Navbar, Footer, Layout) | 🔄 In progress |
| 5 | Home page | ⬜ Pending |
| 6 | Services page | ✅ Done |
| 7 | Solutions page | ✅ Done |
| 8 | About page | ✅ Done |
| 9 | Team page | ✅ Done |
| 10 | Contact page | ✅ Done |
| 11 | Legal pages (Privacy, Terms, Delete Account) | ⬜ Pending |
| 12 | Responsive design review | ⬜ Pending |
| 13 | Content cleanup and trust review | ⬜ Pending |
| 14 | Testing and build verification | ⬜ Pending |
| 15 | Deployment | ⬜ Pending |

---

## Phase 1 — Project Setup ✅

**What was done:**
- Vite + React project already existed at `nolytech-react/`
- Installed: `react-router-dom`, `lucide-react`, `tailwindcss`, `@tailwindcss/vite`
- Configured Tailwind in `vite.config.js` (plugin added) and `src/index.css` (`@import "tailwindcss"` + brand tokens)
- Created full folder structure
- Created `AppRoutes.jsx`, `Layout.jsx`, `Navbar.jsx`, `Footer.jsx`
- Created stub pages for all 9 routes
- Created `data/services.jsx`, `data/solutions.jsx`, `data/team.jsx`
- Copied all images from PHP site into `public/images/`
- Updated `index.html` with correct meta tags and favicon

**Verification:** All 9 routes return HTTP 200. Dev server runs at `http://localhost:5174`.

---

## Phase 2 & 3 — Folder Structure and Routing ✅

Both completed as part of Phase 1 implementation. All routes are registered in `AppRoutes.jsx`, the `Layout` wrapper is in place, and scroll-to-top behavior is active.

---

## Phase 4 — Layout Components 🔄

**Files:** `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`, `src/components/layout/Layout.jsx`

**Navbar requirements:**
- Nolytech logo (`/images/Logo.png`) linking to `/`
- Desktop nav links: Home, About, Services, Solutions, Team, Contact
- "Get a Quote" CTA button → `/contact`
- Active link highlighted in accent teal
- Mobile hamburger menu (drawer, no overlay needed)
- Sticky positioning

**Footer requirements:**
- Logo light version (`/images/Logo-light.png`)
- Brief company tagline
- 3 link columns: Company, Legal, Contact
- Contact details with icons (email, phone, location)
- Copyright line with dynamic year
- No social icons (until real accounts exist)
- No newsletter form
- No Instagram gallery

**Layout requirements:**
- Wraps every page with `<Navbar>` + `<Outlet>` + `<Footer>`
- `min-h-screen` flex column so footer is always at the bottom
- `useEffect` scroll-to-top on route change

**Common components to build alongside:**
- `Button.jsx` — primary / outline variants, accepts `as` prop for `<Link>` or `<button>`
- `SectionHeader.jsx` — section label (small caps), heading, optional subtext
- `ServiceCard.jsx` — icon, title, category badge, description
- `SolutionCard.jsx` — icon, title, description
- `PageBanner.jsx` — inner page hero banner with title and breadcrumb

---

## Phase 5 — Home Page

**File:** `src/pages/Home.jsx`

**Sections in order:**

### 1. Hero
- Full-width section with background image (`/images/main-slider/slider2/slide1.jpg`) + dark overlay
- Headline: `"We build reliable software and ICT solutions for growing businesses."`
- Subtext: `"Nolytech Limited helps organisations digitise operations through custom software, web platforms, mobile applications, networking, server management, and IT consultancy."`
- Two buttons: `Request a Quote` (primary, → /contact) and `Explore Services` (outline, → /services)
- No carousel/slider — single clean hero

### 2. Services Preview
- Section header: "What We Do"
- Four-pillar spotlight showing only core service categories, not the full service list
- Pillars: Custom Software, Web & Mobile Platforms, Networks & Servers, Cloud/Data/Continuity
- Subtle scroll reveal and hover animations
- "Explore All Services" link → `/services`

### 3. About Preview
- Two-column: image (`/images/about/p1.jpg`) + text
- Headline: `"A practical ICT partner for businesses that are growing"`
- 3–4 sentences explaining Nolytech's approach
- "Learn More About Us" button → `/about`
- No fake counters

### 4. Solutions Preview
- Section header: "Solutions We Build"
- Grid of 6 solution cards (from `data/solutions.jsx`)
- Each card: icon, title, short description
- "See All Solutions" link → `/solutions`

### 5. Why Choose Nolytech
- Section header: "Why Nolytech"
- 6 trust points as icon + text pairs:
  - Practical, business-first approach
  - Modern development standards
  - Reliable ongoing support
  - Local understanding of Kenyan businesses
  - Scalable and maintainable systems
  - Security-conscious implementation
- No fake testimonials

### 6. CTA Banner
- Dark brand background using purple/teal accents
- Heading: `"Ready to build your next digital solution?"`
- Subtext: Contact information
- Button: "Contact Us" → `/contact`

---

## Phase 6 — Services Page

**File:** `src/pages/Services.jsx`

**Sections:**
1. Branded hero with purple/teal overlay, service summary strip, and CTAs
2. Four service pillars with alternating editorial image/text sections
3. Compact full service directory using all 9 services from `data/services.jsx`
4. "How We Work" process section
5. CTA → `/contact`

---

## Phase 7 — Solutions Page ✅

**File:** `src/pages/Solutions.jsx`

**Important framing:** Proof-led solution showcase. Show real solution families, modules, workflows, and evidence points without inventing client names, fake statistics, or inflated claims.

**Sections:**
1. Branded hero: "Solutions With Proof"
2. Featured proof section for SACCO Mobile Banking Platforms
3. Built solution family cards using enriched `data/solutions.jsx`
4. Proof principles section explaining how solutions are presented
5. CTA → `/contact`

---

## Phase 8 — About Page ✅

**File:** `src/pages/About.jsx`

**Sections:**
1. Editorial hero with Kilifi location marker and shaped transition
2. Company story section with large technology artwork
3. Mission and vision statement blocks
4. Values manifesto rows, avoiding a heavy card grid
5. Process path: Understand, Shape, Build, Support
6. CTA → `/contact` and `/services`

---

## Phase 9 — Team Page ✅

**File:** `src/pages/Team.jsx`
**Data:** `src/data/team.jsx`

**Rule:** Only real team members. If a photo is unavailable, show clean initials avatar. If no team members are confirmed yet, avoid fake profiles and explain how the team works.

**Current page structure:**
1. Editorial hero with shaped dark panel
2. Honest current-status section explaining profiles are added only when confirmed
3. Capability lanes: Software, Infrastructure, Client Support
4. Work-with-us section

**Note:** `data/team.jsx` currently exports an empty array. Add real members before this page goes live.

---

## Phase 10 — Contact Page ✅

**File:** `src/pages/Contact.jsx`

**Sections:**
1. Shaped hero with direct contact framing
2. Contact channel strip: email, phone, location
3. Project brief form: name, email, phone, service, urgency, message
4. Mailto fallback opens a prepared email, no fake backend submission
5. Direct email CTA

**Validation:** Required fields highlighted, email format check, no fake success state.

---

## Phase 11 — Legal Pages

### Privacy Policy — `src/pages/PrivacyPolicy.jsx`
Copy all 13 sections from `/home/dev/web_files/nolytech/privacy-policy.php`, format into clean React JSX with proper heading hierarchy. Last updated: June 5, 2026.

### Terms of Service — `src/pages/TermsOfService.jsx`
Copy all 14 sections from `/home/dev/web_files/nolytech/terms-of-service.php`, same formatting approach.

### Delete Account — `src/pages/DeleteAccount.jsx`
- Explanation of what deletion means
- Warning that it is permanent
- Form fields: Full Name, Email, Reason (optional)
- Confirmation checkbox
- v1: On submit, open a `mailto:info@nolytech.co.ke` link with pre-filled subject and body (no backend needed for v1)
- Alternative: "You can also email us directly at info@nolytech.co.ke"
- No fake success state

---

## Phase 12 — Responsive Design Review

**Target breakpoints (Tailwind defaults):**
- `sm` — 640px (mobile landscape)
- `md` — 768px (tablet)
- `lg` — 1024px (laptop)
- `xl` — 1280px (desktop)

**Checklist:**
- [ ] Navbar collapses to hamburger on mobile
- [ ] All grids stack to single column on mobile
- [ ] Hero text readable on small screens
- [ ] Buttons are finger-tap size (min 44px height)
- [ ] No horizontal overflow anywhere
- [ ] Images scale correctly with `w-full h-auto`
- [ ] Footer columns stack cleanly on mobile

---

## Phase 13 — Content Cleanup and Trust Review

Go through every page and check:
- [ ] No inflated statistics
- [ ] No placeholder names anywhere
- [ ] No generic YouTube links
- [ ] No social icons unless real accounts are linked
- [ ] No non-functional form submissions
- [ ] All contact details consistent (email, phone, location)
- [ ] Legal pages have correct last-updated dates
- [ ] All images load correctly from `public/images/`
- [ ] No template language ("Lorem ipsum", "Client Name", etc.)

---

## Phase 14 — Testing and Build Verification

**Run lint:**
```bash
npm run lint
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview -- --host 0.0.0.0
```

**Manual checklist:**
- [ ] All 9 routes navigate correctly
- [ ] Navbar links work on desktop and mobile
- [ ] Footer links work
- [ ] Logo images load
- [ ] Contact form validates input and shows correct state
- [ ] Legal pages fully render
- [ ] Delete Account page works
- [ ] No console errors in browser
- [ ] Build succeeds with no errors
- [ ] `dist/` folder is generated

---

## Phase 15 — Deployment

**Step 1 — Beta deployment first (recommended)**
Deploy the React site to `beta.nolytech.co.ke` or `new.nolytech.co.ke` for review before replacing the live site.

**Step 2 — Build**
```bash
cd /home/dev/web_files/nolytech-react
npm run build
```
Output: `/home/dev/web_files/nolytech-react/dist/`

**Step 3 — Replace live site (after approval)**
1. Back up the PHP site
2. Copy `dist/` contents to the web root
3. Configure the web server (Apache/Nginx) to serve `index.html` for all routes (required for React Router)

**Apache `.htaccess` for React Router:**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

**Nginx equivalent:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Key Decisions Already Made

1. **`.jsx` extension for all files** — including data files, for consistency
2. **No Blog page in v1** — add only when real content is ready
3. **No testimonials** — removed entirely; not enough confirmed real data
4. **No client logos** — removed until Nolytech confirms real client permissions
5. **No social icons** — removed until real Nolytech accounts exist
6. **No newsletter** — removed; no backend to handle it
7. **Proof-led "Solutions With Proof" framing** — solution families and evidence points without fake client claims
8. **No fake statistics** — any counter section must use real numbers or be absent
9. **Delete Account v1** — uses `mailto:` fallback, no backend persistence required initially

---

## Reference Files in PHP Site

| What to reference | PHP file |
|---|---|
| Privacy Policy text | `nolytech/privacy-policy.php` |
| Terms of Service text | `nolytech/terms-of-service.php` |
| Delete Account form logic | `nolytech/delete-account.php` |
| Brand colors | `nolytech/assets/css/style.css` (`:root` block) |
| Service names and descriptions | `nolytech/index.php` (Services section) |
| Image assets | `nolytech/assets/images/` → now also at `nolytech-react/public/images/` |
