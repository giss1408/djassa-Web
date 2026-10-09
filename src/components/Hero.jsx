import { Mark } from './Primitives.jsx'

export function Hero({ content }) {
  const { hero, ticker } = content
  const art = hero.artLabels

  return (
    <>
      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1>{hero.title}</h1>
            <p className="hero-intro">{hero.intro}</p>

            <div className="hero-actions">
              <a className="button button-dark" href="#these">
                {hero.primary}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#concept">
                {hero.secondary}
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Stage disclosure sits in the hero deliberately: an investor
                should not have to scroll to learn this is pre-pilot. */}
            <div className="hero-stage">
              <span className="stage-flag">{hero.stage.label}</span>
              <strong>{hero.stage.value}</strong>
              <p>{hero.stage.detail}</p>
            </div>
          </div>

          <div className="hero-art" role="img" aria-label={art.alt}>
            <div className="art-grain" aria-hidden="true" />
            <div className="sun-disc" aria-hidden="true" />
            <p className="art-label label-top" aria-hidden="true">
              {art.top}
              <br />
              <strong>{art.topStrong}</strong>
            </p>
            <p className="art-label label-bottom" aria-hidden="true">
              {art.bottom}
              <br />
              <strong>{art.bottomStrong}</strong>
            </p>

            <div className="wallet-card" aria-hidden="true">
              <div className="card-top">
                <Mark tone="mono" className="mini-logo" />
                <span>{hero.card.tag}</span>
              </div>
              <div className="card-line">{hero.card.line}</div>
              <div className="card-bottom">
                <span>{hero.card.holder}</span>
                <span className="card-dots">●●●</span>
              </div>
              <div className="card-foot">{hero.card.foot}</div>
            </div>

            <div className="leaf leaf-one" aria-hidden="true" />
            <div className="leaf leaf-two" aria-hidden="true" />
            <p className="art-stamp" aria-hidden="true">
              {art.stamp}
              <br />
              <strong>{art.stampStrong}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Duplicated track makes the marquee loop seamlessly; the copy is
          aria-hidden so the phrases are announced exactly once. */}
      <div className="ticker">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
              {ticker.map((item, index) => (
                <span className="ticker-item" key={`${copy}-${index}`}>
                  {item}
                  <i aria-hidden="true">✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
