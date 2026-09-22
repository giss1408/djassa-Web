import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_LOCALE, getContent } from '../content/index.js'

const STORAGE_KEY = 'djassa.locale'

function readInitialLocale() {
  // localStorage throws in private-mode and blocked-cookie contexts.
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'FR' || stored === 'EN') return stored
  } catch {
    /* ignore */
  }
  const nav = typeof navigator === 'undefined' ? '' : navigator.language || ''
  return nav.toLowerCase().startsWith('fr') ? 'FR' : nav ? 'EN' : DEFAULT_LOCALE
}

/**
 * Locale state plus the document-level side effects a language toggle owes the
 * browser: `lang` for screen readers and hyphenation, and `title`/description
 * so a shared or bookmarked page matches what is on screen.
 */
export function useLocale() {
  const [locale, setLocale] = useState(readInitialLocale)
  const content = getContent(locale)

  useEffect(() => {
    document.documentElement.lang = content.locale
    document.title = content.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale, content])

  const toggle = useCallback(() => setLocale((prev) => (prev === 'FR' ? 'EN' : 'FR')), [])

  return { locale, content, toggle }
}
