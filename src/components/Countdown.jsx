import { useLang } from '../i18n'
import { useCountdown } from '../hooks/useCountdown'

export default function Countdown() {
  const { t } = useLang()
  const remaining = useCountdown(t.countdown.date)

  const units = [
    { key: 'days', value: remaining.days, label: t.countdown.days },
    {
      key: 'hours',
      value: String(remaining.hours).padStart(2, '0'),
      label: t.countdown.hours,
    },
    {
      key: 'minutes',
      value: String(remaining.minutes).padStart(2, '0'),
      label: t.countdown.minutes,
    },
    {
      key: 'seconds',
      value: String(remaining.seconds).padStart(2, '0'),
      label: t.countdown.seconds,
    },
  ]

  return (
    <section className="countdown" id="countdown" aria-label={t.countdown.kicker}>
      <div className="container">
        <p className="eyebrow eyebrow--light">{t.countdown.kicker}</p>
        <h2 className="countdown__title">{t.countdown.title}</h2>

        {remaining.diff > 0 ? (
          <div className="countdown__grid" role="timer">
            {units.map((unit) => (
              <div className="countdown__unit" key={unit.key}>
                <span className="countdown__value">{unit.value}</span>
                <span className="countdown__label">{unit.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="countdown__done">{t.countdown.done}</p>
        )}

        <p className="countdown__caption">{t.countdown.caption}</p>
      </div>
    </section>
  )
}
