import { useReveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export default function History() {
  const { t } = useLang()
  const { ref, visible } = useReveal(0.2)

  return (
    <section className="history section" id="expedition">
      <div className="container">
        <p className="eyebrow">{t.history.kicker}</p>
        <div className={`history__clamp${visible ? ' is-visible' : ''}`} ref={ref}>
          <div className="history__col history__col--old">
            <span className="history__year">{t.history.oldYear}</span>
            <h2 className="history__heading">{t.history.oldTitle}</h2>
            <p>{t.history.oldText}</p>
          </div>

          <div className="history__divider" aria-hidden="true">
            <span />
          </div>

          <div className="history__col history__col--new">
            <span className="history__year history__year--new">
              {t.history.newYear}
            </span>
            <h2 className="history__heading">{t.history.newTitle}</h2>
            <p>{t.history.newText}</p>
          </div>
        </div>
        <p className="history__clamp-note">{t.history.clamp}</p>
      </div>
    </section>
  )
}