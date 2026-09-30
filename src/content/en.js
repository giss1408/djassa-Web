/**
 * English copy. Mirrors fr.js key for key — a missing key is a rendering bug,
 * not a silent fallback to French. See content/index.js for the parity check.
 */
import { learnEn } from './learn.en.js'

export const en = {
  locale: 'en',
  meta: {
    title: 'Djassa — Proof infrastructure for local commerce',
    description:
      'Djassa turns one habit — recording a verified sale — into usable business history for independent merchants in Abidjan, and into a consented bridge to licensed financial institutions.',
  },
  nav: {
    skip: 'Skip to main content',
    home: 'Djassa — home',
    links: [
      { href: '#concept', label: 'The concept' },
      { href: '#demo', label: 'The demo' },
      { href: '#marche', label: 'The market' },
      { href: '#these', label: 'The thesis' },
      { href: '#modele', label: 'The model' },
      { href: '#execution', label: 'Execution' },
    ],
    cta: 'Investor brief',
    langLabel: 'Switch to French',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    eyebrow: 'Financial inclusion — built from local commerce',
    title: 'Progress starts at the corner shop.',
    intro:
      'In Côte d’Ivoire, 25 million active mobile-money accounts coexist with a 31% banked rate. Access is solved; proof of activity is not. Djassa builds that proof from what already happens at the counter, a customer paying with Wave and a merchant getting paid, and turns it into a reason for the customer to come back.',
    primary: 'Read the investment thesis',
    secondary: 'Understand the concept',
    stage: {
      label: 'Current stage',
      value: 'Pre-pilot',
      detail: 'Backend and two prototype apps (merchant, customer). Abidjan pilot: 5 to 10 merchants, not yet launched.',
    },
    card: {
      tag: 'DJASSA / TRANSACTION',
      line: 'who · where · how much · when',
      holder: 'VERIFIED MERCHANT',
      foot: 'RECORDED OFFLINE · SYNCED WITHOUT DUPLICATES',
    },
    artLabels: {
      top: '01 — Trust is',
      topStrong: 'built, not claimed',
      bottom: 'MOBILE MONEY',
      bottomStrong: '+ RELATIONSHIP',
      stamp: 'Made',
      stampStrong: 'here',
      alt: 'Illustration: a recorded transaction becomes the merchant’s economic identity card',
    },
  },
  ticker: [
    'Abidjan first',
    'One single habit',
    'Offline by default',
    'On the merchant’s own Wave',
    'Explicit consent',
    'No deposits held',
  ],
  learn: learnEn,
  word: {
    kicker: 'The name',
    phonetic: '/dja.sa/',
    pos: 'noun',
    origin: 'Nouchi — Abidjan street language',
    senses: [
      'An informal street market: the spontaneous roadside or neighbourhood market where vendors sell everything from second-hand clothes to phones, often without official stalls or permits.',
      'By extension, the street, the “hood”: the world of the informal economy and the daily hustle — the rough, lively place where people get by through small trades, deals and street smarts.',
    ],
    why: 'We took the name because that is exactly who we build for: the merchants of the djassa, whose everyday activity is real but leaves no proof behind.',
  },
  concept: {
    kicker: '01 / The concept',
    title: 'One habit.',
    titleEm: 'Five uses.',
    lede:
      'Most merchant tools fail because every new feature asks for a new habit. Djassa asks for one: record the sale. Everything else is a different read of the same event.',
    body:
      'When a customer pays with the Wave QR the merchant already uses, the sale is captured automatically and the customer earns points: zero new habit, zero extra fee. Cash sales are recorded in one tap, even offline. Loyalty, revenue history, tontine tracking, the reliability indicator and the credit export are not five sequential projects: they are five views on a single event stream, becoming visible as it accumulates.',
    coreLabel: 'THE EVENT',
    coreValue: 'verified transaction',
    coreDetail: 'who · where · how much · when',
    nodes: [
      { title: 'Loyalty', detail: 'points issued automatically', phase: 'Phase 1' },
      { title: 'Revenue', detail: 'exportable activity history', phase: 'Phase 1' },
      { title: 'Tontine', detail: 'contribution regularity', phase: 'Phase 3' },
      { title: 'Reliability', detail: 'explainable indicator', phase: 'Phase 4' },
      { title: 'Financing', detail: 'case sent to a licensed partner', phase: 'Phase 5' },
    ],
    note:
      'Design consequence: any feature that would require a second habit from the merchant is out of scope, unless there is no other way to obtain the signal. And no payment may cost the merchant more than it does today.',
  },
  market: {
    kicker: '02 / The market',
    title: 'Access is solved.',
    titleEm: 'Usage is not.',
    lede:
      'The Ivorian paradox is documented: the digital wallet is near-universal, but saving, borrowing or proving business activity remains out of reach. That gap — not payment access — is the opportunity.',
    stats: [
      { value: '25M+', label: 'active mobile-money accounts', sub: 'for ~28–31M inhabitants', source: 'BCEAO, 2024–2026' },
      { value: '2.72M', label: 'merchant payment points', sub: '23.3% of mobile-money transactions (3.3% in 2020)', source: 'BCEAO via Launch Base Africa, 2024' },
      { value: '31.2%', label: 'strictly banked rate', sub: '43.6% including microfinance', source: 'National indicators, 2023' },
      { value: '2.9M', label: 'microfinance clients', sub: '+14.3% in one quarter', source: 'APSFD-CI, Q1 2026' },
      { value: '~20%', label: 'of GDP from SMEs', sub: '~23% of employment', source: 'Ivorian government' },
      { value: '3,860', label: 'SMEs under public guarantee', sub: 'XOF 114.7bn guaranteed, 24.5% to women', source: 'SGPME, Apr. 2026' },
    ],
    gapTitle: 'What the gap means for us',
    gaps: [
      {
        title: 'Physical collateral blocks credit',
        body:
          'SMEs face collateral requirements most cannot meet. Alternative data — a verified sales history — is explicitly identified by public programmes as a possible partial substitute.',
      },
      {
        title: 'Funders are looking for execution partners',
        body:
          'APIF, SGPME, GUDE-PME, GIZ, EIB, BII: a stack of initiatives seeking private distribution and data partners rather than operating everything in-house. A real window, provided you understand the guarantee mechanisms.',
      },
      {
        title: 'Digital tontine is locally vacant',
        body:
          'Validated models have run in Senegal and Cameroon since 2015–2016. No Ivorian player dominates this segment, despite local mobile-money maturity.',
      },
    ],
    sourceNote:
      'Inclusion figures vary by source: 58% (World Bank, Global Findex 2025) versus up to 84% per the local fintech sector, reflecting different methodologies and collection periods. We publish each figure with its source rather than a single aggregate, and re-verify before any contractual use.',
  },
  landscape: {
    kicker: '03 / Positioning',
    title: 'Where the market is already taken,',
    titleEm: 'we do not go.',
    lede:
      'The Ivorian ecosystem is structured across three segments and empty on a fourth. Our positioning follows from that reading, not from preference.',
    columns: ['Segment', 'Established players', 'Our position'],
    rows: [
      {
        segment: 'Consumer personal finance',
        players: 'Djamo — $17M raised (2025), $4.5bn transactions processed',
        stance: 'Avoided',
        verdict: 'out',
        why: 'Established regional leader. No edge for a generalist entrant.',
      },
      {
        segment: 'B2B payments and SME treasury',
        players: 'Julaya, Hub2 — 55 infrastructure clients',
        stance: 'Avoided',
        verdict: 'out',
        why: 'Already funded and structured.',
      },
      {
        segment: 'Merchant payments and aggregation',
        players: 'Wave (~1% merchant fee, ~1M QR merchants), Orange Money, CinetPay',
        stance: 'Partner',
        verdict: 'partner',
        why: 'We plug into the QR the merchant already uses. We do not sell them a more expensive payment.',
      },
      {
        segment: 'Customer loyalty, merchant activity proof and digital tontine',
        players: 'No dominant Ivorian player',
        stance: 'Our place',
        verdict: 'in',
        why: 'Locally vacant: wallets collect payments, but none brings the customer back. Aligned with BCEAO’s work on alternative scoring.',
      },
    ],
  },
  thesis: {
    kicker: '04 / The investment thesis',
    title: 'Start small.',
    titleEm: 'Compound.',
    lede:
      'Djassa does not ask a market to believe in a super-app. It first solves a frequent, monetizable merchant problem, then reuses the same infrastructure to make financial inclusion progressive and measurable.',
    cards: [
      {
        icon: '↗',
        label: 'The wedge',
        title: 'The merchant pays for visible value.',
        body:
          'Loyalty brings customers back: that is what the merchant sees every week, and what they pay for, before any financial commission. The first customer is the one who uses the product every day — not a hypothetical banking partner.',
        proof: 'First revenue: a monthly per-outlet subscription, paid in mobile money, with a capped free plan. Prices tested during the pilot.',
      },
      {
        icon: '∞',
        label: 'Compounding advantage',
        title: 'Every sale makes the product more useful.',
        body:
          'The more events are recorded, the more reliable the history, the more measurable the repeat visits, and the more interested the financial partners. Data is not resold: it is built with the consent of the person it concerns. Elsewhere in Africa, merchant credit based on payment data was followed by 36% (Moniepoint) to 42% (Kopo Kopo) transaction growth.',
        proof: 'Stream completeness is the moat — it cannot be bought, only accumulated.',
      },
      {
        icon: '◇',
        label: 'The discipline',
        title: 'Capital follows proof.',
        body:
          'Every phase has a numeric exit gate: consistent capture, retention, paid renewal, support economics. No geographic expansion before a single corridor is demonstrated.',
        proof: 'One validated corridor before opening a second UEMOA country.',
      },
    ],
    identity: {
      label: 'Platform horizon',
      title: 'A federated trust layer — hypothesis, not promise.',
      body:
        'The event stream and progressive verification could found a federated identity service for Côte d’Ivoire: consent orchestration, assurance-level normalization, audit services for licensed institutions. Djassa would not own national identity and would not copy any operator KYC database.',
      guard:
        'This direction requires a separate legal, governance and security programme with ARTCI, BCEAO, the operators and qualified local counsel. We present it as a strategic option downstream of the merchant product — never as a current capability.',
    },
  },
  model: {
    kicker: '05 / The business model',
    title: 'Merchant software first,',
    titleEm: 'financial infrastructure second.',
    lede:
      'The merchant subscription funds the product. Partner revenue only arrives after reliable usage, traceable consent, clean reconciliation and a confirmed regulatory perimeter.',
    streamsTitle: 'Revenue order',
    streams: [
      { step: '01', title: 'Merchant subscription', detail: 'Monthly per outlet, tiered, with a capped free plan. Primary MVP revenue.', status: 'now' },
      { step: '02', title: 'Featured deals and campaigns', detail: 'Sponsored slot in the customer app; messages passed through at cost.', status: 'now' },
      { step: '03', title: 'Multi-outlet contracts', detail: 'Merchant networks and associations, priced separately.', status: 'next' },
      { step: '04', title: 'Payment orchestration', detail: 'Secondary revenue, never more expensive for the merchant than their current Wave.', status: 'next' },
      { step: '05', title: 'Consented referrals', detail: 'Paid by a licensed partner: stock credit, savings, tontine.', status: 'later' },
      { step: '06', title: 'Institutional services', detail: 'Reporting and reconciliation for institutions.', status: 'later' },
    ],
    statusLabels: { now: 'MVP', next: 'After proof', later: 'After partnership' },
    warning:
      'Referral revenue is not the model’s first assumption. It depends on a partner agreement, regulatory review, user consent and measurable financial outcomes.',
    economicsTitle: 'What we measure per merchant',
    economics: [
      'Monthly recurring revenue',
      'Acquisition cost and onboarding time',
      'Active customers per outlet',
      'Return rate of identified customers',
      'Retention at 30, 60 and 90 days',
      'Notification cost per outlet',
      'Support cost per merchant',
      'Gross margin by plan',
    ],
    gateTitle: 'Unit-economics gate',
    gateLede: 'No geographic expansion before the pilot corridor demonstrates:',
    gates: [
      'Acquisition cost below twelve months of expected gross profit',
      'Three consecutive months of retention or renewal',
      'Support and messaging costs known per active outlet',
      'A repeat-purchase improvement the merchant understands',
      'A path to positive contribution margin without assuming future credit commissions',
    ],
  },
  metric: {
    kicker: '06 / The master metric',
    title: 'Signal before narrative.',
    lede:
      'One metric governs all the others: the share of a merchant’s real transactions actually recorded through Djassa. If that number is low, nothing downstream works — not the loyalty perception, not the indicator, not the lender conversation.',
    headline: '% of real sales recorded',
    headlineSub: 'The number we check before any roadmap decision.',
    comparison: {
      good: { value: '1', label: 'merchant recording 90% of sales for 60 days' },
      bad: { value: '10', label: 'merchants recording 10% of sales for one week' },
      verdict: 'The first is a result. The second is traction noise.',
    },
    targets: [
      { value: '60+', label: 'days of consistent capture', detail: 'Minimum window before drawing a conclusion' },
      { value: '30/60/90', label: 'day retention tracked', detail: 'Merchant retention, not sign-ups' },
      { value: '1', label: 'corridor to validate', detail: 'Before any geographic expansion' },
    ],
  },
  roadmap: {
    kicker: '07 / Execution',
    title: 'Trust',
    titleEm: 'before complexity.',
    lede:
      'A phase is not complete when the code ships, but when real users have validated it. Each phase carries its own exit condition.',
    phases: [
      {
        id: '0',
        name: 'Discovery and compliance',
        state: 'current',
        stateLabel: 'In progress',
        goal: 'Confirm that the problem, users, partners and legal perimeter are real.',
        items: [
          '5 to 10 merchant interviews',
          'A narrow pilot agreement',
          'One corridor, one segment, one acquisition channel',
          'Wave Business API access for automatic capture',
          'Identity/KYC boundary review with the mobile-money partner',
        ],
        exit: 'A pilot user and partner identified, with no unresolved blocker on the MVP data flow.',
      },
      {
        id: '1',
        name: 'Merchant loyalty MVP',
        state: 'next',
        stateLabel: 'Next',
        goal: 'Record useful activity and create repeat usage.',
        items: [
          'Automatic capture of existing Wave payments',
          'Merchant and customer identity by phone number (Tier 0)',
          'Points, rewards and a weekly “customers who came back” report',
          'Offline cash sales, synced without duplicates',
          'Consent-controlled exports',
        ],
        exit: 'Consistent capture measured, merchant retention tracked, paid conversion observed.',
      },
      {
        id: '2',
        name: 'Operations and network',
        state: 'planned',
        stateLabel: 'Planned',
        goal: 'Make the merchant product repeatable in the first corridor before adding financial complexity.',
        items: [
          'Deals, campaigns and win-back of lapsed customers',
          'Association and referral onboarding',
          'Progressive verification, where the regulator approves it',
          'Onboarding and support playbook',
        ],
        exit: 'Merchants pay or renew; acquisition and support economics are understood.',
      },
      {
        id: '3',
        name: 'Digital tontine',
        state: 'planned',
        stateLabel: 'Planned',
        goal: 'Help existing community groups track contributions and schedules.',
        items: [
          'Closed groups and membership controls',
          'Contribution schedule and reminders',
          'Idempotent webhook processing',
          'Reconciliation and dispute workflow',
        ],
        exit: 'Does not begin before willingness to pay is validated on the merchant product.',
      },
      {
        id: '4',
        name: 'Explainable reliability indicator',
        state: 'planned',
        stateLabel: 'Planned',
        goal: 'Provide a transparent signal based on regular activity.',
        items: [
          'Documented scoring inputs',
          'Explanation visible to the person affected',
          'Correction and appeal workflow',
          'Bias and outcome monitoring',
        ],
        exit: 'No third-party sharing without consent and legal review.',
      },
      {
        id: '5',
        name: 'Partner financial services',
        state: 'planned',
        stateLabel: 'Planned',
        goal: 'Connect eligible users to licensed savings or credit partners.',
        items: [
          'Written partner agreement',
          'Consent and data-sharing contract',
          'Direct fund flow to the licensed provider',
          'Referral and outcome tracking',
        ],
        exit: 'Djassa remains a technology and distribution partner unless its regulatory status changes.',
      },
    ],
    verification: {
      title: 'Progressive verification',
      lede:
        'Verification level follows the risk of the feature, never the reverse. Nobody goes through a full identity check to collect loyalty points.',
      columns: ['Tier', 'Use case', 'Minimum verification', 'Data boundary'],
      tiers: [
        {
          tier: 'Tier 0',
          use: 'Loyalty and rewards',
          check: 'Phone number or operator-linked identifier',
          boundary: 'No financial movement, no credit export',
        },
        {
          tier: 'Tier 1',
          use: 'Tontine or partner savings',
          check: 'Phone verification + lightweight liveness check where legally permitted',
          boundary: 'Biometric evidence verifies; it does not become an identity database',
        },
        {
          tier: 'Tier 2',
          use: 'History export to a licensed lender',
          check: 'Tier 1 + national-ID capture and partner-approved cross-check',
          boundary: 'Only explicitly consented fields, for the stated purpose',
        },
      ],
      note:
        'Anti-fraud goal: prevent one person from creating many accounts to farm rewards or manufacture a history — without surveilling low-risk usage.',
    },
  },
  guardrails: {
    kicker: '08 / Our red lines',
    title: 'Useful before ambitious.',
    lede:
      'These constraints are not legal boilerplate at the bottom of a page. They determine what we build and what we refuse to sell.',
    never: [
      { title: 'No loan promise', body: 'We guarantee no approval, no rate and no savings return.' },
      { title: 'No deposits held by Djassa', body: 'Custody, lending and settlement go through licensed institutions.' },
      { title: 'No data shared without consent', body: 'No resale of personal data; stated purpose, limited fields, revocable.' },
      { title: 'No opaque score', body: 'Anyone affected by an indicator can see its inputs and request correction.' },
      { title: 'No pan-African launch', body: 'One country, one corridor, one segment at a time — with local partner, support and compliance plan.' },
      { title: 'No reusable biometric database', body: 'A one-time verification result is enough; we prefer a provider-issued attestation.' },
    ],
  },
  status: {
    kicker: '09 / Where we stand',
    title: 'What is built, and what is not.',
    lede:
      'We prefer an accurate reading of progress to a flattering demo. Here is the real state at the time of publication.',
    built: {
      label: 'Built',
      items: [
        'Merchant app: offline sales synced without duplicates, tested on a real phone',
        'Customer app: maquis, on-duty pharmacies, deals and points (prototype)',
        'QR payment and loyalty in sandbox mode, no real money',
        'One sale stream, labelled confirmed payment or declared cash',
        'CI/CD pipeline with image supply-chain checks',
      ],
    },
    pending: {
      label: 'To harden before any real financial use',
      items: [
        'Phone-number login (Tier 0) instead of the demo account',
        'Automatic Wave payment capture, and points on cash sales',
        'Live payment provider and reconciliation',
        'Per-resource authorization, production secrets, independent security review',
        'Written partner agreements and regulatory review',
      ],
    },
    honesty:
      'The current implementation is a prototype. We document it that way internally and externally: nothing on this page describes a production capability.',
  },
  closing: {
    eyebrow: 'The next step is human',
    title: 'Let’s build an economy that recognises itself.',
    body:
      'We are looking for three kinds of counterpart: merchants in Abidjan willing to test, a microfinance institution interested in a narrow consented pilot, and investors who accept that expansion is earned through proof.',
    asks: [
      { who: 'Merchants', what: 'A 5-to-10 outlet pilot in Abidjan, on one dense corridor.' },
      { who: 'Institutions and partners', what: 'A review of the data flow, capture of existing payments and the consented referral model.' },
      { who: 'Investors', what: 'The full brief: unit economics, per-phase exit gates, regulatory perimeter.' },
    ],
    cta: 'Write to the team',
    ctaSecondary: 'Request the brief',
  },
  footer: {
    rights: '© 2026 Djassa — Abidjan, Côte d’Ivoire',
    note: 'A product under construction, built with care.',
    brandNote:
      'Djassa is a single product; the name “Dkassa”, used in early notes, is no longer used. The final brand name remains to be legally confirmed.',
    disclaimer:
      'Information document. Not an offer of financial services and not an investment solicitation. Market figures are cited with their source and must be re-verified before any contractual use.',
    sourcesLabel: 'Cited sources',
    sources: 'World Bank (Global Findex 2025) · GSMA · BCEAO · APSFD-CI · APIF-CI · SGPME · national indicators 2023 · Launch Base Africa · CGAP · TechCabal',
  },
}
