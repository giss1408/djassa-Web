/**
 * English copy. Mirrors fr.js key for key — a missing key is a rendering bug,
 * not a silent fallback to French. See content/index.js for the parity check.
 */
import { learnEn } from './learn.en.js'

export const en = {
  locale: 'en',
  meta: {
    title: 'Fidelia — Proof infrastructure for local commerce',
    description:
      'Fidelia turns one habit — recording a verified sale — into usable business history for independent merchants in Abidjan, and into a consented bridge to licensed financial institutions.',
  },
  nav: {
    skip: 'Skip to main content',
    home: 'Fidelia — home',
    links: [
      { href: '#concept', label: 'The concept' },
      { href: '#demo', label: 'The demo' },
      { href: '#marche', label: 'The market' },
      { href: '#these', label: 'The thesis' },
      { href: '#modele', label: 'The model' },
      { href: '#execution', label: 'Execution' },
    ],
    cta: 'Investor brief',
    // The brief, behind a password on the API (src/apiBase.js), in the reader's language.
    briefHref: '/brief/?lang=en',
    langLabel: 'Switch to French',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  hero: {
    eyebrow: 'Financial inclusion — built from local commerce',
    title: 'Progress starts at the corner shop.',
    intro:
      'In Côte d’Ivoire, 25 million active mobile-money accounts coexist with a 31% banked rate. Access is solved; proof of activity is not. Fidelia builds that proof from what already happens at the counter, a customer paying from their mobile wallet and a merchant getting paid, and turns it into a reason for the customer to come back.',
    primary: 'Read the investment thesis',
    secondary: 'Understand the concept',
    stage: {
      label: 'Current stage',
      value: 'Pre-pilot',
      detail: 'Platform and two prototype apps (merchant, customer). Free Abidjan pilot: 5 to 10 maquis and grocery shops in one commune, not yet launched.',
    },
    card: {
      tag: 'FIDELIA / TRANSACTION',
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
    'On the merchant’s own wallet',
    'Explicit consent',
    'No deposits held',
  ],
  learn: learnEn,
  word: {
    kicker: 'The name',
    phonetic: '“La fidélité, ça compte”',
    pos: 'loyalty counts',
    origin: 'Our promise',
    senses: [
      'For customers: every purchase at the shops they already go to earns points, and points become rewards.',
      'For merchants: every recorded sale builds a business history they own, proof of real activity they can choose to show a licensed lender.',
    ],
    why: 'Fidelia comes from “fidélité”, loyalty. It counts on both sides of the counter: customers are rewarded for coming back, merchants for the activity they already have.',
  },
  concept: {
    kicker: '01 / The concept',
    title: 'One habit.',
    titleEm: 'Five uses.',
    lede:
      'Most merchant tools fail because every new feature asks for a new habit. Fidelia asks for one: record the sale. Everything else is a different read of the same event.',
    body:
      'When a customer pays with the wallet QR the merchant already uses (Wave first, other operators next), the sale is captured automatically and the customer earns points: zero new habit, zero extra fee. Cash sales are recorded in one tap, even offline. From the first week, the merchant gets a cash book: the day’s total, mobile money and cash together, without reconciling wallets by hand. Loyalty, revenue history, tontine tracking, the reliability indicator and the credit export are not five sequential projects: they are five views on a single event stream, becoming visible as it accumulates.',
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
        title: 'Nobody brings the customer back',
        body:
          'Wallets collect payments, but none brings the customer back. A maquis or grocery shop attracts customers today by word of mouth, by being nearby and through social networks; loyalty lives on paper cards and memory. No Ivorian player dominates this segment.',
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
        players: 'Wave (~1% merchant fee, ~1M QR merchants), Orange Money, MTN MoMo, CinetPay; BCEAO PI-SPI interoperable QR',
        stance: 'Partner',
        verdict: 'partner',
        why: 'We plug into the QR the merchant already uses, whatever the operator. We do not sell them a more expensive payment.',
      },
      {
        segment: 'Customer loyalty and merchant activity proof',
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
      'Fidelia does not ask a market to believe in a super-app. It first solves a frequent, monetizable merchant problem, then reuses the same infrastructure to make financial inclusion progressive and measurable.',
    cards: [
      {
        icon: '↗',
        label: 'The wedge',
        title: 'The merchant pays for visible value.',
        body:
          'From day one, a cash book that brings their takings together. Then customers who come back, and new customers brought by the customer app: that is what the merchant sees every week, and what they will pay for, before any financial commission. The first customer is the one who uses the product every day — not a hypothetical banking partner.',
        proof: 'First revenue: a monthly per-outlet subscription, paid in mobile money, with a capped free plan. The pilot is free for every merchant; the paid plan is offered when it ends.',
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
          'Every phase has a numeric exit gate: consistent capture, retention, acceptance of the paid plan, support economics. No geographic expansion before a first commune is demonstrated.',
        proof: 'One validated commune before opening the second.',
      },
    ],
    pilot: {
      label: 'The pilot',
      title: 'Two questions, not five uses.',
      body:
        'Two founders and a six-month pilot budget cannot validate five uses at once. The pilot answers two questions: do maquis and grocery owners keep using Fidelia, and does the customer app bring them customers? It brings together 5 to 10 merchants in one Abidjan commune, free of charge; the paid plan is offered to them at the end, and the share who accept it is the pilot’s result.',
      guard:
        'Frozen during the pilot: payment through Fidelia in the customer app, every paid offer, pharmacies as paying merchants (they stay in the app as on-duty information), layaway, tontine and the reliability indicator. The code stays; none of it is offered before its own gate.',
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
      { step: '01', title: 'Merchant subscription', detail: 'Monthly per outlet, tiered, paid in mobile money, with a capped free plan. Primary revenue. Free during the pilot; offered to every merchant when it ends.', status: 'now' },
      { step: '02', title: 'Sponsored deals and campaigns', detail: 'Basic deals stay free. A one-off, time-limited placement labelled “Sponsored” to promote a merchant product, service or special offer; booked with the team; pricing to be tested. No paid offers during the pilot.', status: 'now' },
      { step: '03', title: 'Multi-outlet contracts', detail: 'Merchant networks and associations, priced separately.', status: 'next' },
      { step: '04', title: 'Payment orchestration', detail: 'Secondary revenue, never more expensive for the merchant than their current wallet.', status: 'next' },
      { step: '05', title: 'Consented referrals', detail: 'Paid by a licensed partner: stock credit, savings, tontine.', status: 'later' },
      { step: '06', title: 'Institutional services', detail: 'Reporting and reconciliation for institutions.', status: 'later' },
    ],
    statusLabels: { now: 'After the pilot', next: 'After proof', later: 'After partnership' },
    warning:
      'Referral revenue is not the model’s first assumption. It depends on a partner agreement, regulatory review, user consent and measurable financial outcomes.',
    economicsTitle: 'What we measure per merchant',
    economics: [
      'Monthly recurring revenue',
      'Acquisition cost and onboarding time',
      'New customers brought by the customer app',
      'Return rate of identified customers',
      'Retention at 30, 60 and 90 days',
      'Notification cost per outlet',
      'Support cost per merchant',
      'Gross margin by plan',
    ],
    gateTitle: 'Unit-economics gate',
    gateLede: 'No second commune before the pilot commune demonstrates:',
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
      'One metric governs all the others: the share of a merchant’s real transactions actually recorded through Fidelia. If that number is low, nothing downstream works — not the loyalty perception, not the indicator, not the lender conversation.',
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
      { value: '1', label: 'commune to validate', detail: 'Before any geographic expansion' },
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
          '5 to 10 interviews with maquis and grocery owners in one Abidjan commune',
          'The daily cash book tested as the first reason to sign up',
          'Wave API access for automatic capture; other operators’ capabilities, PI-SPI status',
          'One or two MFIs: would they pay for a consented tool to follow the sales of merchants they already lend to?',
          'Regulatory and ARTCI review, one payment partner, a narrow pilot agreement',
        ],
        exit: 'A pilot merchant group and a payment partner identified, with no unresolved blocker on the MVP data or funds flow.',
      },
      {
        id: '1',
        name: 'Free pilot: record, reward, bring customers',
        state: 'next',
        stateLabel: 'Next',
        goal: 'Record useful activity and create repeat usage, with 5 to 10 merchants.',
        items: [
          'Daily cash book; offline cash sales, synced without duplicates',
          'Automatic capture of existing Wave payments; sign-in by phone number and SMS code',
          'Points, rewards, weekly “customers who came back” and “new customers brought by Fidelia” reports',
          'Focused customer app: map of pilot merchants, free offers with notifications, on-duty pharmacies',
          'A signed, consented revenue statement for MFI demos',
        ],
        exit: '≥ 70% of real sales recorded at day 30, rising toward 85% at day 60; the app brings new customers; ≥ 40% of merchants accept the paid plan when the pilot ends.',
      },
      {
        id: '2',
        name: 'Operations and network',
        state: 'planned',
        stateLabel: 'Planned',
        goal: 'Make the merchant product repeatable in the first corridor before adding financial complexity.',
        items: [
          'First paid plans, paid featured placement for offers, win-back of lapsed customers by notification',
          'Payment through Fidelia in the customer app',
          'Association and referral onboarding, multi-outlet accounts',
          'Second operator (MTN or Orange); PI-SPI interoperable QR via a licensed partner',
          'Progressive verification, where the partner and the regulator approve it',
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
        exit: 'Fidelia remains a technology and distribution partner unless its regulatory status changes.',
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
      { title: 'No deposits held by Fidelia', body: 'Custody, lending and settlement go through licensed institutions.' },
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
        'Merchant app: offline sales synced without duplicates, tested on a real phone; the day’s total; “Client venu” under each offer',
        'Sign-in by phone number and SMS code (Tier 0), in both apps',
        'Customer app: maquis, on-duty pharmacies, deals with alerts, points (prototype)',
        'Capture of the merchant’s Wave payments and points on cash sales by phone number, in test; one sale stream, labelled confirmed payment or declared cash',
        'CI/CD pipeline with image supply-chain checks',
      ],
    },
    pending: {
      label: 'To harden before any real financial use',
      items: [
        'Wave capture with a real merchant (Wave API access to confirm)',
        'Real SMS and notification sending (providers to switch on)',
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
      'We are looking for three kinds of counterpart: maquis and grocery owners in Abidjan willing to test for free, a microfinance institution interested in a narrow consented pilot, and investors who accept that expansion is earned through proof.',
    asks: [
      { who: 'Merchants', what: 'A free pilot with 5 to 10 maquis and grocery shops in one Abidjan commune.' },
      { who: 'Institutions and partners', what: 'A review of the data flow and of the capture of existing payments; for an MFI, a consented tool to follow the sales of the merchants it finances.' },
      { who: 'Investors', what: 'The full brief: pilot round, unit economics, per-phase exit gates, regulatory perimeter.' },
    ],
    cta: 'Write to the team',
    ctaSecondary: 'Read the investor brief',
  },
  footer: {
    rights: '© 2026 Fidelia — Abidjan, Côte d’Ivoire',
    note: 'A product under construction, built with care.',
    brandNote:
      'Fidelia is a single product; the name “Dkassa”, used in early notes, is no longer used. The final brand name remains to be legally confirmed.',
    disclaimer:
      'Information document. Not an offer of financial services and not an investment solicitation. Market figures are cited with their source and must be re-verified before any contractual use.',
    sourcesLabel: 'Cited sources',
    sources: 'World Bank (Global Findex 2025) · GSMA · BCEAO · APSFD-CI · APIF-CI · SGPME · national indicators 2023 · Launch Base Africa · CGAP · TechCabal',
  },
}
