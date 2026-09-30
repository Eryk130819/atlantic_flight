import { useState } from 'react'
import { media, useLang } from '../i18n'
import VideoModal from './VideoModal.jsx'

export default function Preparations() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  const goToVideos = () => {
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="preparations section" id="preparations">
      <div className="container">
        <p className="eyebrow">{t.preparations.kicker}</p>
        <h2 className="section-title">{t.preparations.title}</h2>
        <p className="section-lead">{t.preparations.intro}</p>

        <ol className="preparations__timeline">
          <li className="preparations__step preparations__step--done">
            <span className="preparations__step-mark" aria-hidden="true">
              ✓
            </span>
            <span className="preparations__step-text">
              <strong>{t.preparations.featuredTitle}</strong>
              <span>{t.preparations.milestoneText}</span>
            </span>
            <button
              type="button"
              className="button button--ghost button--sm"
              onClick={() => setOpen(true)}
            >
              {t.preparations.play}
            </button>
          </li>

          <li className="preparations__step preparations__step--now">
            <span className="preparations__step-mark" aria-hidden="true">
              ▶
            </span>
            <span className="preparations__step-text">
              <strong>{t.preparations.nowTitle}</strong>
              <span>{t.preparations.nowText}</span>
            </span>
            <button
              type="button"
              className="button button--sm"
              onClick={goToVideos}
            >
              {t.preparations.nowCta}
            </button>
          </li>
        </ol>
      </div>

      {open && (
        <VideoModal
          video={{
            youtubeId: media.youtube.firstSoloFlight,
            title: t.preparations.featuredTitle,
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  )
}
