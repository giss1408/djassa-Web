/**
 * Customer-app screen reconstructions (`fidelia-App-user/lib/features/`).
 *
 * This app, unlike the merchant one, *does* carry accents and *does* use icons,
 * so the mocks do too. Colours come from `lib/ui/theme.dart`, which is itself
 * derived from this site's tokens — so the mocks reuse the site tokens rather
 * than hardcoding a second palette.
 *
 * Venues, amounts and references are examples. The app labels demo data
 * "Données de démonstration" for exactly this reason, and so does the caption
 * under the walkthrough.
 */
import { GradientHeader, PhoneFrame, UserNav } from './PhoneFrame.jsx'

const NBSP = ' '

export function UserHome() {
  return (
    <PhoneFrame app="user">
      <div className="u-screen">
        <GradientHeader>
          <span className="u-greeting">BONSOIR</span>
          <strong className="u-name">Awa</strong>
          <span className="u-tagline">Qu'est-ce qu'on fait aujourd'hui ?</span>
        </GradientHeader>

        {/* The points card rides over the header's bottom edge. */}
        <div className="u-points-card">
          <span className="u-points-label">Mes points fidélité</span>
          <div className="u-points-row">
            <strong>340</strong>
            <span>points · 3 commerces</span>
          </div>
        </div>

        <div className="u-quick">
          <span className="u-quick-item is-primary">Scanner</span>
          <span className="u-quick-item">De garde</span>
          <span className="u-quick-item">Bons plans</span>
        </div>

        <span className="u-section">
          De garde maintenant <i>Tout voir</i>
        </span>
        <div className="u-card u-card-pharmacy">
          <span className="u-badge u-badge-duty">DE GARDE</span>
          <strong>Pharmacie du Plateau</strong>
          <span className="u-meta">Plateau · De garde jusqu'au dim. 5 oct.</span>
        </div>

        <span className="u-section">
          À découvrir <i>Tout voir</i>
        </span>
        <div className="u-card">
          <strong>Maquis Chez Tante Adjo</strong>
          <span className="u-meta">Cocody · Paiement Fidelia · 1 pt / 100 F</span>
        </div>

        <UserNav active="home" />
      </div>
    </PhoneFrame>
  )
}

export function UserScan() {
  return (
    <PhoneFrame app="user">
      <div className="u-screen u-scan">
        <div className="u-scan-view">
          <div className="u-scan-reticle" />
          <span className="u-scan-title">Scannez le QR code</span>
          <span className="u-scan-hint">
            Visez le QR code Fidelia affiché par le commerçant.
          </span>
        </div>
        <div className="u-scan-actions">
          <span className="u-scan-action">Lampe</span>
          <span className="u-scan-action">Saisir le code</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function UserPay() {
  return (
    <PhoneFrame app="user">
      <div className="u-screen u-pay">
        <span className="u-bar-title">Confirmer le paiement</span>

        {/* The merchant name comes from the server's answer to the scanned
            code, never from the QR payload itself. */}
        <div className="u-merchant">
          <strong>Maquis Chez Tante Adjo</strong>
          <span className="u-verified">✓ Commerçant vérifié par Fidelia</span>
        </div>

        <div className="u-amount-block">
          <span className="u-amount-label">Montant demandé par le commerçant</span>
          <strong className="u-amount">2{NBSP}500{NBSP}F</strong>
          <span className="u-expires">Expire dans 4:38</span>
        </div>

        <span className="u-field-label">Payer avec</span>
        <div className="u-wallets">
          <span className="u-wallet is-on">
            <i className="w-wave" />
            Wave
          </span>
          <span className="u-wallet">
            <i className="w-orange" />
            Orange
          </span>
          <span className="u-wallet">
            <i className="w-mtn" />
            MTN
          </span>
        </div>

        <div className="u-input">
          <span className="u-field-label">Numéro du portefeuille</span>
          <span>07 12 34 56 78</span>
        </div>

        <div className="u-earn">Vous gagnerez 25 pts</div>
        <div className="u-button">Payer 2{NBSP}500{NBSP}F</div>
        {/* Stated on the screen, not buried in terms. */}
        <span className="u-notice">
          L'argent va directement de votre portefeuille à celui du commerçant. Fidelia ne
          garde jamais votre argent.
        </span>
      </div>
    </PhoneFrame>
  )
}

export function UserReceipt() {
  return (
    <PhoneFrame app="user">
      <div className="u-screen u-receipt">
        <div className="u-tick">✓</div>
        <div className="u-ticket">
          <span className="u-ticket-state">PAIEMENT RÉUSSI</span>
          <strong className="u-ticket-amount">2{NBSP}500{NBSP}F</strong>
          <span className="u-ticket-venue">Maquis Chez Tante Adjo</span>
          <span className="u-ticket-points">+25 points gagnés</span>
          <div className="u-ticket-perf" />
          <dl className="u-ticket-details">
            <div>
              <dt>Payé à</dt>
              <dd>Maquis Chez Tante Adjo</dd>
            </div>
            <div>
              <dt>Portefeuille</dt>
              <dd>Wave · 07 12 34 56 78</dd>
            </div>
            <div>
              <dt>Référence</dt>
              <dd>DJ-4F2A9C71</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>4 oct. · 19:06</dd>
            </div>
          </dl>
        </div>
        <div className="u-button">Terminer</div>
      </div>
    </PhoneFrame>
  )
}

export function UserLoyalty() {
  return (
    <PhoneFrame app="user">
      <div className="u-screen">
        <GradientHeader tone="green">
          <span className="u-greeting">MES POINTS FIDÉLITÉ</span>
          <div className="u-points-row u-points-row-big">
            <strong>340</strong>
            <span>points · 3 commerces</span>
          </div>
        </GradientHeader>

        <span className="u-notice u-notice-inline">
          ⓘ Les points s'échangent contre des récompenses chez chaque commerçant, pas
          contre de l'argent.
        </span>

        <div className="u-card">
          <strong>Maquis Chez Tante Adjo</strong>
          <span className="u-meta">175 pts restants chez ce commerçant</span>
          <div className="u-progress">
            <span style={{ width: '70%' }} />
          </div>
          <span className="u-reward">
            encore 75 pts pour : Attiéké offert <i>Utiliser</i>
          </span>
        </div>

        <div className="u-card">
          <strong>Pharmacie du Plateau</strong>
          <span className="u-meta">120 pts restants chez ce commerçant</span>
          <div className="u-progress">
            <span style={{ width: '40%' }} />
          </div>
          <span className="u-reward">encore 180 pts pour : -500 F sur un achat</span>
        </div>

        <span className="u-section">Historique</span>
        <ul className="u-history">
          <li>
            <span>Gagnés chez Maquis Chez Tante Adjo</span>
            <strong>+25</strong>
          </li>
          <li>
            <span>Utilisés chez Pharmacie du Plateau</span>
            <strong className="is-spent">−200</strong>
          </li>
        </ul>

        <UserNav active="loyalty" />
      </div>
    </PhoneFrame>
  )
}
