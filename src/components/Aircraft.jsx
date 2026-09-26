import { useLang, media } from '../i18n'

export default function Aircraft() {
  const { t } = useLang()
  return (
    <section className="aircraft section" id="aircraft">
      <div className="container">
        <p className="eyebrow">{t.aircraft.kicker}</p>
        <h2 className="section-title">{t.aircraft.title}</h2>
        <p className="section-lead">{t.aircraft.intro}</p>

        <div className="aircraft__grid">
          <figure className="aircraft__media">
            <img
              className="aircraft__img"
              src={media.images.heroPlane}
              alt=""
              loading="lazy"
              width="1600"
              height="1067"
            />
            <figcaption className="aircraft__caption">
              {t.aircraft.caption}
            </figcaption>
          </figure>

          <div className="aircraft__spec">
            <h3 className="aircraft__spec-title">{t.aircraft.specsTitle}</h3>
            <dl className="aircraft__spec-list">
              {t.aircraft.specs.map((spec) => (
                <div className="aircraft__spec-row" key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="aircraft__note">{t.aircraft.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}