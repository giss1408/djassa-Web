import { fr } from './fr.js'

export const LOCALES = ['FR', 'EN']
export const DEFAULT_LOCALE = 'FR'

/**
 * French ships in the main bundle: it is the default, and it is what the
 * build prerenders into index.html. English (about a third of all the copy)
 * is a separate chunk fetched only when a visitor asks for it, so nobody on a
 * prepaid bundle pays for a language they do not read.
 */
const dictionaries = { FR: fr }

export function getContent(locale) {
  return dictionaries[locale] ?? fr
}

export function hasContent(locale) {
  return locale in dictionaries
}

export async function loadContent(locale) {
  if (!dictionaries[locale] && locale === 'EN') {
    dictionaries.EN = (await import('./en.js')).en
  }
  return getContent(locale)
}

/**
 * Structural parity check between dictionaries.
 *
 * The previous version of this page swapped only six strings on language
 * change, which left most of the page in French while the toggle claimed "EN".
 * This walks both trees and reports divergent key paths and array lengths so
 * that class of bug fails loudly in development instead of shipping.
 */
function diffShape(a, b, path = '') {
  const problems = []
  const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      problems.push(`${path}: array on one side only`)
      return problems
    }
    if (a.length !== b.length) {
      problems.push(`${path}: length ${a.length} (FR) vs ${b.length} (EN)`)
    }
    const n = Math.min(a.length, b.length)
    for (let i = 0; i < n; i += 1) problems.push(...diffShape(a[i], b[i], `${path}[${i}]`))
    return problems
  }

  if (isObj(a) || isObj(b)) {
    if (!isObj(a) || !isObj(b)) {
      problems.push(`${path}: object on one side only`)
      return problems
    }
    for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
      const next = path ? `${path}.${key}` : key
      if (!(key in a)) problems.push(`${next}: missing in FR`)
      else if (!(key in b)) problems.push(`${next}: missing in EN`)
      else problems.push(...diffShape(a[key], b[key], next))
    }
    return problems
  }

  if (typeof a === 'string' && typeof b === 'string' && (!a.trim() || !b.trim())) {
    problems.push(`${path}: empty string`)
  }
  return problems
}

export { diffShape }

// Development only: the dynamic import sits behind a constant the production
// build folds to false, so this never pulls English into the main bundle.
if (import.meta.env?.DEV) {
  import('./en.js').then(({ en }) => {
    const problems = diffShape(fr, en)
    if (problems.length) {
      console.error('[djassa i18n] FR/EN content shape mismatch:\n' + problems.join('\n'))
    }
  })
}
