import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useHeaderScroll } from '../hooks/useHeaderScroll'

export default function Header() {
  const { lang, t, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const { scrolled, hidden } = useHeaderScroll()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const switchLang = (next) => {
    setLang(next)
    setOpen(false)
  }

  const goTo = (id) => {
    setOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`header${scrolled ? ' is-scrolled' : ''}${
        hidden && !open ? ' is-hidden' : ''
      }`}
    >
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <div className="header__inner">
        <a className="header__brand" href="#top" onClick={() => goTo('top')}>
          {t.nav.brand}
        </a>

        <nav className="header__nav" aria-label="Primary">
          {t.nav.links.map((link) => (
            <button key={link.id} type="button" onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header__right">
          <div className="header__lang" role="group" aria-label={t.footer.langLabel}>
            <button
              type="button"
              className={lang === 'pl' ? 'is-active' : ''}
              aria-pressed={lang === 'pl'}
              onClick={() => switchLang('pl')}
            >
              PL
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => switchLang('en')}
            >
              EN
            </button>
          </div>

          <a
            className="button button--sm"
            href="https://patronite.pl/TACZ"
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="header__menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t.a11y.closeMenu : t.a11y.openMenu}</span>
            <span aria-hidden="true" className="header__menu-bar" />
            <span aria-hidden="true" className="header__menu-bar" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="header__mobile" id="mobile-menu" aria-label="Mobile">
          {t.nav.links.map((link) => (
            <button key={link.id} type="button" onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
          <a
            className="button"
            href="https://patronite.pl/TACZ"
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}