import { useState } from 'react'
import { useLang, media } from '../i18n'

const EMAIL = 'kontakt@tacz-atlantyk.pl'

export default function Final() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const el = document.createElement('textarea')
      el.value = EMAIL
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="final section" id="final">
      <div className="container">
        <h2 className="final__title">{t.final.title}</h2>
        <p className="final__text">{t.final.text}</p>

        <div className="final__cta">
          <a className="button" href={`mailto:${EMAIL}?subject=Partnership`}>
            {t.final.ctaPrimary}
          </a>
          <a
            className="button button--ghost"
            href={media.links.patronite}
            target="_blank"
            rel="noreferrer"
          >
            {t.final.ctaSecondary}
          </a>
        </div>

        <div className="final__email">
          <span className="final__email-label">{t.final.emailLabel}:</span>
          <span className="final__email-value">{EMAIL}</span>
          <button type="button" className="final__copy" onClick={copyEmail}>
            {copied ? t.final.copied : t.final.copy}
          </button>
        </div>
        <p className="final__email-note">{t.final.emailNote}</p>
      </div>
    </section>
  )
}