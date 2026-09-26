import { useLang, media } from '../i18n'

export default function Patronite() {
  const { t } = useLang()
  return (
    <section className="patronite section" id="patronite">
      <div className="container patronite__inner">
        <div>
          <p className="eyebrow eyebrow--light">{t.patronite.kicker}</p>
          <h2 className="section-title section-title--light">
            {t.patronite.title}
          </h2>
          <p className="patronite__text">{t.patronite.text}</p>
        </div>
        <a
          className="button button--light"
          href={media.links.patronite}
          target="_blank"
          rel="noreferrer"
        >
          {t.patronite.cta}
        </a>
      </div>
    </section>
  )
}