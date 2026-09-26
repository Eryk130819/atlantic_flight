import { content } from '../content'
import PlaceholderImage from './PlaceholderImage.jsx'

export default function PlaneDetails() {
  const { plane } = content
  return (
    <section className="section section--plane" id="samolot">
      <div className="container">
        <div className="section__grid section__grid--reverse">
          <div className="section__media">
            <PlaceholderImage
              src={plane.imagePath}
              label={plane.imageLabel}
              aspect="4 / 3"
            />
          </div>
          <div className="section__body">
            <h2 className="section__heading">{plane.heading}</h2>
            <dl className="facts">
              {plane.facts.map((fact) => (
                <div key={fact.label} className="facts__row">
                  <dt className="facts__label">{fact.label}</dt>
                  <dd className="facts__value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}