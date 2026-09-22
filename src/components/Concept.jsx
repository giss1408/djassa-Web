import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

/**
 * The event-stream diagram.
 *
 * Built as a hub plus a spine of labelled branches rather than the previous
 * absolutely-positioned radial layout: the branches reflow to a single column
 * on narrow screens without any node overlapping, and each branch keeps its
 * roadmap phase attached so the reader can see which views exist today.
 */
export function Concept({ content }) {
  const { concept } = content

  return (
    <Section id="concept" className="concept" labelledBy="concept-title">
      <div className="concept-head">
        <Kicker>{concept.kicker}</Kicker>
        <SplitHeading id="concept-title" lead={concept.title} accent={concept.titleEm} />
        <Lede>{concept.lede}</Lede>
        <p className="concept-body">{concept.body}</p>
      </div>

      <figure className="event-figure" data-reveal>
        <div className="event-hub">
          <span className="event-hub-label">{concept.coreLabel}</span>
          <strong>{concept.coreValue}</strong>
          <span className="event-hub-detail">{concept.coreDetail}</span>
        </div>

        <ol className="event-branches">
          {concept.nodes.map((node, index) => (
            <li className="event-branch" key={node.title} style={{ '--i': index }}>
              <span className="branch-connector" aria-hidden="true" />
              <div className="branch-card">
                <span className="branch-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{node.title}</strong>
                <span className="branch-detail">{node.detail}</span>
                <span className="branch-phase">{node.phase}</span>
              </div>
            </li>
          ))}
        </ol>

        <figcaption className="event-note">{concept.note}</figcaption>
      </figure>
    </Section>
  )
}
