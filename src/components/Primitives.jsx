/** Shared layout primitives — kept tiny and presentational on purpose. */

export function Section({ id, className = '', labelledBy, children, ...rest }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section ${className}`.trim()}
      {...rest}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

export function Kicker({ children }) {
  return (
    <p className="kicker">
      <span className="kicker-rule" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Section heading where the second clause is emphasised in orange italic. */
export function SplitHeading({ id, level = 2, lead, accent, className = '' }) {
  const Tag = `h${level}`
  return (
    <Tag id={id} className={`split-heading ${className}`.trim()}>
      {lead}
      {accent ? (
        <>
          {' '}
          <em>{accent}</em>
        </>
      ) : null}
    </Tag>
  )
}

export function Lede({ children, className = '' }) {
  return <p className={`lede ${className}`.trim()}>{children}</p>
}

export function Brand({ withWordmark = true, label }) {
  return (
    <a className="brand" href="#top" aria-label={label}>
      <span className="brand-mark" aria-hidden="true">
        d
      </span>
      {withWordmark ? <span className="brand-word">djassa</span> : null}
    </a>
  )
}
