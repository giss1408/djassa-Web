import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/**
 * Build-time prerender (scripts/postbuild.mjs). The French page is rendered to
 * HTML and written into dist/index.html, so on a slow connection the visitor
 * reads the page as soon as the HTML arrives, instead of staring at a blank
 * screen until ~100 KB of JavaScript has downloaded and run. React then
 * hydrates that markup rather than replacing it.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
