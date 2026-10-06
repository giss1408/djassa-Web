// Uncaught errors from the site, sent to the Hossouko API (POST /api/client-events)
// so they show in the same Grafana dashboard as the apps'. No SDK, no cookie,
// no visitor id: the message with digit runs removed, the stack, the browser
// family, a count. At most 10 distinct errors per page view, sent together a
// few seconds after the first one or when the tab is hidden.
//
// Off unless the build sets VITE_HOSSOUKO_API_BASE (e.g. https://api.hossouko.ci),
// and that API's CORS_ORIGINS must list this site's origin.

const API_BASE = (import.meta.env.VITE_HOSSOUKO_API_BASE || '').replace(/\/+$/, '')
const MAX_DISTINCT = 10

const queue = new Map()
let timer = 0

const scrub = (text) => String(text || '').replace(/\+?\d[\d ]{3,}\d/g, '<num>')

function browser() {
  const ua = navigator.userAgent
  const match = ua.match(/(Firefox|Edg|OPR|Chrome|Safari)\/(\d+)/)
  return match ? `${match[1]} ${match[2]}` : 'other'
}

function record(error, message) {
  const stack = (error && error.stack) || ''
  const text = scrub((error && error.message) || message || 'Unknown error').slice(0, 500)
  const key = `${text}|${stack.split('\n').slice(0, 3).join('|')}`
  const existing = queue.get(key)
  if (existing) {
    existing.count += 1
  } else {
    if (queue.size >= MAX_DISTINCT) return
    queue.set(key, {
      kind: 'error',
      message: text,
      stack: stack.split('\n').slice(0, 25).join('\n') || null,
      count: 1,
      occurred_at: new Date().toISOString(),
    })
  }
  clearTimeout(timer)
  timer = setTimeout(flush, 5000)
}

function flush() {
  clearTimeout(timer)
  if (!queue.size) return
  const body = JSON.stringify({
    app: 'web',
    app_version: __APP_VERSION__,
    platform: 'web',
    os_version: browser(),
    events: [...queue.values()],
  })
  queue.clear()
  // keepalive lets the request finish while the tab closes.
  fetch(`${API_BASE}/api/client-events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {})
}

export function installErrorReporter() {
  if (!API_BASE || !import.meta.env.PROD) return
  window.addEventListener('error', (event) => record(event.error, event.message))
  window.addEventListener('unhandledrejection', (event) => record(event.reason, String(event.reason)))
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
  })
}
