# Changelog — Fidelia website

What the public site offers, newest first. It has no version numbers: the
test site deploys `integration`, production deploys `trunk`. Entries are
grouped by the day the work landed. The product was called **Djassa** until
6 October 2026, then **Hossouko**, and is **Fidelia** since 9 October.

## 2026-10-10

- **Content aligned with the pilot boundaries** (`CONCEPT.md` § 12): the
  Thesis section's federated-identity block is replaced by **the pilot**
  (two questions, 5 to 10 maquis and grocery shops in one commune, free, and
  what is frozen); the daily cash book is the day-1 benefit; subscriptions
  and sponsored deals start after the pilot; one commune before a second
  (no other UEMOA country named); tontine no longer presented as a pilot
  segment; Phase 0–2 items and the Phase 1 exit gate match `ROADMAP.md`.
- **Build status updated**: phone and SMS-code sign-in, deal alerts,
  "Client venu" and Wave capture (in test) are built; the sign-in screen in
  the learning area now shows the phone and code fields.
- Learning area: no sponsored on-duty pharmacies, points stay per merchant,
  win-back by push notification instead of SMS/WhatsApp message packs.
- **Investor brief moved to the API**, behind a password: the brief, the NDA
  and the letters of interest are no longer public files of the site
  (`public/brief/` removed). The "Investor brief" buttons open
  `<API>/brief/` in the reader's language (`src/apiBase.js`).
- **Pilot round** on the investor brief: a XOF 31M pre-seed round in two
  tranches (XOF 14M at signing, XOF 17M at the Phase 0 exit gate), a BSA AIR
  under OHADA law with a USD 1.3M post-money cap and a 20% discount, use of
  funds and milestones per tranche.
- **Pilot boundaries** on the site and the brief: the daily cash book first,
  maquis and grocery shops in one commune, the customer app bringing new
  customers, a free pilot with the paid plan offered at the end. The status
  line shows on-duty pharmacies again.
- **Installateur button** on the download page points at
  `fidelia-installer.onrender.com` (the old djassa address was gone).
- **Deployment**: the Render service is named `fidelia` and follows its
  Blueprint's branch, so the same `render.yaml` serves production (`trunk`)
  and the test site (`integration`).

## 2026-10-09

- **Renamed to Fidelia**, with the new logo (menu, footer, hero card,
  walkthrough, install page, favicon) and the slogan "La fidélité, ça compte".
- **Privacy policy** (`/confidentialite/`, draft) and **account deletion**
  page (`/supprimer-mon-compte/`), both required by Google Play.
- **Download page** serves the Fidelia apps (`fidelia-*.apk`, v0.2.0).
- Contact address `contact.fidelia@regisse.com`.
- Deploys from `integration`.

## 2026-10-06

- Renamed to Hossouko, with a dot-ring logo.

## 2026-10-04

- **Download page**: phone sign-in, the shared test numbers and their code,
  the cashier number for the merchant app, and a link to the installer site.
- Uncaught site errors reported to the API.

## 2026-10-01

- Clearer explanation of sponsored-deal revenue.

## 2026-09-30

- **Download page `/app/`** for test installs shared on WhatsApp, with the
  APK sizes and a share button.
- **Investor brief** (FR/EN, printable) and a **mutual NDA**.
- Copy aligned with the concept: operator-neutral payments starting with
  Wave, points on cash sales in the merchant demo.
- Optimised for low bandwidth; deployable on Render.

## 2026-09-29

- **Learning area** explaining the two-app model (merchant and customer).

## 2026-09-27

- "The name" section.

## 2026-09-22

- First version of the site.
