import { useEffect, useRef } from 'react'
import { useLang } from '../i18n'

export default function VideoModal({ video, onClose }) {
  const { t } = useLang()
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={video.title || t.videos.title}
    >
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__dialog">
        <button
          ref={closeRef}
          type="button"
          className="modal__close"
          onClick={onClose}
        >
          <span className="sr-only">{t.a11y.closeVideo}</span>
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal__video">
          {video.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={video.src}
              controls
              autoPlay
              playsInline
              aria-label={video.title}
            />
          )}
        </div>
      </div>
    </div>
  )
}
