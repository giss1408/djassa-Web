# Hossouko — public site

Single-page investor and partner site for Hossouko. React + Vite, no UI framework.

The narrative and every factual claim come from the business documents in
`../hossouko-BE/docs/business/`: `CONCEPT.md`, `MARKET.md`, `BUSINESS-MODEL.md`,
`ROADMAP.md` and `PARTNERS.md`. **When a claim changes there, change it here.**

## Commands

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # client build + prerender + service worker + .br/.gz, with a size report
npm run preview  # serve the production build
npm run lint     # oxlint
npm run check:content  # FR/EN parity, fails on a missing key (CI-friendly)
```

## Structure

```
src/
  content/       fr.js + en.js — all copy; index.js loads EN lazily and holds the parity check
  entry-server.jsx  build-time prerender of the French page
  components/    one component per page section, in narrative order
  hooks/         useLocale (locale + document side effects), useReveal, useCountUp
  styles/        tokens.css — colour, type scale, spacing, motion
  index.css      base layer: reset, focus, reveal, print
  App.css        section styles, in the order sections appear
public/fonts/    self-hosted Instrument Serif (OFL) — the only webfont
scripts/         postbuild.mjs (prerender, service worker, compression, size report),
                 check-content.mjs (FR/EN parity)
```

## Deploy on Render

The repository is ready to deploy as a Render **static site** from
[`render.yaml`](render.yaml) (a Blueprint):

1. Render dashboard → **New → Blueprint** → connect this GitHub repository.
2. Render reads `render.yaml` and creates `hossouko-web`: build
   `npm ci && npm run check:content && npm run build`, publish `./dist`,
   Node 22.12 (also pinned in `.node-version` and `engines`).
3. Deploys follow the repository's **default branch**. The latest work is on
   `integration`: merge it first, or set `branch:` in `render.yaml`.
4. Custom domain: add it under the service's Settings → Custom Domains. Then
   add its canonical and `og:url` tags to `index.html`, and the domain to the
   API's `CORS_ORIGINS` if the site reports errors to it.

`render.yaml` also sets the cache rules (a year for `/assets` and `/fonts`,
revalidate for pages and `sw.js`), baseline security headers, `noindex` for
`/brief/*`, and `/brief/` → the French brief. Pull requests get preview
deployments. Render compresses responses itself, so the precompressed
`.br`/`.gz` files are simply unused there; `public/_headers` serves the same
purpose on Netlify or Cloudflare Pages.

## Error reporting

`src/errorReporter.js` sends uncaught errors to the Hossouko API
(`POST /api/client-events`), where they join the apps' errors in Grafana. No
SDK and no visitor id; at most one small request per page view, and only when
something broke. It is off unless the build sets `VITE_HOSSOUKO_API_BASE`
(e.g. `https://api.hossouko.ci`); the API's `CORS_ORIGINS` must then include this
site's origin.

## Low-bandwidth budget

The audience is on prepaid mobile data, often 3G, on entry-level Android
phones. Every change should keep the first visit near **~120 KB (brotli)**;
`npm run build` prints the figure. What keeps it there:

- **Prerendered HTML.** `src/entry-server.jsx` renders the French page at build
  time and `scripts/postbuild.mjs` writes it into `dist/index.html`. The page
  is readable as soon as ~15 KB of HTML arrives; React hydrates it afterwards
  instead of drawing it from a blank screen. The first client render must
  therefore stay French (`useLocale`), or hydration would discard the markup.
- **English is a lazy chunk** (`content/index.js`, `loadContent`), fetched only
  when a visitor switches or their browser prefers English.
- **Fonts.** Body text is the phone's system font (zero bytes). Only
  Instrument Serif is self-hosted (`public/fonts`, latin subset, ~15 KB per
  style, `font-display: swap`); the regular style is preloaded from our own
  origin, so no third-party DNS/TLS sits in front of the headline.
- **Lite mode.** An inline script in `index.html` adds `.lite` on Data Saver or
  2G: no webfont request (Georgia instead), no motion, no blur, no reveal.
- **Service worker** (generated into `dist/sw.js`): page network-first with a
  3.5 s fallback to the cached copy, hashed assets cache-first. Repeat visits
  cost almost nothing and the site opens offline, for a demo in a market with
  no signal.
- **Precompressed** `.br`/`.gz` beside each text file, and `public/_headers`
  with year-long immutable caching for `/assets` and `/fonts` (Netlify /
  Cloudflare Pages syntax; mirror it on any other host).
- **Effects cost no downloads**: CSS only (paper grain as a 300-byte inline SVG,
  scroll-driven reading progress, staggered reveals, hover lift, demo screen
  transitions) plus one small count-up hook. All yield to
  `prefers-reduced-motion` and lite mode.

Next step if the budget tightens: alias React to `preact/compat` (~45 KB
brotli less). Not done yet because it adds dependencies to the lockfile.

## Editing copy

All strings live in `src/content/fr.js` and `src/content/en.js`. The two files
must stay structurally identical: `src/content/index.js` walks both trees in
development and logs any divergent key path, missing key, array-length mismatch
or empty string to the console. A missing translation is a bug, not a silent
fallback — an earlier version of this page translated only six strings and left
the rest in French while the toggle read "EN".

## Conventions worth keeping

- **Market figures carry their source inline.** The research notes warn that
  inclusion figures diverge by methodology (58% World Bank vs. up to 84% from
  the local sector). Never publish a bare aggregate.
- **Claims stay inside the documented guardrails**: no loan promise, no deposits
  held, no data sharing without consent, no opaque score, no pan-African claim.
  The federated-identity direction is labelled a hypothesis wherever it appears.
- **`--orange` is for graphics only** (2.8–3.1:1 on our paper surfaces). Orange
  text uses `--orange-text`; text on an orange fill uses `--on-orange`.
- **Colour never carries meaning alone** — stances, phases and revenue stages all
  pair their colour with a word.

## Accessibility baseline

Verified with scripted checks: one `h1`, no skipped heading levels, `nav` and
`footer` outside `main`, a working skip link, a visible focus ring on every
keyboard-focused control, resolving `aria-labelledby` on each section, scoped
table headers, an Escape-closable mobile menu that restores focus, no horizontal
overflow at 390/768/1440, and no WCAG AA contrast failure on non-decorative
text. Reveal animation and the marquee both yield to
`prefers-reduced-motion`.
