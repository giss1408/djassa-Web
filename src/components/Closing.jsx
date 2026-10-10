import { briefUrl } from '../apiBase.js'
import { Brand } from './Primitives.jsx'

const CONTACT = 'contact.fidelia@regisse.com'

export function Closing({ content }) {
  const { closing, footer, nav } = content

  return (
    <>
      <section className="closing" id="contact" aria-labelledby="closing-title">
        <div className="shell closing-grid">
          <div className="closing-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {closing.eyebrow}
            </p>
            <h2 id="closing-title">{closing.title}</h2>
            <p className="closing-body">{closing.body}</p>

            <div className="closing-actions">
              <a className="button button-orange" href={`mailto:${CONTACT}`}>
                {closing.cta}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={briefUrl(nav.briefHref, content.locale)}>
                {closing.ctaSecondary}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Naming who we want to hear from, and what we would ask of each,
              turns a generic "contact us" into a qualified inbound filter. */}
          <dl className="ask-list">
            {closing.asks.map((ask) => (
              <div className="ask" key={ask.who}>
                <dt>{ask.who}</dt>
                <dd>{ask.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <Brand label={nav.home} />
            <div className="footer-meta">
              <span>{footer.rights}</span>
              <span>{footer.note}</span>
            </div>
          </div>

          <div className="footer-notes">
            <p className="footer-brand-note">{footer.brandNote}</p>
            <p className="footer-sources">
              <strong>{footer.sourcesLabel}</strong> {footer.sources}
            </p>
            <p className="footer-disclaimer">{footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
