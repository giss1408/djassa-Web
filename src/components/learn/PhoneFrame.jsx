/**
 * The device shell every screen mock is drawn inside.
 *
 * The mocks are decorative reconstructions, not the product: the annotation
 * panel beside them carries the argument in real text. So the whole frame is
 * `aria-hidden` and the surrounding figure supplies the accessible name — a
 * screen-reader user gets the prose without wading through a fake status bar.
 */
export function PhoneFrame({ app, children }) {
  return (
    <div className={`phone phone-${app}`} aria-hidden="true">
      <div className="phone-shell">
        <div className="phone-status">
          <span>{app === 'retailer' ? '12:40' : '19:06'}</span>
          <span className="phone-status-icons">
            {/* Deliberately weak signal on the merchant side: the app is built
                offline-first because that is the real condition at a stall. */}
            <i className={app === 'retailer' ? 'sig sig-low' : 'sig'} />
            <i className="batt" />
          </span>
        </div>
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  )
}

/** Merchant app bar: plain title, text actions, no icon font (none is bundled). */
export function RetailerBar({ title, action, back = false }) {
  return (
    <div className="r-bar">
      {back ? <span className="r-back">←</span> : null}
      <span className="r-bar-title">{title}</span>
      {action ? <span className="r-bar-action">{action}</span> : null}
    </div>
  )
}

/** Customer app: the gradient header both the home and loyalty tabs use. */
export function GradientHeader({ tone = 'orange', children }) {
  return <div className={`u-header u-header-${tone}`}>{children}</div>
}

/** Customer app: the five-slot bottom bar with the raised centre pay button. */
export function UserNav({ active = 'home' }) {
  const items = [
    { id: 'home', label: 'Accueil' },
    { id: 'explore', label: 'Explorer' },
    { id: 'pay', label: 'Payer' },
    { id: 'deals', label: 'Bons plans' },
    { id: 'loyalty', label: 'Fidélité' },
  ]
  return (
    <div className="u-nav">
      {items.map((item) =>
        item.id === 'pay' ? (
          <span className="u-nav-pay" key={item.id}>
            <span className="u-nav-disc">▣</span>
            <span className="u-nav-pay-label">{item.label}</span>
          </span>
        ) : (
          <span
            className={`u-nav-item ${active === item.id ? 'is-active' : ''}`}
            key={item.id}
          >
            <span className="u-nav-dot" />
            {item.label}
          </span>
        ),
      )}
    </div>
  )
}
