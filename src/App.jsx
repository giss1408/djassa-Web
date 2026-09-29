import { Closing } from './components/Closing.jsx'
import { Concept } from './components/Concept.jsx'
import { Guardrails } from './components/Guardrails.jsx'
import { Hero } from './components/Hero.jsx'
import { Landscape } from './components/Landscape.jsx'
import { Learn } from './components/Learn.jsx'
import { LearnRoi } from './components/LearnRoi.jsx'
import { LearnSecurity } from './components/LearnSecurity.jsx'
import { Market } from './components/Market.jsx'
import { Metric } from './components/Metric.jsx'
import { Model } from './components/Model.jsx'
import { Nav } from './components/Nav.jsx'
import { Roadmap } from './components/Roadmap.jsx'
import { Status } from './components/Status.jsx'
import { Thesis } from './components/Thesis.jsx'
import { Word } from './components/Word.jsx'
import { useLocale } from './hooks/useLocale.js'
import { useReveal } from './hooks/useReveal.js'
import './App.css'

/**
 * Narrative order is deliberate and mirrors how the docs argue the case:
 * the name (what djassa means) → concept (one habit) → demo (the two apps,
 * screen by screen) → what the screens protect → what they earn → market (the
 * gap) → positioning (where we don't go) → thesis (why it compounds) → model
 * (how it earns) → metric (what governs) → execution (phases and gates) →
 * red lines → real build status → the ask.
 *
 * The walkthrough sits immediately after the concept, before the market: an
 * investor who has just been told the whole product rests on one habit should
 * see that habit in the actual app before being asked to weigh a market size.
 * Its security and revenue sections follow it directly, so the three questions
 * a demo provokes — is it real, is it safe, does it pay — are answered in that
 * order rather than scattered down the page.
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
        <Word content={content} />
        <Concept content={content} />
        <Learn content={content} />
        <LearnSecurity content={content} />
        <LearnRoi content={content} />
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
