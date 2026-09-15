# Portfolio — React

A single-page developer portfolio built with React + Vite: about, skills with
proof, projects with screenshot/video galleries, internships with photos and
certificates, achievements, live GitHub/LeetCode tracking, technology badges,
a downloadable resume, and smooth scroll-reveal transitions. Light, formal
theme — no template CSS framework, hand-built design system.

## Architecture

```
Static React SPA (Vite build)
        │
        ▼
   dist/ (plain HTML + JS + CSS)  ──▶  any static host (free)
        │
        ├── src/data/portfolioData.js   ← ALL editable content lives here
        ├── src/components/*.jsx        ← one component per section
        └── public/assets/*             ← your real photos/screenshots/certs go here

No backend, no database — everything is static and client-rendered.
"Tracking" (GitHub/LeetCode stats) and technology badges are just <img> tags
pointing at free public stat-card services (github-readme-stats, leetcode
stat cards, shields.io) — they update on their own with no server needed.
```

## Project structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       ├── Ananya_Rao_Resume.pdf       ← placeholder, replace with your resume
│       └── placeholders/               ← generic placeholder images used everywhere
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                       ← design tokens & all styling
│   ├── data/
│   │   └── portfolioData.js            ← edit this file with your real info
│   └── components/
│       ├── Navbar.jsx, Hero.jsx, StatsBar.jsx, About.jsx
│       ├── Skills.jsx, TechBadges.jsx
│       ├── Projects.jsx, ProjectCard.jsx
│       ├── Internships.jsx, Achievements.jsx
│       ├── Tracking.jsx, Contact.jsx, Footer.jsx
│       └── Seal.jsx, SectionReveal.jsx (shared: verified-proof badge, scroll animation)
```

## 1. Personalize the content (do this first)

Everything you'd normally hunt through markup for lives in one file:
**`src/data/portfolioData.js`**. Edit the plain JS objects there:

- `profile` — your name, role, tagline, photo, resume file path, social links
- `stats` — the four highlight numbers at the top
- `skillGroups` — your skills, grouped, with an optional `proof` image per skill
- `techBadges` — the technology badge row (uses [simpleicons.org](https://simpleicons.org) slugs)
- `projects` — each project's screenshots, optional video, GitHub link, live link
- `internships` — company, role, photo, certificate image, description
- `achievements` — title, year, photo, description
- `tracking` — your real GitHub and LeetCode usernames
- `contact` — the contact section heading/message

## 2. Add your real images

Drop your real screenshots, certificates, photos, and a demo video into
`public/assets/` (make subfolders if you like, e.g. `public/assets/projects/`),
then point to them from `portfolioData.js` as `/assets/your-file.jpg`.
The placeholder SVGs in `public/assets/placeholders/` are there so the site
looks complete before you add anything — replace them at your own pace.

Replace `public/assets/Ananya_Rao_Resume.pdf` with your actual resume
(same filename, or update `profile.resumeFile` in the data file).

## 3. Run locally

Requires Node.js 18+.

```bash
cd portfolio-react
npm install
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**). Edit
`portfolioData.js` and the page hot-reloads instantly.

To check the production build locally before deploying:

```bash
npm run build
npm run preview
```

## 4. Deploy for free

This is a static site (just HTML/CSS/JS after `npm run build`), so any free
static host works. Two of the simplest:

### Option A — Vercel (recommended, zero config)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Leave defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. You get a free `https://your-project.vercel.app` URL,
   with automatic redeploys on every push.

### Option B — Netlify

1. Push to GitHub (or drag-and-drop the `dist/` folder after `npm run build`
   straight into [app.netlify.com/drop](https://app.netlify.com/drop) for an
   instant deploy with no account).
2. For the GitHub-connected route: **Add new site → Import an existing project**,
   set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy — Netlify gives you a free `https://your-project.netlify.app` URL.

### Option C — GitHub Pages

```bash
npm install -D gh-pages
```
Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`, then:
```bash
npm run build
npm run deploy
```
Enable Pages in the repo settings pointing at the `gh-pages` branch.

## Notes on the live tracking widgets

The GitHub/LeetCode cards in the "Tracking" section use free, public,
no-auth stat-card services (`github-readme-stats.vercel.app`,
`streak-stats.demolab.com`, `leetcard.jacoblin.cool`). They're widely used
in GitHub READMEs and require no signup, but as third-party free services
they can occasionally be slow or briefly down — that's expected and not a
bug in this code.
