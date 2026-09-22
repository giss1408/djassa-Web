import { Closing } from './components/Closing.jsx'
import { Concept } from './components/Concept.jsx'
import { Guardrails } from './components/Guardrails.jsx'
import { Hero } from './components/Hero.jsx'
import { Landscape } from './components/Landscape.jsx'
import { Market } from './components/Market.jsx'
import { Metric } from './components/Metric.jsx'
import { Model } from './components/Model.jsx'
import { Nav } from './components/Nav.jsx'
import { Roadmap } from './components/Roadmap.jsx'
import { Status } from './components/Status.jsx'
import { Thesis } from './components/Thesis.jsx'
import { useLocale } from './hooks/useLocale.js'
import { useReveal } from './hooks/useReveal.js'
import './App.css'

/**
 * Narrative order is deliberate and mirrors how the docs argue the case:
 * concept (one habit) → market (the gap) → positioning (where we don't go) →
 * thesis (why it compounds) → model (how it earns) → metric (what governs) →
 * execution (phases and gates) → red lines → real build status → the ask.
 */
export default function App() {
  const { locale, content, toggle } = useLocale()
  useReveal([locale])

  return (
    <>
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>

      <Nav content={content} locale={locale} onToggleLocale={toggle} />

      <main id="main">
        <Hero content={content} />
        <Concept content={content} />
        <Market content={content} />
        <Landscape content={content} />
        <Thesis content={content} />
        <Model content={content} />
        <Metric content={content} />
        <Roadmap content={content} />
        <Guardrails content={content} />
        <Status content={content} />
      </main>

      <Closing content={content} />
    </>
  )
}
