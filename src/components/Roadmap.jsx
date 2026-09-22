import { useId, useState } from 'react'
import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

/**
 * Phase roadmap with per-phase exit gates, plus the verification-tier table.
 *
 * Phases are an accordion rather than six expanded columns: an investor scans
 * the phase names and states first, then opens the one they care about. Panels
 * stay in the DOM and are hidden with `hidden` so in-page search still finds
 * their text.
 */
export function Roadmap({ content }) {
  const { roadmap } = content
  const baseId = useId()
  const [open, setOpen] = useState(() => {
    const current = roadmap.phases.findIndex((phase) => phase.state === 'current')
    return current === -1 ? 0 : current
  })

  return (
    <Section id="execution" className="roadmap" labelledBy="roadmap-title">
      <div className="roadmap-head">
        <div>
          <Kicker>{roadmap.kicker}</Kicker>
          <SplitHeading id="roadmap-title" lead={roadmap.title} accent={roadmap.titleEm} />
        </div>
        <Lede>{roadmap.lede}</Lede>
      </div>

      <div className="phase-list">
        {roadmap.phases.map((phase, index) => {
          const isOpen = open === index
          const panelId = `${baseId}-panel-${phase.id}`
          const buttonId = `${baseId}-button-${phase.id}`

          return (
            <article
              className={`phase phase-${phase.state} ${isOpen ? 'is-open' : ''}`}
              key={phase.id}
            >
              <h3 className="phase-heading">
                <button
                  id={buttonId}
                  type="button"
                  className="phase-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="phase-id" aria-hidden="true">
                    {phase.id}
                  </span>
                  <span className="phase-name">{phase.name}</span>
                  <span className={`phase-state state-${phase.state}`}>
                    {phase.stateLabel}
                  </span>
                  <span className="phase-chevron" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="phase-panel"
                hidden={!isOpen}
              >
                <p className="phase-goal">{phase.goal}</p>
                <ul className="phase-items">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="phase-exit">
                  <span className="phase-exit-label">↳</span>
                  {phase.exit}
                </p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="verification" data-reveal>
        <div className="verification-head">
          <h3>{roadmap.verification.title}</h3>
          <p>{roadmap.verification.lede}</p>
        </div>

        <div className="table-scroll">
          <table className="matrix matrix-tiers">
            <thead>
              <tr>
                {roadmap.verification.columns.map((column) => (
                  <th scope="col" key={column}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roadmap.verification.tiers.map((tier) => (
                <tr key={tier.tier}>
                  <th scope="row" data-label={roadmap.verification.columns[0]}>
                    <span className="tier-chip">{tier.tier}</span>
                  </th>
                  <td data-label={roadmap.verification.columns[1]}>{tier.use}</td>
                  <td data-label={roadmap.verification.columns[2]}>{tier.check}</td>
                  <td data-label={roadmap.verification.columns[3]}>{tier.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="verification-note">{roadmap.verification.note}</p>
      </div>
    </Section>
  )
}
