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

/**
 * The Fidelia mark: a geometric F whose middle bar ends in an orange point,
 * the point a customer earns (fidelia-brand/make_logo.py). `tile` draws it on
 * the logo's green tile; `mono` draws the F in the text colour with no tile,
 * and the point stays orange.
 */
export function Mark({ tone = 'tile', className }) {
  const letter = tone === 'mono' ? 'currentColor' : '#f5f1e8'
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      {tone === 'tile' ? <rect width="100" height="100" rx="24" fill="#234b39" /> : null}
      <rect x="31" y="24" width="11" height="52" rx="1.5" fill={letter} />
      <rect x="31" y="24" width="40" height="11" rx="1.5" fill={letter} />
      <rect x="31" y="45" width="26" height="10" rx="1.5" fill={letter} />
      <circle cx="66" cy="50" r="5.5" fill="#e65e32" />
    </svg>
  )
}

export function Brand({ withWordmark = true, label }) {
  return (
    <a className="brand" href="#top" aria-label={label}>
      <Mark className="brand-mark" />
      {withWordmark ? <span className="brand-word">Fidelia</span> : null}
    </a>
  )
}
