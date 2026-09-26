import Map from './Map.jsx'
import { useLang } from '../i18n'

export default function Route() {
  const { t } = useLang()
  return (
    <section className="route-section section" id="route">
      <div className="container">
        <p className="eyebrow">{t.route.kicker}</p>
        <h2 className="section-title">{t.route.title}</h2>
        <p className="section-lead">{t.route.intro}</p>

        <div className="route-section__grid">
          <Map />

          <aside className="route-facts">
            <h3 className="route-facts__title">{t.route.factsTitle}</h3>
            <dl className="route-facts__list">
              {t.route.facts.map((fact) => (
                <div className="route-facts__row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}