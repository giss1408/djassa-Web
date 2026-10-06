import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

/**
 * The control matrix, taken from `hossouko-BE/Architecture/SECURITY.md`.
 *
 * That document keeps a per-control status column that includes "Partial" and
 * "Not complete", and the page publishes those words unchanged. Softening them
 * would be the one mistake this section cannot survive: a regulated partner
 * runs this check anyway, and being caught rounding up is more expensive than
 * any gap on the list.
 *
 * `tone` styles the state chip, but the chip always carries the word too — the
 * same colour-never-alone rule the rest of the page follows.
 */
export function LearnSecurity({ content }) {
  const { learn, status } = content
  const { security } = learn

  return (
    <Section id="securite" className="learn-security" labelledBy="security-title">
      <div className="security-head">
        <Kicker>{security.kicker}</Kicker>
        <SplitHeading id="security-title" lead={security.title} accent={security.titleEm} />
        <Lede>{security.lede}</Lede>
      </div>

      <div className="table-scroll" data-reveal>
        <table className="matrix matrix-controls">
          <thead>
            <tr>
              {security.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {security.rows.map((row) => (
              <tr key={row.control}>
                <th scope="row" data-label={security.columns[0]}>
                  {row.control}
                </th>
                <td data-label={security.columns[1]}>{row.prevents}</td>
                <td data-label={security.columns[2]}>
                  <span className={`state-chip chip-${row.tone}`}>{row.state}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="security-note">
        <span aria-hidden="true">⚑</span>
        {security.note}
        {/* Points at the existing build-status section rather than repeating
            its list, so there is one place to update when the state changes. */}
        <a className="text-link security-link" href="#etat">
          {security.linkLabel}
          <span aria-hidden="true">↓</span>
        </a>
      </p>

      <p className="visually-hidden">{status.honesty}</p>
    </Section>
  )
}
