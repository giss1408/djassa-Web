/**
 * Merchant-app screen reconstructions (`fidelia-App-retailer/lib/features/`).
 *
 * The app now shares the customer app's visual language (tokens, serif
 * wordmark, gradient headers, soft cards — `lib/ui/theme.dart`), so these mocks
 * reuse the same palette. What stays merchant-specific, and is copied here:
 *
 * * **French, unaccented.** `lib/l10n/strings.dart` still drops every accent on
 *   purpose. Copying the strings faithfully means copying that too — "Dernieres
 *   ventes", not "Dernières ventes".
 * * **Words plus an icon for state, never colour alone.** `_SaleRow` pairs every
 *   sync state with a word, because a cheap panel in sunlight washes hues out.
 * * **Big targets.** 52dp minimum touch targets and a 15sp text floor.
 *
 * Icons are drawn with text glyphs: the site bundles no Material icon font, and
 * the frame is decorative (`aria-hidden`). Amounts are examples; `formatMoney`
 * in `lib/ui/money_text.dart` is the format being imitated — non-breaking space
 * groups, no decimals, a bare "F".
 */
import { PhoneFrame, RetailerBar } from './PhoneFrame.jsx'
import { Mark } from '../Primitives.jsx'

const NBSP = ' '

export function RetailerSignIn() {
  return (
    <PhoneFrame app="retailer">
      <div className="r-screen r-screen-flush">
        <div className="r-hero">
          <span className="r-badge">
            <Mark />
          </span>
          <span className="r-wordmark">Fidelia</span>
          <span className="r-sub">Espace marchand</span>
        </div>
        <div className="r-body">
          <div className="r-field">
            <span className="r-ico">◯</span>
            <span>
              <span className="r-field-label">Identifiant</span>
              <span className="r-field-value">awa.kone</span>
            </span>
          </div>
          <div className="r-field">
            <span className="r-ico">▢</span>
            <span>
              <span className="r-field-label">Mot de passe</span>
              <span className="r-field-value">••••••••</span>
            </span>
          </div>
          <div className="r-button">Se connecter</div>
          <span className="r-link">Que veut dire fidelia ?</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function RetailerHome() {
  const sales = [
    { amount: `2${NBSP}500${NBSP}F`, time: '12:31', state: 'synced', points: 25 },
    { amount: `1${NBSP}500${NBSP}F`, time: '12:18', state: 'pending' },
    { amount: `6${NBSP}000${NBSP}F`, time: '11:52', state: 'synced' },
  ]
  const states = {
    synced: { label: 'Envoyee', icon: '✓' },
    pending: { label: 'Pas encore envoyee', icon: '◷' },
  }
  return (
    <PhoneFrame app="retailer">
      <div className="r-screen r-screen-flush">
        <div className="r-header">
          <span>
            <span className="r-greeting">BONJOUR</span>
            <span className="r-name">Maquis Chez Awa</span>
            <span className="r-tagline">Espace marchand</span>
          </span>
          <span className="r-avatar">M</span>
        </div>

        {/* The day's total rides over the header edge and stays the largest
            thing on screen: it is what the merchant opens the app to see. */}
        <div className="r-today">
          <span className="r-today-label">AUJOURD'HUI</span>
          <strong className="r-today-value">
            48{NBSP}300{NBSP}F
          </strong>
          <span className="r-today-count">19 ventes du jour</span>
        </div>

        <div className="r-body">
          {/* The queue, in words. This is the trust mechanism, not a spinner. */}
          <div className="r-queue">
            <span className="r-ico">↑</span>
            <span className="r-queue-text">1 vente en attente d'envoi</span>
            <span className="r-queue-action">Envoyer maintenant</span>
          </div>

          <div className="r-actions">
            <span className="r-action is-primary">
              <span className="r-action-ico">▤</span>
              Enregistrer une vente
            </span>
            <span className="r-action">
              <span className="r-action-ico">◈</span>
              Mes bons plans
            </span>
            <span className="r-action r-action-wide is-green">
              <span className="r-action-ico">★</span>
              Points client
            </span>
          </div>

          <span className="r-section">Dernieres ventes</span>
          <ul className="r-sales">
            {sales.map((sale, index) => (
              <li key={index} className={`r-sale is-${sale.state}`}>
                <span className="r-sale-ico">{states[sale.state].icon}</span>
                <span>
                  <span className="r-sale-amount">{sale.amount}</span>
                  <span className="r-sale-state">
                    {sale.time} - {states[sale.state].label}
                  </span>
                  {sale.points ? <span className="r-sale-points">+{sale.points} pts</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function RetailerRecord() {
  return (
    <PhoneFrame app="retailer">
      <RetailerBar title="Enregistrer une vente" back />
      <div className="r-screen">
        <div className="r-amount-card">
          <span className="r-field-label">Montant</span>
          <span className="r-amount-typed">2500</span>
          {/* The parsed amount echoed back formatted: the merchant's check
              against a mistyped digit before the sale is recorded. */}
          <span className="r-amount-echo">2{NBSP}500{NBSP}F</span>
        </div>

        <span className="r-section">Type</span>
        <div className="r-chips">
          <span className="r-chip is-on">Vente</span>
          <span className="r-chip">Service</span>
          <span className="r-chip">Credit</span>
        </div>

        <div className="r-field">
          <span className="r-ico">◯</span>
          <span>
            <span className="r-field-label">Client (optionnel)</span>
            <span className="r-field-value">07 12 34 56 78</span>
          </span>
        </div>
        <span className="r-note">Avec son numero, le client gagne des points chez vous.</span>

        <div className="r-button">Enregistrer</div>
        <span className="r-note">
          <span className="r-ico-inline">▢</span> Vente enregistree sur le telephone.
        </span>
      </div>
    </PhoneFrame>
  )
}

export function RetailerDeals() {
  return (
    <PhoneFrame app="retailer">
      <RetailerBar title="Mes bons plans" back />
      <div className="r-screen">
        <span className="r-note">
          <span className="r-ico-inline">ⓘ</span> Vos offres apparaissent dans
          l'application client Fidelia, dans Bons plans et sur la page de votre commerce.
        </span>
        <div className="r-button">+ Nouveau bon plan</div>
        <span className="r-note">Maximum 5 bons plans en meme temps.</span>

        <div className="r-deal">
          <span className="r-tag">⚡ Mis en avant par Fidelia</span>
          <strong className="r-deal-title">Poulet braise + attieke</strong>
          <span className="r-deal-price">
            2{NBSP}000{NBSP}F <s>3{NBSP}000{NBSP}F</s>
          </span>
          <span className="r-deal-foot">
            <span>◷ Jusqu'au 14 oct.</span>
            <span className="r-deal-end">Terminer</span>
          </span>
        </div>

        <div className="r-deal">
          <strong className="r-deal-title">-20 % sur le riz gras le mardi</strong>
          <span className="r-deal-price">Reduction 20 %</span>
          <span className="r-deal-foot">
            <span>◷ Jusqu'au 7 oct.</span>
            <span className="r-deal-end">Terminer</span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function RetailerNewDeal() {
  return (
    <PhoneFrame app="retailer">
      <RetailerBar title="Nouveau bon plan" back />
      <div className="r-screen">
        <div className="r-field">
          <span>
            <span className="r-field-label">Titre de l'offre</span>
            <span className="r-field-value">Poulet braise + attieke</span>
          </span>
        </div>

        <span className="r-section">Type d'offre</span>
        <div className="r-chips">
          <span className="r-chip is-on">Prix promo</span>
          <span className="r-chip">Reduction en %</span>
        </div>

        <div className="r-row">
          <div className="r-field">
            <span>
              <span className="r-field-label">Prix promo (F)</span>
              <span className="r-field-value">2000</span>
            </span>
          </div>
          <div className="r-field">
            <span>
              <span className="r-field-label">Prix normal (F)</span>
              <span className="r-field-value">3000</span>
            </span>
          </div>
        </div>

        <span className="r-section">Duree</span>
        <div className="r-chips">
          <span className="r-chip">3 jours</span>
          <span className="r-chip is-on">1 semaine</span>
          <span className="r-chip">1 mois</span>
        </div>

        {/* The preview: what the customer will see, before publishing. */}
        <span className="r-section">◉ Apercu pour vos clients</span>
        <div className="r-preview">
          <span className="r-preview-offer">2{NBSP}000{NBSP}F</span>
          <strong>Poulet braise + attieke</strong>
          <span className="r-deal-foot">
            <span>
              <s>3{NBSP}000{NBSP}F</s> · ◷ Jusqu'au 7 oct.
            </span>
          </span>
        </div>

        <div className="r-button">Publier</div>
      </div>
    </PhoneFrame>
  )
}
