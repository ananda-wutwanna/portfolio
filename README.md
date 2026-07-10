# Ananda Wutwanna — Portfolio

Bilingual (ไทย / English) portfolio for an IoT & embedded systems engineer.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, statically
exported for **GitHub Pages**.

**Theme:** dark "terminal / control-room" with a phosphor-green accent and an
interactive **3D robot hero** (Spline / WebGL). The Spline runtime is
lazy-loaded and skipped for `prefers-reduced-motion`, with an animated
placeholder fallback if the scene can't load.

> Note: the WebGL hero means the Lighthouse **Performance** score will sit
> below 90 (Accessibility / Best Practices / SEO remain high). This is the
> deliberate trade-off for the 3D hero. To restore a 90+ perf score, swap the
> `<SplineRobot>` in `components/Hero.tsx` for the static placeholder.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /th
```

`npm run build` produces a static site in `out/`.

## Fill these in before publishing

Search for `TODO` — the values live in [`data/site.ts`](data/site.ts):

- **GitHub URL** and handle
- **LinkedIn URL** and handle
- **Deployed site URL** (`siteUrl`, used by sitemap/robots/OG)
- **Thai name spelling** (`site.name.th`) — currently a transliteration guess
- **Resume PDFs** — replace the files in [`public/resume/`](public/resume/).
  The Thai resume is currently a copy of the English one.
- **OG image** — [`public/og-image.svg`](public/og-image.svg) is provided. For
  best Facebook/LinkedIn support, render it to `public/og-image.png` and update
  the `images` URL in [`app/[locale]/layout.tsx`](app/[locale]/layout.tsx).
- **3D hero scene** — `site.splineScene` in [`data/site.ts`](data/site.ts)
  defaults to a public Spline robot template. Create/duplicate your own free
  scene at [spline.design](https://spline.design) → **Export → Public URL**,
  and paste it so the asset is stable and self-owned.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `portfolio`).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the
   static export and deploys it. It sets `NEXT_PUBLIC_BASE_PATH` to
   `/<repo-name>` automatically, so the site is served from
   `https://<user>.github.io/<repo-name>/`.

> If your repo name is **not** `portfolio`, no change is needed for CI — the
> base path is derived from the repository name. For local production builds,
> pass it explicitly: `NEXT_PUBLIC_BASE_PATH=/my-repo npm run build`.

## Structure

```
app/[locale]/        # localized route (th | en) — layout + page
app/page.tsx         # root: remembers locale, redirects to /th or /en
components/          # Navbar, Hero, Skills, ProjectCard, Experience, ...
data/                # projects, experience, skills, site config (bilingual)
messages/            # en.json, th.json — UI strings
lib/                 # i18n dictionary loader + fonts
```

## i18n

Static-export-safe: no Next built-in `i18n` config or middleware. Locales are a
`[locale]` dynamic segment with `generateStaticParams()` returning `th` and
`en`. The navbar toggle swaps the segment and remembers the choice in
`localStorage`; default is Thai.
