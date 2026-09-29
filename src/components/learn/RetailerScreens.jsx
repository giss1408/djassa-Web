/**
 * Merchant-app screen reconstructions (`djassa-App-retailer/lib/features/`).
 *
 * Fidelity rules, carried over from that app's own constraints:
 *
 * * **French, unaccented.** `lib/l10n/strings.dart` drops every accent on
 *   purpose. Copying the strings faithfully means copying that too — "Derniere
 *   vente", not "Dernière vente".
 * * **No icon glyphs.** The app bundles no Material icon font, so anything that
 *   looks like an icon here is a text character, as it is in the app.
 * * **Words, not colours, for state.** `_SaleRow` pairs every sync state with a
 *   word because a cheap panel in sunlight washes hues out.
 *
 * Amounts are examples; `formatMoney` in `lib/ui/money_text.dart` is the format
 * being imitated — non-breaking space groups, no decimals, a bare "F".
 */
import { PhoneFrame, RetailerBar } from './PhoneFrame.jsx'

const NBSP = ' '

export function RetailerSignIn() {
  return (
    <PhoneFrame app="retailer">
      <div className="r-screen r-signin">
        <span className="r-wordmark">Djassa</span>
        <span className="r-sub">Espace marchand</span>
        <div className="r-field">
          <span className="r-field-label">Identifiant</span>
          <span className="r-field-value">awa.kone</span>
        </div>
        <div className="r-field">
          <span className="r-field-label">Mot de passe</span>
          <span className="r-field-value">••••••••</span>
        </div>
        <div className="r-button">Se connecter</div>
        <span className="r-link">Que veut dire djassa ?</span>
      </div>
    </PhoneFrame>
  )
}

export function RetailerHome() {
  const sales = [
    { amount: `2${NBSP}500${NBSP}F`, time: '12:31', state: 'Envoyee' },
    { amount: `1${NBSP}500${NBSP}F`, time: '12:18', state: 'Pas encore envoyee' },
    { amount: `6${NBSP}000${NBSP}F`, time: '11:52', state: 'Envoyee' },
    { amount: `800${NBSP}F`, time: '11:40', state: 'Envoyee' },
  ]
  return (
    <PhoneFrame app="retailer">
      <RetailerBar title="Djassa" action="Se deconnecter" />
      <div className="r-screen">
        {/* The day's total: deliberately the largest thing on the screen. */}
        <div className="r-today">
          <span className="r-today-label">Aujourd'hui</span>
          <strong className="r-today-value">
            48{NBSP}300{NBSP}F
          </strong>
          <span className="r-today-count">19 ventes du jour</span>
        </div>

        {/* The queue, in words. This is the trust mechanism, not a spinner. */}
        <div className="r-queue">
          <span>1 en attente d'envoi</span>
          <span className="r-queue-action">Envoyer maintenant</span>
        </div>

        <div className="r-button">Enregistrer une vente</div>
        <div className="r-button r-button-ghost">Mes bons plans</div>

        <span className="r-section">Dernieres ventes</span>
        <ul className="r-sales">
          {sales.map((sale, index) => (
            <li key={index}>
              <span className="r-sale-amount">{sale.amount}</span>
              <span
                className={`r-sale-state ${
                  sale.state === 'Pas encore envoyee' ? 'is-pending' : ''
                }`}
              >
                {sale.time} - {sale.state}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  )
}

export function RetailerRecord() {
  return (
    <PhoneFrame app="retailer">
      <RetailerBar title="Enregistrer une vente" back />
      <div className="r-screen">
        <div className="r-field r-field-amount">
          <span className="r-field-label">Montant</span>
          <span className="r-amount-typed">2500</span>
        </div>
        {/* The parsed amount echoed back formatted: the merchant's check
            against a mistyped digit before the sale is recorded. */}
        <span className="r-amount-echo">2{NBSP}500{NBSP}F</span>

        <span className="r-section">Type</span>
        <div className="r-chips">
          <span className="r-chip is-on">Vente</span>
          <span className="r-chip">Service</span>
          <span className="r-chip">Credit</span>
        </div>

        <div className="r-field">
          <span className="r-field-label">Client (optionnel)</span>
          <span className="r-field-value r-field-hint">Numero de telephone</span>
        </div>

        <div className="r-button">Enregistrer</div>
        <span className="r-note">Vente enregistree sur le telephone.</span>
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
          Vos offres apparaissent dans l'application client Djassa, dans Bons plans et
          sur la page de votre commerce.
        </span>
        <div className="r-button">Nouveau bon plan</div>
        <span className="r-note">Maximum 5 bons plans en meme temps.</span>

        <div className="r-deal">
          <div className="r-deal-head">
            <strong>Poulet braise + attieke</strong>
            <span className="r-deal-badge">Mis en avant par Djassa</span>
          </div>
          <span className="r-deal-price">
            2{NBSP}000{NBSP}F <s>3{NBSP}000{NBSP}F</s>
          </span>
          <span className="r-deal-foot">
            Jusqu'au 14 oct. <span className="r-deal-end">Terminer</span>
          </span>
        </div>

        <div className="r-deal">
          <div className="r-deal-head">
            <strong>-20 % sur le riz gras le mardi</strong>
          </div>
          <span className="r-deal-price">Reduction 20 %</span>
          <span className="r-deal-foot">
            Jusqu'au 7 oct. <span className="r-deal-end">Terminer</span>
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
          <span className="r-field-label">Titre de l'offre</span>
          <span className="r-field-value">Poulet braise + attieke</span>
        </div>

        <span className="r-section">Type d'offre</span>
        <div className="r-chips">
          <span className="r-chip is-on">Prix promo</span>
          <span className="r-chip">Reduction en %</span>
        </div>

        <div className="r-row">
          <div className="r-field">
            <span className="r-field-label">Prix promo (F)</span>
            <span className="r-field-value">2000</span>
          </div>
          <div className="r-field">
            <span className="r-field-label">Prix normal (F)</span>
            <span className="r-field-value">3000</span>
          </div>
        </div>

        <span className="r-section">Duree</span>
        <div className="r-chips">
          <span className="r-chip">3 jours</span>
          <span className="r-chip is-on">1 semaine</span>
          <span className="r-chip">1 mois</span>
        </div>

        {/* The preview: what the customer will see, before publishing. */}
        <span className="r-section">Apercu pour vos clients</span>
        <div className="r-preview">
          <strong>Poulet braise + attieke</strong>
          <span>
            2{NBSP}000{NBSP}F <s>3{NBSP}000{NBSP}F</s> · Plus que 7 j
          </span>
        </div>

        <div className="r-button">Publier</div>
      </div>
    </PhoneFrame>
  )
}
