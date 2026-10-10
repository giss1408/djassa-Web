import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

export function Thesis({ content }) {
  const { thesis } = content

  return (
    <Section id="these" className="thesis" labelledBy="thesis-title">
      <div className="thesis-head">
        <div>
          <Kicker>{thesis.kicker}</Kicker>
          <SplitHeading id="thesis-title" lead={thesis.title} accent={thesis.titleEm} />
        </div>
        <Lede>{thesis.lede}</Lede>
      </div>

      <div className="case-grid">
        {thesis.cards.map((card, index) => (
          <article className="case" key={card.label} data-reveal style={{ '--i': index }}>
            <span className="case-icon" aria-hidden="true">
              {card.icon}
            </span>
            <span className="case-label">{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <p className="case-proof">{card.proof}</p>
          </article>
        ))}
      </div>

      {/* The pilot boundaries (CONCEPT.md § 12): what the pilot validates, with
          what is frozen attached, so the long-term concept above never reads
          as the pilot's scope. The federated-identity horizon is kept out of
          the public site during the pilot, as § 12 requires. */}
      <aside className="horizon" data-reveal>
        <div className="horizon-head">
          <span className="horizon-label">{thesis.pilot.label}</span>
          <h3>{thesis.pilot.title}</h3>
        </div>
        <div className="horizon-body">
          <p>{thesis.pilot.body}</p>
          <p className="horizon-guard">
            <span aria-hidden="true">⚑</span>
            {thesis.pilot.guard}
          </p>
        </div>
      </aside>
    </Section>
  )
}
