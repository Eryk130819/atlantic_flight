import { useState } from 'react'
import { media, useLang } from '../i18n'

function BioPhoto({ image, name, caption }) {
  const [missing, setMissing] = useState(false)

  return (
    <figure className="bio-card__media">
      {missing ? (
        <div className="bio-card__placeholder" role="img" aria-label={name} />
      ) : (
        <img
          className="bio-card__img"
          src={image}
          alt={name}
          loading="lazy"
          width="1000"
          height="1250"
          onError={() => setMissing(true)}
        />
      )}
      <figcaption className="bio-card__caption">{caption}</figcaption>
    </figure>
  )
}

export default function Biographies() {
  const { t } = useLang()

  const people = [
    {
      key: 'charles',
      image: media.images.lindbergh,
      data: t.biographies.charles,
    },
    {
      key: 'krzysztof',
      image: media.images.pilotBio,
      data: t.biographies.krzysztof,
    },
  ]

  return (
    <section className="biographies section" id="biographies">
      <div className="container">
        <p className="eyebrow">{t.biographies.kicker}</p>
        <h2 className="section-title">{t.biographies.title}</h2>
        <p className="section-lead">{t.biographies.intro}</p>

        <div className="biographies__grid">
          {people.map(({ key, image, data }) => (
            <article className="bio-card" key={key}>
              <BioPhoto
                image={image}
                name={data.name}
                caption={data.caption}
              />

              <h3 className="bio-card__name">{data.name}</h3>
              <p className="bio-card__meta">{data.meta}</p>
              {data.bio.map((paragraph) => (
                <p className="bio-card__text" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
