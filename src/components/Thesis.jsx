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

      {/* The federated-identity story is the largest upside in the docs and the
          easiest thing to overclaim. It gets its own framed block with the
          guardrail attached, so the hypothesis never reads as a capability. */}
      <aside className="horizon" data-reveal>
        <div className="horizon-head">
          <span className="horizon-label">{thesis.identity.label}</span>
          <h3>{thesis.identity.title}</h3>
        </div>
        <div className="horizon-body">
          <p>{thesis.identity.body}</p>
          <p className="horizon-guard">
            <span aria-hidden="true">⚑</span>
            {thesis.identity.guard}
          </p>
        </div>
      </aside>
    </Section>
  )
}
