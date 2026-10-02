# Harsh Singh — Data Science & Machine Learning Portfolio

> **"Turning Raw Data Into Practical Models & Interactive Applications."**  
> Built around one core principle: **"Let the work prove the skills."**

This repository contains the personal Data Science, Machine Learning, and Software/AI portfolio of **Harsh Singh** (B.Tech in Computer Science & Engineering, Class of 2027).

---

## 1. Why This Stack Was Selected

- **Next.js 14 (App Router) + React 18**: Enables server-side GitHub API fetching with Incremental Static Regeneration (`revalidate = 900`), fast initial page loads, dynamic SEO metadata (`sitemap.xml`, `robots.txt`, JSON-LD), and zero client-side secret exposure.
- **TypeScript**: Enforces strict typing across project case studies, skill clusters, GitHub API payloads, and configuration files so updates never accidentally break the UI.
- **Tailwind CSS + CSS Variables**: Powers an intentional **Light Mode / Dark Mode / System Theme** design system with WCAG-compliant contrast, subtle coordinate-grid aesthetics, and `prefers-reduced-motion` accessibility.
- **Server-Side GitHub REST API Layer (`/api/github` & `src/lib/github.ts`)**: Automatically discovers and syncs public repositories from [`github.com/harshsingh134`](https://github.com/harshsingh134) with resilient fallback snapshots if GitHub's API is temporarily rate-limited or offline.

---

## 2. Project Folder Structure

```text
My-Portfolio/
├── public/
│   └── resume/
│       └── README.md                # Place Harsh_Singh_Resume.pdf here
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts     # Server-validated contact endpoint with rate-limiting & honeypot
│   │   │   └── github/route.ts      # Cached server route for live GitHub profile & repo sync
│   │   ├── notes/[slug]/page.tsx    # Dynamic technical note / notebook breakdown reader
│   │   ├── projects/[slug]/page.tsx # 9-stage (01–09) engineering case study page
│   │   ├── globals.css              # Design tokens (Light/Dark themes), accessibility & grid styles
│   │   ├── layout.tsx               # Root layout, SEO metadata, OpenGraph & JSON-LD schema
│   │   ├── page.tsx                 # Main portfolio landing page
│   │   ├── robots.ts                # SEO robots.txt generator
│   │   └── sitemap.ts               # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky, accessible responsive header + theme toggle
│   │   ├── Hero.tsx                 # Recruiter 10s pitch + interactive Data→Analysis→ML→Deployment pipeline
│   │   ├── About.tsx                # Humanized story + verified profile quick facts
│   │   ├── Capabilities.tsx         # "What I Can Do" evidence-backed capability cards
│   │   ├── Skills.tsx               # Domain-grouped skill clusters (zero fake percentage bars)
│   │   ├── ProjectCard.tsx          # Visual architecture preview + conditional Live Demo/GitHub buttons
│   │   ├── ProjectGrid.tsx          # Category filters + real-time search + live GitHub discovery
│   │   ├── GitHubProjects.tsx       # Live GitHub stats, repo cards & interactive .ipynb Notebook Explorer
│   │   ├── LearningJourney.tsx      # 8-stage learning progression + "Currently Building" status tracker
│   │   ├── NotesSection.tsx         # Technical notes & ML experiment write-ups
│   │   ├── Resume.tsx               # Scannable CV, verified certifications & PDF download/print
│   │   ├── Contact.tsx              # Verified contact channels + server-validated form
│   │   ├── Footer.tsx               # Minimal professional footer
│   │   └── ThemeProvider.tsx        # Dark / Light / System preference manager
│   ├── config/
│   │   └── siteConfig.ts            # SINGLE SOURCE OF TRUTH for all personal data, projects & placeholders
│   ├── lib/
│   │   └── github.ts                # GitHub API integration, topic filter engine & fallback snapshot
│   └── types/
│       └── portfolio.ts             # TypeScript interfaces for the entire portfolio
├── .env.example                     # Environment variable template
├── next.config.mjs                  # Next.js configuration & security headers
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 3. Honest Placeholders Checklist (Update in `src/config/siteConfig.ts`)

To keep this portfolio **100% honest and defensible**, no missing metrics, links, or institution names were invented. Open `src/config/siteConfig.ts` and search for `[ADD` to fill in these items whenever you have them ready:

| Field in `src/config/siteConfig.ts` | Current Placeholder | What to Replace It With |
| :--- | :--- | :--- |
| `siteConfig.linkedinUrl` | `"[ADD LINK]"` | Your full LinkedIn URL (`https://www.linkedin.com/in/...`). The LinkedIn button will automatically activate once set. |
| `siteConfig.about.quickFacts` (University) | `"[ADD UNIVERSITY / INSTITUTION NAME]"` | Your college/university name for B.Tech CSE (2023–2027). |
| `portfolioProjects[0].liveDemoUrl` | `"[ADD LIVE DEMO]"` | Your deployed Streamlit URL for **Laptop Price Predictor**. The **Live Demo** button stays hidden until a real `https://` URL is entered. |
| `portfolioProjects[0].caseStudy.evaluation.metricPlaceholder` | `"[ADD PROJECT METRIC...]"` | Your exact held-out test $R^2$ and MAE score from `laptop-price-predictor.ipynb`. |
| `portfolioProjects[1].liveDemoUrl` | `"[ADD LIVE DEMO]"` | Your deployed Streamlit URL for **WhatsApp Chat Analyzer**. |
| `certifications[*].issuer` & `issueDate` | `"[ADD ISSUING PLATFORM / PROVIDER]"` | The platform (e.g., Coursera / IBM / Udemy / NPTEL) and completion year for *Python for Data Science & Machine Learning* and *Data Analysis with Python*. |
| `public/resume/Harsh_Singh_Resume.pdf` | `resumeFileExists: false` | Drop your PDF into `public/resume/Harsh_Singh_Resume.pdf` and set `resumeFileExists: true`. |

---

## 4. GitHub Automation Setup Guide

Your portfolio is connected to **`github.com/harshsingh134`** so you do not have to rewrite HTML whenever you create or update a project.

1. **Where your GitHub username is configured**:
   In `src/config/siteConfig.ts` under `siteConfig.githubUsername = "harshsingh134"` (or via `NEXT_PUBLIC_GITHUB_USERNAME` in `.env.local`).
2. **How repositories are fetched**:
   `src/lib/github.ts` queries `https://api.github.com/users/harshsingh134` and `https://api.github.com/users/harshsingh134/repos?per_page=100&sort=updated` on the server side.
3. **How repository topics control portfolio visibility & filters**:
   On GitHub.com, open any of your repositories → click the gear icon next to **About** (top right) → add **Topics**:
   - Add `portfolio` or `featured` to mark a repository as a **Featured Project**.
   - Add `data-science`, `machine-learning`, `deep-learning`, `python`, `sql`, or `streamlit` to make the repository automatically appear under the corresponding filter buttons in the **Projects** section!
   - Add a **Website** URL in the GitHub repository's **About** box (e.g., your Streamlit Cloud URL) and the portfolio will automatically use it as the repository's `liveDemoUrl`.
4. **How frequently GitHub data refreshes & how caching works**:
   Server responses are cached for **15 minutes** (`revalidate = 900`) so the site loads instantaneously and never hits GitHub's rate limits. Visitors can also click the **"Sync GitHub"** button in the GitHub section to trigger an on-demand refresh via `/api/github`.
5. **What happens if the GitHub API fails**:
   If GitHub is offline or rate-limited, `fetchGitHubPortfolioData()` automatically falls back to `FALLBACK_GITHUB_DATA` in `src/lib/github.ts` so the website never crashes or shows empty sections.
6. **How to add a new project**:
   - **Option A (Zero-code via GitHub)**: Create a public repository on GitHub, write a clear description in the "About" field, and tag it with topics like `portfolio`, `data-science`, or `machine-learning`. It will automatically appear on your site!
   - **Option B (Full 9-section Case Study)**: Add a new entry to `portfolioProjects` in `src/config/siteConfig.ts` to generate a dedicated `/projects/your-project-slug` case study page.
7. **How to hide/remove a repository**:
   Remove the `portfolio` topic on GitHub or add the repository name to `siteConfig.githubAutomation.excludedRepoNames` in `src/config/siteConfig.ts`.

---

## 5. Local Development & Beginner-Friendly Deployment Guide

### Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Deploy to Vercel (Recommended — Free & Automatic)

1. Push your code to your GitHub repository (`harshsingh134/My-Portfolio`).
2. Go to [vercel.com](https://vercel.com) and sign in with your **GitHub** account.
3. Click **Add New… → Project** and import `harshsingh134/My-Portfolio`.
4. **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
5. **Environment Variables** (Optional):
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://harshsingh.vercel.app`)
   - `GITHUB_TOKEN`: (Optional) A classic GitHub Personal Access Token with public read access if you want 5,000 req/hr rate limits.
6. Click **Deploy**. Vercel will build your site, provision automatic **HTTPS (SSL)**, and give you a live URL. Every future `git push` to your branch will automatically rebuild and update your live portfolio.
