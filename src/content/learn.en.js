/**
 * Learning-area copy, English. Mirrors learn.fr.js key for key — the parity
 * check in content/index.js walks this tree too, so a missing key fails loudly
 * in development rather than rendering French under an "EN" toggle.
 *
 * Same sourcing rule as the French file: the screen annotations come from the
 * two Flutter apps' own code and comments, the control table from
 * `hossouko-BE/Architecture/SECURITY.md` (including its honest per-control
 * status), and the revenue lines from `hossouko-BE/docs/business/BUSINESS-MODEL.md`
 * (value equation) and `docs/business/MARKET.md` § 9 (merchant fees).
 */
export const learnEn = {
  kicker: '02 / Walkthrough',
  title: 'Two apps.',
  titleEm: 'One event.',
  lede:
    'The merchant records a sale. The customer pays and earns points. Both gestures write the same event stream, and so does a wallet payment the merchant already receives (Wave first), captured automatically. That stream is the proof a lender needs.',
  howTo:
    'Pick an app, then move screen by screen. Each screen is annotated on three axes: the strength of the concept it carries, the security control it applies, and the revenue line it feeds.',
  fidelity:
    'Screens reconstructed from the two Flutter apps’ code (integration branch), in French as in the product — including the missing accents in the merchant app, a documented choice for cheap screens. Amounts, business names and numbers are examples.',

  apps: [
    {
      id: 'retailer',
      label: 'Merchant',
      file: 'hossouko-App-retailer',
      tag: 'Offline first',
      pitch:
        'The same look as the customer app, so the two read as one product, but built for a market stall in full sun on an entry-level phone: 52dp targets, a 15sp text floor, sync state in words plus an icon, and nothing that waits on the network.',
    },
    {
      id: 'user',
      label: 'Customer',
      file: 'hossouko-App-user',
      tag: 'Payment and loyalty',
      pitch:
        'Built for neighbourhood life: find your maquis or the on-duty pharmacy, pay at the counter by mobile money, and watch your points build up at each merchant.',
    },
  ],

  axes: {
    strength: 'Concept strength',
    security: 'Security',
    roi: 'Revenue',
  },
  screenLabel: 'Screen',
  ofLabel: 'of',
  prev: 'Previous screen',
  next: 'Next screen',
  mockLabel: 'Screen reconstruction',

  screens: {
    retailer: [
      {
        id: 'signin',
        name: 'Sign in',
        summary:
          'Username and password: the only mechanism the backend exposes today. The concept calls instead for a Tier 0 identity anchored to the mobile-money number.',
        strength:
          'No needless friction at the door. Nobody goes through a full identity check to record a sale: verification level follows the risk of the feature, never the reverse.',
        security:
          'The signed token decides everything downstream, and the user’s identity is never read from a request body. Autofill and suggestions are off, because a market phone gets handed around.',
        roi:
          'No direct line, deliberately. What this screen protects is onboarding time — one of the unit economics the pilot has to measure.',
      },
      {
        id: 'home',
        name: 'Home',
        summary:
          'Three answers, in this order: how much have I taken today, is anything still stuck on this phone, and where do I record the next sale.',
        strength:
          'Today’s figure is deliberately the largest thing on screen: it is what the merchant opens the app to see. It is also the screen that sells the subscription — you do not pitch software, you show the merchant their own money.',
        security:
          'The queue is stated in words rather than a spinner: “2 waiting to send”, “Sent”, “Rejected”. A merchant who cannot tell what left the phone will not trust the app with their books. State is carried by a word, never by colour alone.',
        roi:
          'Line 1 — merchant subscription, the recommended first line. Conversion happens at day 30, once this screen has accumulated enough activity to be worth a price, not at day 0. Plans and payments are kept in an append-only billing ledger; for the pilot, the mobile-money transfer is recorded by hand.',
      },
      {
        id: 'record',
        name: 'Record a sale',
        summary:
          'An amount, a category, an optional customer. Nothing waits on the network: confirmation lands the moment the row is on disk, and syncing happens behind it. With a customer number, checked on the phone while the customer is still there, the customer earns the venue’s points on a cash sale; the sale list then shows “+25 pts”, and the Points client screen hands over their reward. No customer app needed.',
        strength:
          'This is the single habit everything else is built on. Loyalty, revenue history, tontine, reliability indicator and credit export are five reads of the same event, not five sequential projects.',
        security:
          'The phone does not name the business: the backend derives the outlet from the signed-in account, which removed the client’s ability to say which business a sale belongs to. The typed amount is echoed back formatted before saving, as the merchant’s guard against a mistyped digit.',
        roi:
          'Feeds the master metric: the share of real sales actually recorded. Every revenue line depends on it and none survives if that number is low.',
      },
      {
        id: 'deals',
        name: 'My deals',
        summary:
          'The merchant’s offers exactly as customers will see them, and the way to publish one. Five live at most.',
        strength:
          'An offer links the two apps with no media budget: it pushes the merchant toward the customer app, and the customer app toward the counter. Each side makes the other more useful.',
        security:
          'Paid featuring is never self-granted: only an admin can sell a placement, and it ends with its time window. A merchant cannot sponsor themselves, and sponsored placement is labelled as such on the customer side.',
        roi:
          'Line 2 — featured deal placement. It is the fastest cash: a local merchant buys advertising far more readily than software, and it is a one-off sale rather than a monthly commitment.',
      },
      {
        id: 'newdeal',
        name: 'New deal',
        summary:
          'Three questions — what, how much off, how long — and an exact preview of what the customer will see before it goes live.',
        strength:
          'A duration to pick rather than a date picker: a merchant thinks “for a week”, not “until the 14th”. The product speaks the language of the counter, which is the condition for the habit holding.',
        security:
          'Title, percentage and price are validated on the phone and again on the server. A promo price above the normal price is refused before publication, so no incoherent offer reaches customers.',
        roi:
          'Each placement is now recorded — deal, window, price, paid status, who sold it — and expires on its own. Slots are capped per commune and category, because scarcity is what makes them worth buying.',
      },
    ],

    user: [
      {
        id: 'home',
        name: 'Home',
        summary:
          'The daily hub: points, the four things people open the app for, and a live preview of what is happening nearby — who is on duty, where to eat, what was paid.',
        strength:
          'The on-duty pharmacy is the only feature with daily urgent pull, no official API and no competitor holding the data. It brings the customer in; payment and points keep them.',
        security:
          'Each block loads independently: one slow call neither blanks the page nor invents content. The screen shows only the signed-in account’s points and payments.',
        roi:
          'Acquisition. On-duty is also the only asset on this screen that could plausibly be sponsored — and its real cost is entering the official weekly rotation by hand, to be budgeted honestly rather than left unsaid.',
      },
      {
        id: 'scan',
        name: 'Scan',
        summary:
          'Step 1 of paying: read the QR code the merchant displays and have the server check it. Typing the code stays possible if the camera is denied.',
        strength:
          'Paying takes the centre button of the bar, the way mobile-money apps do: it is the gesture that makes everything else exist, since it earns the customer’s points and builds the merchant’s history.',
        security:
          'Nothing read from the QR is displayed or trusted beyond the code itself. The code goes to the server, and the next screen shows the merchant the server names. A forged sticker therefore cannot display a trusted name.',
        roi:
          'No fee for the customer, ever. This Hossouko route is the fallback for merchants whose own wallet is not captured automatically: its revenue share is a minor line (4) and must never cost the merchant more than their own wallet QR does today.',
      },
      {
        id: 'pay',
        name: 'Confirm payment',
        summary:
          'Who is taking the money, how much, from which wallet. Two confirmations — this screen, then a summary sheet — before a single franc moves.',
        strength:
          'Points shown before paying are the incentive that buys the behaviour change: paying by phone at the counter instead of handing over cash. That is loyalty’s real job in this design, and it should be measured as such.',
        security:
          'Money moves from the customer’s wallet to the merchant’s through a licensed provider: Hossouko never holds funds, and the screen says so. If the request times out, “Retry” resends the same idempotency key, the server answers with the original payment, and the form locks to stop a new amount going out under the old key.',
        roi:
          'Lines 4 and 5. Reconciling the provider’s settlement reports against the internal ledger is not implemented yet: it is an explicit prerequisite before any real financial use.',
      },
      {
        id: 'receipt',
        name: 'Receipt',
        summary:
          'The outcome in words first — succeeded, declined or pending — with the amount, the reference, the wallet used and the points earned.',
        strength:
          'Proof is immediate and readable on both sides of the counter: the customer sees points, the merchant sees the sale. One event, two benefits, and the shortest demonstration of the concept there is.',
        security:
          'Payment states are explicit — created, pending, succeeded, failed, cancelled, disputed — and only an allowed transition is accepted. A valid signature is never enough to credit money: timestamp inside the window, payload shape, amount, currency and database-backed idempotency are checked first.',
        roi:
          'Every successful receipt is a provider-confirmed event, exactly like a wallet payment captured from the merchant’s own QR. The share of turnover confirmed that way is what a credit analyst wants to see.',
      },
      {
        id: 'loyalty',
        name: 'My loyalty',
        summary:
          'Points per business, progress toward the next reward, and the history of what was earned or spent, and where.',
        strength:
          'Points are counted per merchant: a maquis does not fund the points earned at the pharmacy next door. At pilot scale a quartier-level shared pool is the intended correction, with a settlement table between merchants.',
        security:
          'Points do not convert to cash, and that is written on the screen rather than buried in terms. The customer sees their own history and nothing else.',
        roi:
          'Retention — and a liability to watch as much as an asset. The points commitment has to be capped, or the promise ends up costing more than the sale it produced.',
      },
    ],
  },

  chain: {
    kicker: 'End to end',
    title: 'The same event,',
    titleEm: 'read six times.',
    lede:
      'What the ten screens above do together. Every step has an owner, and Hossouko is never the one holding the money.',
    steps: [
      { owner: 'Customer app', text: 'The customer scans the QR code displayed at the counter.' },
      { owner: 'Hossouko backend', text: 'The server checks the code and returns the merchant it names, with the amount requested.' },
      { owner: 'Licensed provider', text: 'Money moves from the customer’s wallet to the merchant’s. Hossouko does not sit in the flow of funds.' },
      { owner: 'Hossouko backend', text: 'The provider callback is signed, timestamped, idempotent, and recorded before it is acknowledged.' },
      { owner: 'Both apps', text: 'One event, two reads: the customer’s points on one side, the merchant’s turnover on the other.' },
      { owner: 'Phase 5 — licensed partner', text: 'On explicit, revocable consent, a revenue attestation goes to a licensed institution.' },
    ],
    note:
      'The preferred source needs no app at all: a payment to the merchant’s own wallet QR (Wave first) is captured automatically and earns the customer points. Cash sales are declared from the phone. Every source lives in the same stream with an explicit label — provider-confirmed, or merchant-declared. A partner auditing the export will find the distinction; filing it in a second table would lose it.',
  },

  security: {
    kicker: 'What security protects',
    title: 'The controls,',
    titleEm: 'and where we actually are.',
    lede:
      'The screens above apply real controls. Others are documented as required and are not done. We publish both, because a regulated partner will check anyway — and because the only credibility available at this stage is accuracy.',
    columns: ['Control', 'What it prevents', 'State'],
    rows: [
      {
        control: 'Provider callback signature and replay protection',
        prevents: 'A forged, altered or replayed message crediting a payment.',
        state: 'Prototype',
        tone: 'proto',
      },
      {
        control: 'Database-backed idempotency under concurrency',
        prevents: 'A customer being charged twice because they retried after a timeout.',
        state: 'Prototype',
        tone: 'proto',
      },
      {
        control: 'Token-derived resource ownership',
        prevents: 'One account reading, changing or exporting another’s data.',
        state: 'Partial',
        tone: 'partial',
      },
      {
        control: 'Explicit roles and permissions',
        prevents: 'A merchant granting themselves paid featuring, or reaching customer data that is none of their business.',
        state: 'Partial',
        tone: 'partial',
      },
      {
        control: 'Settlement reconciliation',
        prevents: 'A gap between the provider’s report and the internal ledger going unnoticed.',
        state: 'Not done',
        tone: 'todo',
      },
      {
        control: 'Short-lived, revocable sessions',
        prevents: 'A stolen token staying valid until it expires on its own.',
        state: 'Not done',
        tone: 'todo',
      },
      {
        control: 'Progressive verification, Tier 0 / 1 / 2',
        prevents: 'A heavy identity check blocking risk-free usage — and a credit export happening without one.',
        state: 'Design',
        tone: 'design',
      },
      {
        control: 'Secrets outside the code, with rotation',
        prevents: 'A signing key leaking through an image, a repository or a build log.',
        state: 'Manifests',
        tone: 'partial',
      },
    ],
    note:
      'The backend is a prototype and we document it as one, internally and externally. It must not process real financial traffic before identity, per-resource authorization, reconciliation and regulatory review are in place.',
    linkLabel: 'See also the real build status',
  },

  roi: {
    kicker: 'What the screens earn',
    title: 'Six lines,',
    titleEm: 'ordered by how fast cash arrives.',
    lede:
      'Ranked by how directly they follow merchant value, and by how few external dependencies they need. None takes a cut of each sale above what the merchant pays today, none assumes a credit approval, and the partner referral fee — the largest eventually — has no place in a year-one forecast.',
    illustrativeLabel: 'Illustrative',
    mathTitle: 'One outlet: why we build on the merchant’s wallet instead of replacing it',
    math: [
      { value: '3,000,000 F', label: 'collected per month per outlet', detail: '40 sales/day × 2,500 F, typical maquis' },
      { value: '≈ 70,000 F', label: 'extra cost per month if payments were rerouted', detail: '60% paid by mobile money: ~3% + 50 F per sale via an aggregator, versus ~1% on their own Wave' },
      { value: '5,000 – 10,000 F', label: 'subscription hypothesis', detail: 'Small against the gross profit returning customers bring in' },
    ],
    mathVerdict:
      'Taking a share of payments would mean moving the merchant onto a more expensive rail, which costs them more than the subscription and more than loyalty brings in. So Hossouko sits on top of the wallet QR the merchant already uses — Wave first, other operators and the interoperable PI-SPI QR next — and charges for what it adds: customers who come back, and proof of the business.',
    mathSource: 'Illustrative, non-contractual figures. Fees: Kolonell 2026 (Wave ~1%, CinetPay ~3% + 50 F). To be re-verified with pilot merchants.',
    linesTitle: 'Revenue line order',
    lines: [
      {
        step: '01',
        title: 'Merchant subscription',
        body: 'Monthly per outlet, with a capped free plan. Converted at day 30 on the screen that shows the merchant their takings and the customers who came back. Collected by recurring mobile money.',
        depends: 'Automatic wallet capture and real activity',
        state: 'Recommended first',
        tone: 'first',
      },
      {
        step: '02',
        title: 'Featured deal placement',
        body: 'A paid slot already in the code, settable only by an admin, and already rendered as sponsored on the customer side.',
        depends: 'Placement record to build',
        state: 'Nearly ready',
        tone: 'near',
      },
      {
        step: '03',
        title: 'Reactivation message packs',
        body: 'Win back lapsed customers. Message cost passed through transparently, plus margin, on the channel already chosen for notifications.',
        depends: 'Campaign feature, phase 2',
        state: 'Later',
        tone: 'later',
      },
      {
        step: '04',
        title: 'Payment revenue share',
        body: 'A minor line, on Hossouko-route payments only, where the licensed provider allows it. Never priced above what the merchant pays on their own wallet today.',
        depends: 'A rate at or below the merchant’s current wallet',
        state: 'Minor',
        tone: 'later',
      },
      {
        step: '05',
        title: 'Tontine orchestration fee',
        body: 'A transparent percentage per contribution, on a flow of funds operated by a licensed provider.',
        depends: 'Real provider and legal sign-off',
        state: 'Later',
        tone: 'later',
      },
      {
        step: '06',
        title: 'Partner referral fee',
        body: 'Paid by a licensed lender or savings provider for a qualified, consented referral. The largest line eventually, and the most dependent.',
        depends: 'Signed agreement, regulatory review, per-resource authorization',
        state: 'Not year 1',
        tone: 'blocked',
      },
    ],
    refuseTitle: 'What we refuse to monetize',
    refuse: [
      { title: 'Making payment cost more', body: 'No fee for the customer, and never more for the merchant than their own wallet. Otherwise cash wins instantly, and the event everything rests on dies.' },
      { title: 'Converting points to cash', body: 'Forbidden until a licensed partner exists, and outside our perimeter even then.' },
      { title: 'Selling identifiable transaction data', body: 'Data is built with the consent of the person it concerns; it is not resold.' },
      { title: 'Becoming the lender', body: 'No deposits held, no credit granted, no promise of approval. The licensed partner keeps that role.' },
    ],
    moatTitle: 'The real moat',
    moat:
      'The share of a merchant’s turnover confirmed by a payment provider, whether captured from their own wallet or paid through Hossouko, is a stronger moat than the loyalty programme. It cannot be bought: it accumulates one event at a time without asking the merchant to change how they get paid, and loyalty gives their customers a reason to pay digitally.',
    gateNote:
      'None of this justifies expansion: no second corridor before the first has demonstrated its unit-economics gates.',
    gateLink: 'See the model’s gates',
  },
}
