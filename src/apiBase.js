// The Fidelia API's address, set at build time with VITE_FIDELIA_API_BASE
// (e.g. https://api.fidelia.ci). Empty when unset: the error reporter is then
// off, and the investor-brief button asks for the brief by email instead.
export const API_BASE = (
  import.meta.env.VITE_FIDELIA_API_BASE ||
  import.meta.env.VITE_HOSSOUKO_API_BASE ||
  import.meta.env.VITE_DJASSA_API_BASE ||
  ''
).replace(/\/+$/, '')

// The investor brief is served by the API behind a password
// (fidelia-BE app/api/investor_brief.py), not by this static site.
export function briefUrl(path, locale) {
  if (API_BASE) return `${API_BASE}${path}`
  const subject = locale === 'en' ? 'Fidelia investor brief' : 'Dossier investisseur Fidelia'
  return `mailto:contact.fidelia@regisse.com?subject=${encodeURIComponent(subject)}`
}
