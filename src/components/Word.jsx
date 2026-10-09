/**
 * "The name" — a dictionary-style entry presenting Fidelia and its slogan.
 *
 * Sits between the hero and the concept on purpose: a reader meets the brand
 * and its promise before any argument is built on it. Unnumbered kicker,
 * so it does not shift the 01–10 section sequence.
 */
export function Word({ content }) {
  const { word } = content

  return (
    <section id="nom" className="section word" aria-labelledby="word-title">
      <div className="shell">
        <p className="kicker">
          <span className="kicker-rule" aria-hidden="true" />
          {word.kicker}
        </p>

        <article className="word-entry" data-reveal>
          <header className="word-head">
            <h2 id="word-title" className="word-term" lang="fr-CI">
              fidelia
            </h2>
            <p className="word-meta">
              <span className="word-phon">{word.phonetic}</span>
              <span className="word-pos">{word.pos}</span>
              <span className="word-origin">{word.origin}</span>
            </p>
          </header>

          <ol className="word-senses">
            {word.senses.map((sense, index) => (
              <li key={index}>
                <span className="word-sense-n" aria-hidden="true">
                  {index + 1}.
                </span>
                <p>{sense}</p>
              </li>
            ))}
          </ol>

          <p className="word-why">
            <span aria-hidden="true">✳</span>
            {word.why}
          </p>
        </article>
      </div>
    </section>
  )
}
