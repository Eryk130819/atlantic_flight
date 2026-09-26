import { useLang, media } from '../i18n'

export default function TrustStrip() {
  const { t } = useLang()
  return (
    <section className="trust" aria-label={t.trust.heading}>
      <div className="container trust__grid">
        {t.trust.facts.map((fact) => (
          <div className="trust__item" key={fact.value}>
            <span className="trust__value">{fact.value}</span>
            <span className="trust__label">{fact.label}</span>
          </div>
        ))}
        <a className="trust__eska" href={media.links.eska} target="_blank" rel="noreferrer">
          {t.trust.eska}
        </a>
      </div>
    </section>
  )
}