import { useLang, media } from '../i18n'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
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
            <a className="button" href="#partners">
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
    </section>
  )
}