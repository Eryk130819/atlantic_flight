import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { useCountdown } from '../hooks/useCountdown'
import { useHeaderScroll } from '../hooks/useHeaderScroll'

const pad = (value) => String(value).padStart(2, '0')

export default function CountdownBadge() {
  const { t } = useLang()
  const remaining = useCountdown(t.countdown.date)
  const { hidden } = useHeaderScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('countdown')
      setVisible(el ? el.getBoundingClientRect().bottom <= 64 : false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`countdown-badge${visible ? ' is-visible' : ''}${
        visible && hidden ? ' is-top' : ''
      }`}
    >
      <span className="countdown-badge__days">
        {remaining.days} {t.countdown.days}
      </span>
      <span className="countdown-badge__time">
        {pad(remaining.hours)}:{pad(remaining.minutes)}:{pad(remaining.seconds)}
      </span>
    </div>
  )
}
