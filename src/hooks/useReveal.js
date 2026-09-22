import { useEffect } from 'react'

/**
 * Adds `is-visible` to [data-reveal] elements as they scroll in.
 *
 * Content is styled visible by default and only hidden once this hook confirms
 * both IntersectionObserver support and that the visitor has not asked for
 * reduced motion — so the page is never blank for a crawler, a no-JS reader, or
 * someone with motion sensitivity.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') return

    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!targets.length) return

    document.documentElement.classList.add('reveal-enabled')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    for (const target of targets) observer.observe(target)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
