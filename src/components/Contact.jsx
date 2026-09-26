import { content } from '../content'

export default function Contact() {
  const { contact } = content
  return (
    <section className="section section--contact" id="kontakt">
      <div className="container">
        <h2 className="section__heading">{contact.heading}</h2>
        <p className="section__lead">
          Masz pytania, propozycje współpracy albo po prostu chcesz trzymać
          kciuki? Napisz lub wesprzyj lot.
        </p>

        <div className="contact__actions">
          <a className="button" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="button button--support"
            href={contact.support.url}
            target="_blank"
            rel="noreferrer"
          >
            {contact.support.label}
          </a>
        </div>

        <div className="links">
          {contact.links.map((link) => (
            <a
              key={link.label}
              className="link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}