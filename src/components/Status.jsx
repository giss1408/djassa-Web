import { Kicker, Lede, Section } from './Primitives.jsx'

/**
 * Build status.
 *
 * Stating what is not yet hardened is a deliberate trust move with an investor
 * or a regulated partner: the technical guide calls the backend a prototype, so
 * the public page says the same thing rather than implying production maturity.
 */
export function Status({ content }) {
  const { status } = content

  return (
    <Section id="etat" className="status" labelledBy="status-title">
      <div className="status-head">
        <Kicker>{status.kicker}</Kicker>
        <h2 id="status-title" className="split-heading">
          {status.title}
        </h2>
        <Lede>{status.lede}</Lede>
      </div>

      <div className="status-grid">
        <div className="status-col status-built" data-reveal>
          <h3>
            <span className="status-chip chip-built" aria-hidden="true">
              ✓
            </span>
            {status.built.label}
          </h3>
          <ul>
            {status.built.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="status-col status-pending" data-reveal>
          <h3>
            <span className="status-chip chip-pending" aria-hidden="true">
              ○
            </span>
            {status.pending.label}
          </h3>
          <ul>
            {status.pending.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="status-honesty">{status.honesty}</p>
    </Section>
  )
}
