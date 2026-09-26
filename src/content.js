// Jedno miejsce do edycji treści, zdjęć i linków.
// Wystarczy podmienić wartości — reszta strony zaktualizuje się sama.
export const content = {
  hero: {
    kicker: 'Nowy Jork → Europa',
    title: 'Samolotem przez Atlantyk',
    subtitle:
      'Mały samolot, wielka woda i marzenie, które po prostu musi wystartować.',
  },
  about: {
    heading: 'O wyzwaniu',
    paragraphs: [
      'Przelot przez Atlantyk to nie tylko trasa — to test przygotowania, cierpliwości i szacunku do żywiołu. Ocean nie wybacza błędów, ale nagradza tych, którzy planują.',
      'Ta strona to zapis przygotowań do lotu: trasa, samolot, logistyka i wszystkie rzeczy, o których pilot musi pamiętać, zanim odwiąże linę.',
    ],
    imagePath: '/images/pilot/pilot.jpg', // np. '/images/pilot/pilot.jpg'
    imageLabel: 'Zdjęcie pilota',
  },
  journey: {
    heading: 'Trasa',
    intro:
      'Śladem Spirit of St. Louis. W 1927 roku Charles Lindbergh przeleciał non stop z Nowego Jorku do Paryża — ok. 5800 km w 33,5 godziny.',
    imagePath: '', // np. '/images/route/trasa.jpg'
    imageLabel: 'Mapa trasy',
    stops: [
      { code: 'NY', city: 'Nowy Jork', note: 'Roosevelt Field — start' },
      { code: 'NF', city: 'St. John’s', note: 'Nowa Fundlandia — ostatni ląd' },
      { code: 'IR', city: 'Valentia', note: 'Irlandia — pierwsza Europa' },
      { code: 'PR', city: 'Paryż', note: 'Le Bourget — cel po 33,5 h' },
    ],
  },
  plane: {
    heading: 'Samolot',
    imagePath: '', // np. '/images/plane/samolot.jpg'
    imageLabel: 'Zdjęcie samolotu',
    facts: [
      { label: 'Model', value: 'Ryan NYP' },
      { label: 'Nazwa', value: 'Spirit of St. Louis' },
      { label: 'Rekord', value: 'Nowy Jork → Paryż, 1927' },
      { label: 'Czas lotu', value: '33,5 godziny' },
    ],
  },
  contact: {
    heading: 'Kontakt',
    email: 'kontakt@example.com', // zmień na prawdziwy adres
    support: {
      label: 'Wesprzyj lot na Patronite',
      url: 'https://patronite.pl/TACZ',
    },
    links: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/krzysztof.taczalski',
      },
      {
        label: 'Pierwszy samodzielny lot (YouTube)',
        url: 'https://www.youtube.com/watch?feature=shared&v=HHWV781atgo',
      },
      {
        label: 'Audycja w Radio Eska',
        url: 'https://krasnik.eska.pl/chce-przeleciec-atlantyk-jak-100-lat-temu-krzysztof-taczalski-zbiera-pieniadze-na-niezwykly-lot-aa-KVYJ-75vs-eKkV.html',
      },
    ],
  },
  footer: {
    note: 'Krzysztof Taczalski — samolotem przez Atlantyk.',
  },
}