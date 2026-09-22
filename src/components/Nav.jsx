import { useEffect, useRef, useState } from 'react'
import { Brand } from './Primitives.jsx'

export function Nav({ content, locale, onToggleLocale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile panel and returns focus to the control that
  // opened it, so keyboard users are not dropped at the top of the document.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (event) => {
      if (
        !panelRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [menuOpen])

  const { nav } = content

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav shell" aria-label={nav.home}>
        <Brand label={nav.home} />

        <div
          id="nav-panel"
          ref={panelRef}
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-link-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            {nav.cta}
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="lang-switch"
            type="button"
            onClick={onToggleLocale}
            aria-label={nav.langLabel}
          >
            <span className={locale === 'FR' ? 'is-active' : ''}>FR</span>
            <span aria-hidden="true">/</span>
            <span className={locale === 'EN' ? 'is-active' : ''}>EN</span>
          </button>

          <a className="nav-cta" href="#contact">
            {nav.cta}
            <span aria-hidden="true">↗</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            ref={toggleRef}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            aria-label={menuOpen ? nav.menuClose : nav.menuOpen}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
