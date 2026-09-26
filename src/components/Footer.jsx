import { useLang, media } from '../i18n'

export default function Footer() {
  const { lang, t, setLang } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__brand-name">{t.footer.brand}</p>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label={t.footer.navLabel}>
          <p className="footer__heading">{t.footer.navLabel}</p>
          {t.nav.links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__profiles">
          <p className="footer__heading">{t.footer.profilesLabel}</p>
          <a href={media.links.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={media.links.patronite} target="_blank" rel="noreferrer">
            Patronite
          </a>
          <a href={media.links.firstSoloFlight} target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>

        <div className="footer__lang">
          <p className="footer__heading">{t.footer.langLabel}</p>
          <div className="header__lang" role="group" aria-label={t.footer.langLabel}>
            <button
              type="button"
              className={lang === 'pl' ? 'is-active' : ''}
              aria-pressed={lang === 'pl'}
              onClick={() => setLang('pl')}
            >
              PL
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="container footer__credits">
        <p>{t.footer.credits}</p>
      </div>
    </footer>
  )
}