import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

/**
 * The return side of the walkthrough.
 *
 * Two deliberate choices, both from `docs/optimization_claude_djassa.md`:
 *
 * 1. **The per-outlet arithmetic is labelled illustrative, in the markup, next
 *    to the numbers** — not in a footnote further down. The source document
 *    calls these figures illustrative and says pricing must be tested with
 *    merchants; an investor should meet that caveat at the same moment as the
 *    number, the same way market stats on this page carry their source inline.
 * 2. **The revenue lines are ordered by speed to cash, and each names what
 *    blocks it.** Partner referral fees are the largest line eventually and are
 *    marked out of a year-one forecast, because they are.
 */
export function LearnRoi({ content }) {
  const { learn } = content
  const { roi } = learn

  return (
    <Section id="roi" className="learn-roi" labelledBy="roi-title">
      <div className="roi-head">
        <div>
          <Kicker>{roi.kicker}</Kicker>
          <SplitHeading id="roi-title" lead={roi.title} accent={roi.titleEm} />
        </div>
        <Lede>{roi.lede}</Lede>
      </div>

      {/* --- Per-outlet arithmetic ------------------------------------------ */}
      <div className="roi-math" data-reveal>
        <div className="roi-math-head">
          <h3 className="block-title">{roi.mathTitle}</h3>
          <span className="illustrative-flag">{roi.illustrativeLabel}</span>
        </div>

        <dl className="roi-math-grid">
          {roi.math.map((item) => (
            <div className="roi-figure" key={item.label}>
              <dt>
                <span className="roi-figure-value">{item.value}</span>
                <span className="roi-figure-label">{item.label}</span>
              </dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="roi-verdict">{roi.mathVerdict}</p>
        <p className="source-note">
          <span className="source-note-mark" aria-hidden="true">
            ⓘ
          </span>
          {roi.mathSource}
        </p>
      </div>

      {/* --- Revenue lines, ordered by speed to cash ------------------------ */}
      <div className="roi-lines">
        <h3 className="block-title">{roi.linesTitle}</h3>
        <ol className="line-list">
          {roi.lines.map((line) => (
            <li className={`line line-${line.tone}`} key={line.step}>
              <span className="line-step" aria-hidden="true">
                {line.step}
              </span>
              <div className="line-copy">
                <strong>{line.title}</strong>
                <span className="line-body">{line.body}</span>
                <span className="line-depends">
                  <span className="line-depends-mark" aria-hidden="true">
                    ↳
                  </span>
                  {line.depends}
                </span>
              </div>
              <span className={`line-badge badge-${line.tone}`}>{line.state}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="roi-foot">
        <div className="roi-refuse" data-reveal>
          <h3 className="block-title">{roi.refuseTitle}</h3>
          <ul className="refuse-list">
            {roi.refuse.map((item) => (
              <li key={item.title}>
                <span className="refuse-mark" aria-hidden="true">
                  ✕
                </span>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="roi-moat" data-reveal>
          <h3>{roi.moatTitle}</h3>
          <p>{roi.moat}</p>
          <p className="roi-gate-note">
            <span aria-hidden="true">⚑</span>
            {roi.gateNote}
          </p>
          <a className="text-link" href="#modele">
            {roi.gateLink}
            <span aria-hidden="true">↑</span>
          </a>
        </aside>
      </div>
    </Section>
  )
}
