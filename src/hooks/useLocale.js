import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_LOCALE, getContent, hasContent, loadContent } from '../content/index.js'

const STORAGE_KEY = 'djassa.locale'

/** The visitor's saved or browser language. Browser-only: called in an effect. */
function preferredLocale() {
  // localStorage throws in private-mode and blocked-cookie contexts.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'FR' || stored === 'EN') return stored
  } catch {
    /* ignore */
  }
  const nav = navigator.language || ''
  return nav.toLowerCase().startsWith('fr') ? 'FR' : nav ? 'EN' : DEFAULT_LOCALE
}

/**
 * Locale state plus the document-level side effects a language toggle owes the
 * browser: `lang` for screen readers and hyphenation, and `title`/description
 * so a shared or bookmarked page matches what is on screen.
 *
 * The first render is always French, because that is the HTML the build
 * prerenders: rendering anything else first would make hydration discard the
 * server markup. A saved or browser preference for English is applied right
 * after, once its chunk has loaded.
 */
export function useLocale() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE)
  const content = getContent(locale)

  const switchTo = useCallback(async (next) => {
    if (!hasContent(next)) {
      try {
        await loadContent(next)
      } catch {
        return // offline and not cached: stay in the language already shown
      }
    }
    setLocale(next)
  }, [])

  useEffect(() => {
    const preferred = preferredLocale()
    if (preferred !== DEFAULT_LOCALE) switchTo(preferred)
  }, [switchTo])

  useEffect(() => {
    document.documentElement.lang = content.locale
    document.title = content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
  }, [content])

  const toggle = useCallback(() => {
    const next = locale === 'FR' ? 'EN' : 'FR'
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    switchTo(next)
  }, [locale, switchTo])

  return { locale, content, toggle }
}
