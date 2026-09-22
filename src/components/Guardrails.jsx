import { Kicker, Lede, Section } from './Primitives.jsx'

export function Guardrails({ content }) {
  const { guardrails } = content

  return (
    <Section id="lignes-rouges" className="guardrails" labelledBy="guardrails-title">
      <div className="guardrails-head">
        <Kicker>{guardrails.kicker}</Kicker>
        <h2 id="guardrails-title" className="split-heading">
          {guardrails.title}
        </h2>
        <Lede>{guardrails.lede}</Lede>
      </div>

      <ul className="never-grid">
        {guardrails.never.map((item, index) => (
          <li className="never" key={item.title} data-reveal style={{ '--i': index }}>
            <span className="never-mark" aria-hidden="true">
              ✕
            </span>
            <strong>{item.title}</strong>
            <span>{item.body}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
