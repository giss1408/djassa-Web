import { useEffect } from 'react'

const NUMBER = /^([^\d]*)(\d[\d\s,.  ]*\d|\d)(.*)$/s

/** "31,2" (fr) or "3,860" (en) -> { value, decimals }, or null. */
function parse(raw, locale) {
  const compact = raw.replace(/[\s  ]/g, '')
  const french = locale.startsWith('fr')
  const decimalMark = french ? ',' : '.'
  const groupMark = french ? '.' : ','
  const normalized = compact.split(groupMark).join('').replace(decimalMark, '.')
  const value = Number(normalized)
  if (!Number.isFinite(value)) return null
  const decimals = normalized.includes('.') ? normalized.split('.')[1].length : 0
  return { value, decimals }
}

/**
 * Counts the figures inside `ref` up to their value the first time they scroll
 * into view: "25M+", "31,2 %", "3 860". Only the numeric part moves; prefix
 * and suffix stay put, and the exact original text is restored at the end, so
 * what React rendered is what remains.
 *
 * Skipped entirely for reduced motion and in lite mode (Data Saver or 2G):
 * the numbers are simply there, as the prerendered HTML already shows them.
 */
export function useCountUp(ref, selector, locale) {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || document.documentElement.classList.contains('lite')) return
    if (typeof IntersectionObserver === 'undefined') return

    const format = (n, decimals) =>
      new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(n)

    let frame = 0
    let jobs = []
    const run = () => {
      const nodes = Array.from(root.querySelectorAll(selector))
      jobs = nodes
        .map((node) => {
          const original = node.textContent
          const match = original.match(NUMBER)
          const parsed = match && parse(match[2], locale)
          return parsed ? { node, original, prefix: match[1], suffix: match[3], ...parsed } : null
        })
        .filter(Boolean)
      const start = performance.now()
      const duration = 1100
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        for (const job of jobs) {
          job.node.textContent = t < 1 ? job.prefix + format(job.value * eased, job.decimals) + job.suffix : job.original
        }
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect()
          run()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(root)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      // Interrupted mid-count (a language switch): put the real text back, or
      // React, seeing an unchanged value, would leave a half-counted number.
      for (const job of jobs) job.node.textContent = job.original
    }
  }, [ref, selector, locale])
}
