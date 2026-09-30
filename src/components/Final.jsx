import { useLang, media } from '../i18n'

export default function Final() {
  const { t } = useLang()

  return (
    <section className="final section" id="final">
      <div className="container">
        <h2 className="final__title">{t.final.title}</h2>
        <p className="final__text">{t.final.text}</p>

        <div className="final__cta">
          <a
            className="button"
            href={media.links.facebook}
            target="_blank"
            rel="noreferrer"
          >
            {t.final.ctaPrimary}
          </a>
          <a
            className="button button--ghost"
            href={media.links.patronite}
            target="_blank"
            rel="noreferrer"
          >
            {t.final.ctaSecondary}
          </a>
        </div>

        <p className="final__contact-note">{t.final.contactNote}</p>
      </div>
    </section>
  )
}
