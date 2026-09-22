import { Kicker, Lede, Section, SplitHeading } from './Primitives.jsx'

/**
 * Competitive positioning.
 *
 * Rendered as a real <table> so the relationship between a segment, its
 * incumbents and our stance survives screen readers and text-only reading;
 * the cells restack on mobile with their column names exposed via data-label.
 */
export function Landscape({ content }) {
  const { landscape } = content

  return (
    <Section id="positionnement" className="landscape" labelledBy="landscape-title">
      <div className="landscape-head">
        <Kicker>{landscape.kicker}</Kicker>
        <SplitHeading
          id="landscape-title"
          lead={landscape.title}
          accent={landscape.titleEm}
        />
        <Lede>{landscape.lede}</Lede>
      </div>

      <div className="table-scroll" data-reveal>
        <table className="matrix">
          <thead>
            <tr>
              {landscape.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {landscape.rows.map((row) => (
              <tr key={row.segment} className={`verdict-${row.verdict}`}>
                <th scope="row" data-label={landscape.columns[0]}>
                  {row.segment}
                </th>
                <td data-label={landscape.columns[1]}>{row.players}</td>
                <td data-label={landscape.columns[2]}>
                  <span className={`stance stance-${row.verdict}`}>{row.stance}</span>
                  <span className="stance-why">{row.why}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
