import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

export function Market({ content }) {
  const { market } = content

  return (
    <Section id="marche" className="market" labelledBy="market-title">
      <div className="market-head">
        <Kicker>{market.kicker}</Kicker>
        <SplitHeading id="market-title" lead={market.title} accent={market.titleEm} />
        <Lede>{market.lede}</Lede>
      </div>

      {/* Every figure carries its source inline. The research notes warn that
          inclusion numbers diverge by methodology, so an unsourced stat here
          would be a credibility liability in an investor conversation. */}
      <dl className="stat-grid" data-reveal>
        {market.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <dt>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </dt>
            <dd>
              <span className="stat-sub">{stat.sub}</span>
              <span className="stat-source">{stat.source}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="gap-block">
        <h3 className="gap-title">{market.gapTitle}</h3>
        <div className="gap-grid">
          {market.gaps.map((gap, index) => (
            <article className="gap" key={gap.title} data-reveal style={{ '--i': index }}>
              <span className="gap-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4>{gap.title}</h4>
              <p>{gap.body}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="source-note">
        <span className="source-note-mark" aria-hidden="true">
          ⓘ
        </span>
        {market.sourceNote}
      </p>
    </Section>
  )
}
