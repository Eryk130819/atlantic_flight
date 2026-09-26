import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

export default function Preparations() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [open])

  const statusLabel = (status) => {
    if (status === 'done') return '✓'
    if (status === 'ongoing') return '●'
    return '○'
  }

  return (
    <section className="preparations section" id="preparations">
      <div className="container">
        <p className="eyebrow">{t.preparations.kicker}</p>
        <h2 className="section-title">{t.preparations.title}</h2>
        <p className="section-lead">{t.preparations.intro}</p>

        <button
          type="button"
          className="preparations__featured"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          <span className="preparations__play" aria-hidden="true">▶</span>
          <span className="preparations__featured-text">
            <strong>{t.preparations.featuredTitle}</strong>
            <span>{t.preparations.featuredDesc}</span>
            <small>{t.preparations.featuredDate}</small>
          </span>
        </button>

        <div className="preparations__timeline">
          <h3 className="preparations__timeline-title">
            {t.preparations.timelineTitle}
          </h3>
          <ol className="preparations__steps">
            {t.preparations.timeline.map((step) => (
              <li
                key={step.title}
                className={`preparations__step preparations__step--${step.status}`}
              >
                <span className="preparations__step-mark" aria-hidden="true">
                  {statusLabel(step.status)}
                </span>
                <span className="preparations__step-label">{step.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {open && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={t.preparations.featuredTitle}
          ref={dialogRef}
        >
          <div className="modal__backdrop" onClick={() => setOpen(false)} />
          <div className="modal__dialog">
            <button
              ref={closeRef}
              type="button"
              className="modal__close"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">{t.a11y.closeVideo}</span>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal__video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/HHWV781atgo`}
                title={t.preparations.featuredTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}