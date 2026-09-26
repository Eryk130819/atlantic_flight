import { useLang } from '../i18n'

export default function Partners() {
  const { t } = useLang()
  return (
    <section className="partners section" id="partners">
      <div className="container">
        <p className="eyebrow">{t.partners.kicker}</p>
        <h2 className="section-title">{t.partners.title}</h2>
        <p className="section-lead">{t.partners.intro}</p>

        <div className="partners__grid">
          <article className="partners__block">
            <h3 className="partners__block-title">{t.partners.whyTitle}</h3>
            <p>{t.partners.why}</p>
          </article>
          <article className="partners__block">
            <h3 className="partners__block-title">{t.partners.needTitle}</h3>
            <p>{t.partners.need}</p>
          </article>
        </div>

        <h3 className="partners__forms-title">{t.partners.formsTitle}</h3>
        <ul className="partners__forms">
          {t.partners.forms.map((form) => (
            <li key={form}>{form}</li>
          ))}
        </ul>

        <div className="partners__cta">
          <p>{t.partners.contactText}</p>
          <a className="button" href="#final">
            {t.partners.cta}
          </a>
          <span className="partners__email-note">{t.partners.emailNote}</span>
        </div>
      </div>
    </section>
  )
}