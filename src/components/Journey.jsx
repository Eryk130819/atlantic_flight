import { content } from '../content'

export default function Journey() {
  const { journey } = content
  return (
    <section className="section section--journey" id="trasa">
      <div className="container">
        <h2 className="section__heading">{journey.heading}</h2>
        <p className="section__lead">{journey.intro}</p>

        <ol className="route">
          {journey.stops.map((stop) => (
            <li key={stop.code} className="route__stop">
              <span className="route__code">{stop.code}</span>
              <span className="route__city">{stop.city}</span>
              <span className="route__note">{stop.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}