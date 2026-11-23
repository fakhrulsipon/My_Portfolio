# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint (flat config in `eslint.config.js`; `no-unused-vars` ignores names starting with an uppercase letter or `_`)

There is no test suite.

## Stack

Single-page personal portfolio (Fakhrul Islam Sipon): React 19 + Vite 7, plain JavaScript/JSX (no TypeScript). Styling is Tailwind CSS v4 via `@tailwindcss/vite` with DaisyUI 5 loaded as a plugin in `src/index.css` — there is no `tailwind.config.js`. Animations use `framer-motion` (imported as `motion as Motion` because core `no-unused-vars` doesn't see JSX usage of lowercase/renamed bindings — likewise assign component props to a capitalized local, e.g. `const Icon = icon`) and `lottie-react` (JSON animations in `src/assets/`).

## Architecture

- **Routing** (`src/main.jsx`, `react-router` v7 `createBrowserRouter`): `/` → `AppWrapper`; `/course-management` → `src/page/CourseManagement.jsx` (a standalone project detail page). `src/App.jsx`/`App.css` are unused Vite scaffold leftovers.
- **Preloader**: a pure HTML/CSS preloader is inlined in `index.html` so it paints before any JS. `src/appWraper/Root.jsx` fades it out once React has mounted and fonts are ready (capped at 900ms); there is no artificial delay. Keep preloader CSS inline in `index.html`.
- **Code splitting**: heavy pieces load on demand — `LazyLottie.jsx` (lottie-react + animation JSON, triggered by IntersectionObserver; pass a module-level `load` function and an `aspectRatio` to avoid layout shift), EmailJS and SweetAlert2 (dynamic `import()` on form submit), `SplashCursor` (WebGL; only on fine-pointer devices without reduced-motion, after idle, gated in `MainLayout`), and the `/course-management` page. Don't reintroduce static imports of these.
- **`src/layout/MainLayout.jsx`** composes the entire home page as stacked sections, each wrapped in a `<section id="...">` (`home`, `services`, `about`, `skills`, `experience`, `projects`, `contact`). Navbar links are plain `<a href="/#id">` anchors relying on CSS `scroll-behavior: smooth` + `scroll-padding-top` (offset for the fixed navbar) in `index.css` — keep section ids in sync with `Navbar.jsx` when adding/renaming sections.
- **Positioning**: the site presents the owner as Senior Full Stack Developer + AI Automation Expert + DevOps & Cloud, for any client. It must contain no plumbing-specific content — that lives in the separate `../plumbing-portfolio` copy. Keep Hero, About, Services, Skills, the contact intro and the `index.html` title/description consistent with that.
- **Services** (`src/component/Services.jsx`, section id `services`, placed right after the hero and not in the navbar): three pillar cards (`PILLARS`: Full Stack, AI Automation (featured), DevOps & Cloud) plus a dark "let's work together" banner with `CAPABILITIES` chips.
- **Projects**: data lives in `src/data/projects.js` as `PROJECT_CATEGORIES` (currently only `saas`). `Projects.jsx` renders every category at once, in array order, as a stacked group (header + grid of the shared `ProjectCard.jsx`), with anchor ids `#<id>-projects`. Per-category icons are in `CATEGORY_UI` in `Projects.jsx` — a new category needs an entry there too. Add a project by adding it to its category's `projects` array; screenshots live in `public/`.
- **Contact form** (`ContactForm.jsx`) sends mail client-side via EmailJS (service/template/public key in the `EMAILJS` const) and shows results with SweetAlert2. Contact-info cards in `Footer.jsx` are data-driven from the `CONTACTS` array.
- The resume PDF is served from `public/` and linked by `ResumeButton.jsx` / the Navbar.

## Styling conventions

The shared `--angle` `@property` and `shimmer-spin` keyframes used by shimmer borders are defined once in `index.css` — don't inject them per component. Design tokens and reusable component classes are defined in `src/index.css`: CSS variables on `:root` plus `@layer components` utilities — `section-shell`, `section-container`, `section-badge`, `premium-card`, `premium-chip`, `btn-gradient-pill`, `text-gradient-primary`, `focus-ring`. Reuse these for new sections. The theme is light-only, Plus Jakarta Sans font, with an orange→pink accent gradient (`#FF7E29` → `#FF3E6C`) and slate text (`#0F172A`).

## Deployment

`public/CNAME` contains `https://sipon.vercel.app/`; the README links a Netlify deploy. Static `dist/` output — any static host works.
