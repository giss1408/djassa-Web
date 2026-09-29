import { useId, useState } from 'react'
import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'
import { MOCKS } from './learn/mocks.js'

/**
 * The learning area: the two apps explained screen by screen, then what the
 * screens add up to — the event chain, the security posture, the revenue lines.
 *
 * ## Why a walkthrough rather than a screenshot wall
 *
 * A grid of screenshots makes an investor guess which detail matters. Here each
 * screen is paired with three fixed claims — concept strength, security
 * control, revenue line — so the same three questions get answered ten times
 * and the reader can compare across screens instead of interpreting pictures.
 *
 * ## Tabs
 *
 * Standard `role="tablist"` semantics with arrow-key navigation, because the
 * app choice genuinely switches between two alternative views of one panel.
 * The screen stepper inside is *not* a tablist: it is sequential, so it uses
 * previous/next buttons plus a real ordered list of steps that stays operable
 * one item at a time.
 */
export function Learn({ content }) {
  const { learn } = content
  const baseId = useId()
  const [app, setApp] = useState('retailer')
  const [step, setStep] = useState(0)

  const screens = learn.screens[app]
  const current = screens[step]
  const Mock = MOCKS[app][current.id]

  // Switching app resets the stepper: screen 4 of the merchant app has no
  // counterpart in the customer app, so carrying the index over is meaningless.
  const chooseApp = (next) => {
    setApp(next)
    setStep(0)
  }

  const onTabKey = (event) => {
    const order = learn.apps.map((item) => item.id)
    const index = order.indexOf(app)
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      chooseApp(order[(index + 1) % order.length])
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      chooseApp(order[(index - 1 + order.length) % order.length])
    }
  }

  return (
    <Section id="demo" className="learn" labelledBy="learn-title">
      <div className="learn-head">
        <div>
          <Kicker>{learn.kicker}</Kicker>
          <SplitHeading id="learn-title" lead={learn.title} accent={learn.titleEm} />
        </div>
        <div className="learn-head-side">
          <Lede>{learn.lede}</Lede>
          <p className="learn-howto">{learn.howTo}</p>
        </div>
      </div>

      {/* --- App chooser ---------------------------------------------------- */}
      <div className="app-tabs" role="tablist" aria-label={learn.title}>
        {learn.apps.map((item) => {
          const selected = app === item.id
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              type="button"
              role="tab"
              className={`app-tab ${selected ? 'is-active' : ''}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => chooseApp(item.id)}
              onKeyDown={onTabKey}
            >
              <span className="app-tab-label">{item.label}</span>
              <span className="app-tab-tag">{item.tag}</span>
              <code className="app-tab-file">{item.file}</code>
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${app}`}
        className="learn-panel"
      >
        <p className="app-pitch">{learn.apps.find((item) => item.id === app).pitch}</p>

        <div className="walk">
          {/* --- The device ------------------------------------------------- */}
          <figure className="walk-device" aria-label={`${learn.mockLabel} — ${current.name}`}>
            <Mock />
            <figcaption>{learn.fidelity}</figcaption>
          </figure>

          {/* --- The annotation -------------------------------------------- */}
          <div className="walk-copy">
            <p className="walk-count">
              {learn.screenLabel} {step + 1} {learn.ofLabel} {screens.length}
            </p>
            <h3 className="walk-name">{current.name}</h3>
            <p className="walk-summary">{current.summary}</p>

            <dl className="walk-axes">
              <div className="axis axis-strength">
                <dt>
                  <span className="axis-mark" aria-hidden="true">
                    ↗
                  </span>
                  {learn.axes.strength}
                </dt>
                <dd>{current.strength}</dd>
              </div>
              <div className="axis axis-security">
                <dt>
                  <span className="axis-mark" aria-hidden="true">
                    ⛨
                  </span>
                  {learn.axes.security}
                </dt>
                <dd>{current.security}</dd>
              </div>
              <div className="axis axis-roi">
                <dt>
                  <span className="axis-mark" aria-hidden="true">
                    ◈
                  </span>
                  {learn.axes.roi}
                </dt>
                <dd>{current.roi}</dd>
              </div>
            </dl>

            <div className="walk-controls">
              <button
                type="button"
                className="walk-arrow"
                onClick={() => setStep((value) => value - 1)}
                disabled={step === 0}
              >
                <span aria-hidden="true">←</span> {learn.prev}
              </button>
              <button
                type="button"
                className="walk-arrow"
                onClick={() => setStep((value) => value + 1)}
                disabled={step === screens.length - 1}
              >
                {learn.next} <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Jump list. Named buttons rather than dots: an investor skipping
                straight to "Confirmer le paiement" should be able to see it. */}
            <ol className="walk-steps">
              {screens.map((screen, index) => (
                <li key={screen.id}>
                  <button
                    type="button"
                    className={`walk-step ${index === step ? 'is-current' : ''}`}
                    aria-current={index === step ? 'step' : undefined}
                    onClick={() => setStep(index)}
                  >
                    <span className="walk-step-n" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {screen.name}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* --- What the ten screens add up to -------------------------------- */}
      <div className="chain" data-reveal>
        <div className="chain-head">
          <Kicker>{learn.chain.kicker}</Kicker>
          <SplitHeading
            id="chain-title"
            level={3}
            lead={learn.chain.title}
            accent={learn.chain.titleEm}
          />
          <Lede>{learn.chain.lede}</Lede>
        </div>

        <ol className="chain-list">
          {learn.chain.steps.map((item, index) => (
            <li className="chain-step" key={index}>
              <span className="chain-n" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="chain-owner">{item.owner}</span>
              <span className="chain-text">{item.text}</span>
            </li>
          ))}
        </ol>

        <p className="chain-note">
          <span aria-hidden="true">✳</span>
          {learn.chain.note}
        </p>
      </div>
    </Section>
  )
}
