# Djassa — public site

Single-page investor and partner site for Djassa. React + Vite, no UI framework.

The narrative and every factual claim come from the concept documents in
`../djassa/docs/`: `PRODUCT-CONCEPT.md`, `djassa-product-concept-v2.md`,
`BUSINESS-MODEL.md`, `ROADMAP.md`, `PARTNERS-AND-OUTREACH.md`, and the French
research notes. **When a claim changes there, change it here.**

## Commands

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

```
src/
  content/       fr.js + en.js — all copy; index.js holds the parity check
  components/    one component per page section, in narrative order
  hooks/         useLocale (locale + document side effects), useReveal
  styles/        tokens.css — colour, type scale, spacing, motion
  index.css      base layer: reset, focus, reveal, print
  App.css        section styles, in the order sections appear
```

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
