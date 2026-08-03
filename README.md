# Maganji Website

Marketing site for Maganji, built with Next.js 15 (App Router) + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before you deploy

1. **Screenshots** — drop these into `public/images/maganji/` (see the README
   in that folder for exact filenames/sizes needed).
2. **App Store URL** — replace the placeholder `id0000000000` links in
   `app/page.tsx` and `app/footer.tsx` with your real App Store listing URL.
3. **OG image** — add `public/og-image.png` (1200x630) for social share
   previews.
4. **Privacy policy** — `app/privacy/page.tsx` is a draft. Have it reviewed
   before publishing (needed for App Store / Play Store compliance).
5. **Support email** — currently `support@brimukonlabs.com` in
   `app/footer.tsx` and `app/privacy/page.tsx`; update if different.

## Deploying to GitHub Pages (maganji.co.ke)

This project is already configured for a static export (`output: "export"`
in `next.config.ts`) and includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically.

**One-time setup:**

1. Push this repo to GitHub (it needs to be the repo GitHub Pages will
   serve from — public repos get Pages for free).
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (not "Deploy from a branch").
3. Go to **Settings → Pages → Custom domain**, enter `maganji.co.ke`, and
   save. (A `public/CNAME` file with `maganji.co.ke` is already in this
   repo, so GitHub will pick it up automatically too — the Settings field
   just makes GitHub double-check and offer to enforce HTTPS.)
4. At your domain registrar, point the DNS for `maganji.co.ke` to GitHub
   Pages:
   - **A records** (apex domain) → add all four:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional **AAAA records** (IPv6) →
     `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - If you also want `www.maganji.co.ke` to work, add a **CNAME record**
     for `www` pointing to `<your-github-username>.github.io`.
5. Push to `main` — the workflow builds the site and deploys it. First
   deploy can take a few minutes; DNS propagation and SSL cert issuance
   can take longer (up to a few hours).

**Important:** don't point DNS at both Vercel and GitHub Pages at the same
time for the same domain — pick one host for `maganji.co.ke`. If you were
already using the Vercel instructions below, you'll need to remove those
DNS records first (or use GitHub Pages for `maganji.co.ke` and skip Vercel
entirely, which is the simpler path if you're going all-in on Pages).

**What "static export" changes:**

- `next/image` optimization is disabled (`images.unoptimized: true`) since
  GitHub Pages has no image server — images are just served as-is. Fine
  here since your screenshots are already pre-sized webp files.
- Everything else in this project (pages, metadata, JSON-LD, sitemap,
  robots.txt) is plain static HTML/JSON generation, so it all works
  unchanged.
- If you ever want to preview the exact static output locally: `npm run
  build` produces a full static site in `./out` — open `out/index.html`
  directly or serve the folder with any static file server.



## SEO notes

- Metadata (title, description, OG/Twitter tags, canonical URL) lives in
  `app/layout.tsx`, pointed at `https://maganji.co.ke`.
- `app/layout.tsx` also injects a `MobileApplication` JSON-LD schema block.
- Image `alt` text in `app/page.tsx` is already keyword-annotated — keep this
  pattern for any new images you add.
- Next step: consider adding a `sitemap.ts` and `robots.ts` in `app/` (Next
  supports both as file conventions) once the domain is live.