# Scholars Web

A free, open directory of scholars, researchers, and academics across disciplines and institutions worldwide. Search, filter by field, and view profiles with publications, stats, and research interests.

## Features

- **Searchable directory** — find scholars by name, field, institution, country, or research interest
- **Field filters** — one-click chips to narrow by discipline (Computer Science, Physics, Public Health, Economics, etc.)
- **Scholar profiles** — dedicated pages with bio, stats (publications / citations / h-index), research interests, and selected publications
- **Fully static** — built with Next.js 14 static export, deploys anywhere (GitHub Pages configured out of the box)
- **Responsive, accessible design**

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- React 18
- Plain CSS (no framework)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # builds static site into ./out
```

## Deploy to GitHub Pages

This repo ships with a ready-made workflow at `.github/workflows/deploy.yml`. Pushing to `main` (or merging a PR) will automatically build and deploy to GitHub Pages.

The workflow sets `GITHUB_PAGES=true` so that `next.config.js` applies the `/scholars-web` `basePath`/`assetPrefix` required for hosting at `https://<user>.github.io/scholars-web/`. A `.nojekyll` file is included so that Next.js's `_next/` assets are served correctly.

To enable:
1. In your GitHub repo settings → **Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`. The Actions workflow will build and deploy.

## Project structure

```
app/
  layout.jsx            # site header + footer
  page.jsx              # home (directory + search)
  SearchDirectory.jsx   # client-side search/filter
  scholar/[id]/page.jsx # per-scholar detail page (statically generated)
  not-found.jsx         # 404 page
  globals.css           # styles
data/
  scholars.js           # scholar dataset (edit to add your own entries)
public/
  .nojekyll             # tells GitHub Pages to serve _next/ assets
next.config.js          # static export + GitHub Pages basePath
```

## Adding scholars

Edit `data/scholars.js`. Each entry follows this shape:

```js
{
  id: "unique-slug",
  name: "Dr. Example Name",
  initials: "EN",
  avatarClass: "",       // "", "v2"–"v5" for avatar color variants
  field: "Field Name",
  institution: "University Name",
  country: "Country",
  bio: "Short bio shown on card",
  interests: ["Topic 1", "Topic 2"],
  publications: 0,
  citations: 0,
  hIndex: 0,
  email: "name@university.edu",
  website: "https://...",
  bioLong: "Longer biography on detail page",
  publications_list: [
    { year: 2024, title: "Paper title", venue: "Venue / journal" }
  ]
}
```

## License

MIT
