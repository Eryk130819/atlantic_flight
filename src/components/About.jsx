import { content } from '../content'
import PlaceholderImage from './PlaceholderImage.jsx'

export default function About() {
  const { about } = content
  return (
    <section className="section section--about" id="o-projekcie">
      <div className="container">
        <div className="section__grid">
          <div className="section__media">
            <PlaceholderImage
              src={about.imagePath}
              label={about.imageLabel}
              aspect="4 / 5"
            />
          </div>
          <div className="section__body">
            <h2 className="section__heading">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="section__text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}