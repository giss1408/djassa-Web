import { Kicker, Lede, Section } from './Primitives.jsx'

/**
 * The master metric.
 *
 * The docs are emphatic that one number governs the roadmap, so this section
 * shows it alone, then contrasts the two outcomes the docs compare directly:
 * one deep merchant beats ten shallow ones.
 */
export function Metric({ content }) {
  const { metric } = content

  return (
    <Section id="metrique" className="metric" labelledBy="metric-title">
      <div className="metric-head">
        <Kicker>{metric.kicker}</Kicker>
        <h2 id="metric-title" className="split-heading">
          {metric.title}
        </h2>
        <Lede>{metric.lede}</Lede>
      </div>

      <div className="metric-headline" data-reveal>
        <strong>{metric.headline}</strong>
        <span>{metric.headlineSub}</span>
      </div>

      <div className="metric-compare" data-reveal>
        <div className="compare-side compare-good">
          <span className="compare-value">{metric.comparison.good.value}</span>
          <p>{metric.comparison.good.label}</p>
        </div>
        <span className="compare-versus" aria-hidden="true">
          ≫
        </span>
        <div className="compare-side compare-bad">
          <span className="compare-value">{metric.comparison.bad.value}</span>
          <p>{metric.comparison.bad.label}</p>
        </div>
        <p className="compare-verdict">{metric.comparison.verdict}</p>
      </div>

      <dl className="target-grid">
        {metric.targets.map((target) => (
          <div className="target" key={target.label}>
            <dt>
              <strong>{target.value}</strong>
              {target.label}
            </dt>
            <dd>{target.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
