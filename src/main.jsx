import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './index.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build ships prerendered HTML (src/entry-server.jsx): attach
// to it. The dev server serves an empty root: render from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)

// Offline and repeat visits: the service worker keeps the page and its assets,
// so a merchant demo still opens with no signal. Production only.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
