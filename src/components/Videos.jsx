import { useState } from 'react'
import { media, useLang } from '../i18n'
import VideoModal from './VideoModal.jsx'

export default function Videos() {
  const { t } = useLang()
  const [active, setActive] = useState(null)

  return (
    <section className="videos section" id="videos">
      <div className="container">
        <p className="eyebrow">{t.videos.kicker}</p>
        <h2 className="section-title">{t.videos.title}</h2>
        <p className="section-lead">{t.videos.intro}</p>

        <div className="videos__grid">
          {media.videos.map((src, index) => (
            <button
              key={src}
              type="button"
              className="video-tile"
              onClick={() => setActive(src)}
              aria-haspopup="dialog"
              aria-label={`${t.videos.play} ${index + 1}`}
            >
              <video
                className="video-tile__preview"
                src={`${src}#t=0.5`}
                preload="metadata"
                muted
                playsInline
                tabIndex={-1}
                aria-hidden="true"
              />
              <span className="video-tile__play" aria-hidden="true">
                ▶
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <VideoModal
          video={{ src: active, title: t.videos.title }}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}
