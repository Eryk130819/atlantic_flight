import { useLang, media } from '../i18n'

export default function Media() {
  const { t } = useLang()
  return (
    <section className="media-section section" id="media">
      <div className="container">
        <p className="eyebrow">{t.media.kicker}</p>
        <h2 className="section-title">{t.media.title}</h2>

        <div className="media-section__grid">
          <a
            className="media-featured"
            href={media.links.eska}
            target="_blank"
            rel="noreferrer"
          >
            <span className="media-featured__kicker" aria-hidden="true">
              ▶
            </span>
            <span className="media-featured__body">
              <strong>{t.media.featuredTitle}</strong>
              <span>{t.media.featuredText}</span>
              <small>{t.media.featuredLang}</small>
            </span>
          </a>

          <div className="media-list">
            <h3 className="media-list__title">{t.media.listTitle}</h3>
            <ul className="media-list__items">
              {t.media.list.map((item) => (
                <li key={item.title}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <span className="media-list__medium">{item.medium}</span>
                    <span className="media-list__title-text">{item.title}</span>
                    <span className="media-list__lang">{item.lang}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="media-press">
          <h3 className="media-press__title">{t.media.pressTitle}</h3>
          <p className="media-press__text">{t.media.pressText}</p>
        </div>
      </div>
    </section>
  )
}