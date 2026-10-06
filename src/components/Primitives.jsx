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
 * The Hossouko mark: eight dots that grow round the ring like a loyalty card
 * filling up; the last, orange one is the reward. `light` sits on paper or
 * white, `mono` takes the text colour (dots fade in, the reward stays orange).
 */
const RING = [
  [60, 20, 5.5],
  [88.28, 31.72, 7],
  [100, 60, 8],
  [88.28, 88.28, 9],
  [60, 100, 10],
  [31.72, 88.28, 11],
  [20, 60, 12],
  [31.72, 31.72, 13.5],
]
const RING_LIGHT = ['#b9cdb0', '#9db894', '#81a27a', '#658c62', '#4c7652', '#366145', '#234b39', '#e65e32']

export function RingMark({ tone = 'light', className }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      {RING.map(([cx, cy, r], i) =>
        tone === 'mono' && i < RING.length - 1 ? (
          <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" opacity={0.35 + i * 0.1} />
        ) : (
          <circle key={i} cx={cx} cy={cy} r={r} fill={RING_LIGHT[i]} />
        ),
      )}
    </svg>
  )
}

export function Brand({ withWordmark = true, label }) {
  return (
    <a className="brand" href="#top" aria-label={label}>
      <RingMark className="brand-mark" />
      {withWordmark ? <span className="brand-word">hossouko</span> : null}
    </a>
  )
}
