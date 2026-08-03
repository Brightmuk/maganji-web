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

## Deploying to maganji.co.ke

The easiest path is Vercel:

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Once deployed, go to your Vercel project → **Settings → Domains**, add
   `maganji.co.ke` (and `www.maganji.co.ke` if you want it too).
4. Vercel will show you DNS records (usually an `A` record to `76.76.21.21`
   for the apex domain, or a `CNAME` for `www`). Add those at your domain
   registrar (wherever you bought `maganji.co.ke`).
5. DNS propagation can take anywhere from a few minutes to a few hours.
   Vercel auto-issues an SSL certificate once it verifies the domain.

## Project structure

```
app/
  layout.tsx      → fonts, SEO metadata, JSON-LD structured data
  page.tsx         → the full marketing page
  footer.tsx       → site footer (Brimukon Labs branding, links)
  privacy/page.tsx → privacy policy (draft — needs your review)
  globals.css      → Tailwind + theme variables (light/dark)
public/
  images/maganji/  → app screenshots go here
```

## SEO notes

- Metadata (title, description, OG/Twitter tags, canonical URL) lives in
  `app/layout.tsx`, pointed at `https://maganji.co.ke`.
- `app/layout.tsx` also injects a `MobileApplication` JSON-LD schema block.
- Image `alt` text in `app/page.tsx` is already keyword-annotated — keep this
  pattern for any new images you add.
- Next step: consider adding a `sitemap.ts` and `robots.ts` in `app/` (Next
  supports both as file conventions) once the domain is live.
