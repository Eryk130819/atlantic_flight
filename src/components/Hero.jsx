import { useLang, media } from '../i18n'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">{t.hero.kicker}</p>
            <h1 className="hero__title">
              {t.hero.title1}
              <br />
              <em>{t.hero.title2}</em>
            </h1>
            <p className="hero__subtitle">{t.hero.subtitle}</p>
            <p className="hero__caption">{t.hero.caption}</p>
            <div className="hero__cta">
              <a
                className="button"
                href="#partners"
                onClick={(event) => {
                  event.preventDefault()
                  document
                    .getElementById('partners')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                className="button button--ghost"
                href={media.links.patronite}
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <figure className="hero__media">
            <img
              className="hero__img"
              src={media.images.heroPlane}
              alt=""
              width="1600"
              height="1067"
            />
            <figcaption className="hero__img-caption">
              {t.aircraft.caption}
            </figcaption>
          </figure>
        </div>

        <div className="hero__interviews">
          <p className="hero__interviews-title">{t.hero.interviewsTitle}</p>
          {t.hero.interviews.map((item) => (
            <p key={item.url}>
              {item.before}
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.link}
              </a>
              {item.after}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
