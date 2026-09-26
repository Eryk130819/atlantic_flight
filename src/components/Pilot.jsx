import { useLang, media } from '../i18n'

export default function Pilot() {
  const { t } = useLang()
  return (
    <section className="pilot section" id="pilot">
      <div className="container pilot__grid">
        <figure className="pilot__media">
          <img
            className="pilot__img"
            src={media.images.pilot}
            alt=""
            loading="lazy"
            width="1200"
            height="1500"
          />
          <figcaption className="pilot__caption">{t.pilot.caption}</figcaption>
        </figure>

        <div className="pilot__body">
          <p className="eyebrow">{t.pilot.kicker}</p>
          <h2 className="section-title">{t.pilot.title}</h2>
          <p className="section-lead">{t.pilot.bio}</p>

          <h3 className="pilot__facts-title">{t.pilot.factsTitle}</h3>
          <ul className="pilot__facts">
            {t.pilot.facts.map((fact) => (
              <li key={fact.title}>
                <strong>{fact.title}</strong>
                <span>{fact.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}