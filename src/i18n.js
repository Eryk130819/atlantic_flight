import { createContext, createElement, useContext, useEffect, useState } from 'react'

// Obrazy i linki — jedyne źródło prawdy dla mediów.
export const media = {
  images: {
    heroPlane: '/images/plane/plane.jpg',
    pilot: '/images/pilot/pilot.jpg',
    ocean: '/images/scene/scene.png',
  },
  links: {
    patronite: 'https://patronite.pl/TACZ',
    facebook: 'https://www.facebook.com/krzysztof.taczalski',
    firstSoloFlight:
      'https://www.youtube.com/watch?feature=shared&v=HHWV781atgo',
    eska: 'https://krasnik.eska.pl/chce-przeleciec-atlantyk-jak-100-lat-temu-krzysztof-taczalski-zbiera-pieniadze-na-niezwykly-lot-aa-KVYJ-75vs-eKkV.html',
  },
}

const en = {
  lang: 'en',
  meta: {
    title: 'TACZ · Atlantyk 2027',
    description:
      'A century later, across the Atlantic again. Krzysztof Taczalski’s 2027 transatlantic expedition on a Spirit of St. Louis type aircraft.',
  },
  nav: {
    brand: 'TACZ · ATLANTYK 2027',
    links: [
      { id: 'expedition', label: 'Expedition' },
      { id: 'route', label: 'Route' },
      { id: 'aircraft', label: 'Aircraft' },
      { id: 'pilot', label: 'Pilot' },
      { id: 'preparations', label: 'Preparations' },
      { id: 'partners', label: 'Partners' },
      { id: 'media', label: 'Media' },
    ],
    cta: 'Support the expedition',
  },
  hero: {
    kicker: 'A century later',
    title1: 'Across the Atlantic',
    title2: 'again.',
    subtitle:
      'Krzysztof Taczalski — known as TACZ — is preparing a 2027 transatlantic flight on an aircraft of the Spirit of St. Louis type, a century after Lindbergh’s flight.',
    caption: 'New York → Paris · 2027',
    ctaPrimary: 'Become a partner',
    ctaSecondary: 'Support on Patronite',
  },
  trust: {
    heading: 'Facts first',
    facts: [
      { value: '2027', label: 'The expedition year, a century after Lindbergh’s flight.' },
      { value: 'New York → Paris', label: 'The confirmed route relation for the project.' },
      { value: 'Spirit of St. Louis type', label: 'The aircraft family chosen for the flight.' },
    ],
    eska: 'Listen to the Eska Radio interview →',
  },
  history: {
    kicker: 'Why 2027',
    oldYear: '1927',
    oldTitle: 'The flight that started it',
    oldText:
      'In May 1927, Charles Lindbergh flew solo and non-stop from New York to Paris in 33.5 hours aboard the Spirit of St. Louis (Ryan NYP). It was the first solo non-stop transatlantic flight.',
    newYear: '2027',
    newTitle: 'A century later',
    newText:
      'In 2027 Krzysztof Taczalski plans his own crossing on an aircraft of the same type — his own expedition, paying homage to that flight.',
    clamp: '100 years · New York → Paris · two pilots',
  },
  route: {
    kicker: 'Route',
    title: 'The ocean as the scale of the challenge',
    intro:
      'The Atlantic as a schematic relation between New York and Paris. The exact waypoints are part of the plan being prepared.',
    mapNote: 'Schematic route, not an approved flight plan.',
    from: 'New York',
    to: 'Paris',
    legend: 'Schematic route',
    factsTitle: 'At a glance',
    facts: [
      { label: 'Expedition year', value: '2027' },
      { label: 'Relation', value: 'New York → Paris' },
      { label: 'Historical flight', value: '1927 · solo · 33.5 h' },
      { label: 'Historical distance', value: '≈ 5,800 km (≈ 3,600 mi)' },
    ],
  },
  aircraft: {
    kicker: 'Aircraft',
    title: 'The material hero',
    intro:
      'An aircraft of the Spirit of St. Louis type (Ryan NYP) — the same machine family that carried Lindbergh across the Atlantic.',
    caption: 'The Spirit of St. Louis type aircraft for the expedition',
    specsTitle: 'Key characteristics',
    specs: [
      { label: 'Type', value: 'Ryan NYP' },
      { label: 'Configuration', value: 'Single-engine, high-wing monoplane' },
      { label: 'Powerplant', value: 'Radial engine' },
      { label: 'Role', value: 'Long-distance record flight' },
    ],
    note: 'Full technical specification of the expedition aircraft to be confirmed.',
  },
  pilot: {
    kicker: 'Pilot',
    title: 'The man behind the plan',
    bio:
      'Krzysztof Taczalski — TACZ — is a stuntman, motorcycle rider and pilot preparing his first great aviation challenge: a transatlantic crossing in 2027.',
    factsTitle: 'Three facts',
    facts: [
      { title: 'Pilot', text: 'Working toward his own transatlantic flight in 2027.' },
      { title: 'Stuntman', text: 'A professional motorcycle and stunt performer.' },
      { title: 'Patronite', text: 'Running an open public funding campaign for the expedition.' },
    ],
    quote: null,
    caption: 'Krzysztof Taczalski (TACZ)',
  },
  preparations: {
    kicker: 'Preparations',
    title: 'You can see it happen',
    intro:
      'Training, interviews and materials from the preparations — step by step toward the departure.',
    featuredTitle: 'First solo flight',
    featuredDesc: 'The film from Krzysztof’s first solo flight.',
    featuredDate: 'Material date to be confirmed',
    play: 'Watch the film',
    timelineTitle: 'Road to departure',
    timeline: [
      { title: 'First solo flight', status: 'done' },
      { title: 'Expedition planning and route', status: 'ongoing' },
      { title: 'Atlantic crossing 2027', status: 'planned' },
    ],
  },
  partners: {
    kicker: 'Partners',
    title: 'Be part of the expedition',
    intro:
      'The 1927–2027 centenary is a story worth telling together — with a clear, emotional and historically anchored narrative.',
    whyTitle: 'Why it matters',
    why:
      'A century after one of aviation’s most famous flights, the anniversary gives media a strong hook and partners a distinctive project to associate with.',
    needTitle: 'What the project needs',
    need:
      'Support for the flight itself — partners, sponsors and patrons who believe in the story and want to help it take off.',
    formsTitle: 'Areas to discuss',
    forms: [
      'Patronage of the expedition',
      'Brand partnership',
      'Technical support',
    ],
    contactText: 'Let’s talk about partnering with the expedition.',
    cta: 'Discuss a partnership',
    emailNote: 'Direct contact or via the profiles below.',
  },
  patronite: {
    kicker: 'Patronite',
    title: 'Help this story take flight',
    text:
      'Support the expedition through the Patronite profile. The button leads to the campaign, where the details of support are described.',
    cta: 'Support on Patronite',
  },
  media: {
    kicker: 'Media',
    title: 'Media and press materials',
    featuredTitle: 'Eska Radio — interview',
    featuredText:
      'Krzysztof Taczalski in Eska Radio about the Atlantic crossing, a century after Lindbergh.',
    featuredLang: 'Polish interview',
    listTitle: 'More materials',
    list: [
      {
        medium: 'YouTube',
        title: 'First solo flight',
        url: media.links.firstSoloFlight,
        lang: 'PL',
      },
      {
        medium: 'Eska Radio',
        title: 'The Atlantic crossing interview',
        url: media.links.eska,
        lang: 'PL',
      },
      {
        medium: 'Facebook',
        title: 'Official profile',
        url: media.links.facebook,
        lang: 'PL',
      },
    ],
    pressTitle: 'For journalists',
    pressText:
      'A short project description, approved photos and biography are available for publication. Contact the expedition for details and photo credits.',
  },
  final: {
    title: 'A century later. Across the Atlantic again.',
    text:
      'Two ways to be part of this story: join the expedition as a partner, or support it through Patronite.',
    ctaPrimary: 'Discuss a partnership',
    ctaSecondary: 'Support on Patronite',
    emailLabel: 'Email',
    copy: 'Copy email',
    copied: 'Copied',
    emailNote: 'Direct contact',
  },
  footer: {
    brand: 'TACZ · ATLANTYK 2027',
    tagline: 'Krzysztof Taczalski’s transatlantic expedition, 2027.',
    navLabel: 'Page',
    profilesLabel: 'Profiles',
    contactLabel: 'Contact',
    credits:
      'Photographs and materials belong to their authors. See ASSET_CREDITS.md for details.',
    langLabel: 'Language',
  },
  a11y: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    openVideo: 'Open video',
    closeVideo: 'Close video',
  },
}

const pl = {
  lang: 'pl',
  meta: {
    title: 'TACZ · Atlantyk 2027',
    description:
      'Sto lat później. Znów przez Atlantyk. Wyprawa Krzysztofa Taczalskiego w 2027 roku samolotem w typie Spirit of St. Louis.',
  },
  nav: {
    brand: 'TACZ · ATLANTYK 2027',
    links: [
      { id: 'expedition', label: 'Wyprawa' },
      { id: 'route', label: 'Trasa' },
      { id: 'aircraft', label: 'Samolot' },
      { id: 'pilot', label: 'Pilot' },
      { id: 'preparations', label: 'Przygotowania' },
      { id: 'partners', label: 'Partnerzy' },
      { id: 'media', label: 'Media' },
    ],
    cta: 'Wesprzyj wyprawę',
  },
  hero: {
    kicker: 'Sto lat później',
    title1: 'Znów przez',
    title2: 'Atlantyk.',
    subtitle:
      'Krzysztof Taczalski — znany jako TACZ — przygotowuje w 2027 roku przelot przez Atlantyk samolotem w typie Spirit of St. Louis, w stulecie lotu Lindbergha.',
    caption: 'Nowy Jork → Paryż · 2027',
    ctaPrimary: 'Zostań partnerem',
    ctaSecondary: 'Wesprzyj na Patronite',
  },
  trust: {
    heading: 'Najpierw fakty',
    facts: [
      { value: '2027', label: 'Rok wyprawy, stulecie po locie Lindbergha.' },
      { value: 'Nowy Jork → Paryż', label: 'Potwierdzona relacja trasy projektu.' },
      { value: 'Typ Spirit of St. Louis', label: 'Rodzina maszyn wybrana do wyprawy.' },
    ],
    eska: 'Posłuchaj wywiadu w Radio Eska →',
  },
  history: {
    kicker: 'Dlaczego 2027',
    oldYear: '1927',
    oldTitle: 'Lot, który to zaczął',
    oldText:
      'W maju 1927 roku Charles Lindbergh przeleciał samotnie i non stop z Nowego Jorku do Paryża w 33,5 godziny na pokładzie Spirit of St. Louis (Ryan NYP). Był to pierwszy taki przelot solo w historii.',
    newYear: '2027',
    newTitle: 'Sto lat później',
    newText:
      'W 2027 roku Krzysztof Taczalski planuje własny przelot samolotem w tym samym typie — własną wyprawę nawiązującą do tamtego lotu.',
    clamp: '100 lat · Nowy Jork → Paryż · dwóch pilotów',
  },
  route: {
    kicker: 'Trasa',
    title: 'Ocean jako skala wyzwania',
    intro:
      'Atlantyk jako schematyczna relacja między Nowym Jorkiem a Paryżem. Dokładne punkty trasy to element przygotowywanego planu.',
    mapNote: 'Schemat trasy, nie zatwierdzony plan nawigacyjny.',
    from: 'Nowy Jork',
    to: 'Paryż',
    legend: 'Schemat trasy',
    factsTitle: 'W skrócie',
    facts: [
      { label: 'Rok wyprawy', value: '2027' },
      { label: 'Relacja', value: 'Nowy Jork → Paryż' },
      { label: 'Lot historyczny', value: '1927 · solo · 33,5 h' },
      { label: 'Dystans historyczny', value: '≈ 5 800 km (≈ 3 600 mil)' },
    ],
  },
  aircraft: {
    kicker: 'Samolot',
    title: 'Materialny bohater',
    intro:
      'Samolot w typie Spirit of St. Louis (Ryan NYP) — ta sama rodzina maszyn, na której Lindbergh przeleciał Atlantyk.',
    caption: 'Samolot w typie Spirit of St. Louis dla wyprawy',
    specsTitle: 'Kluczowe parametry',
    specs: [
      { label: 'Typ', value: 'Ryan NYP' },
      { label: 'Konfiguracja', value: 'Jednosilnikowy górnopłat' },
      { label: 'Napęd', value: 'Silnik gwiazdowy' },
      { label: 'Rola', value: 'Lot długodystansowy / rekordowy' },
    ],
    note: 'Pełna specyfikacja techniczna maszyny wyprawy do potwierdzenia.',
  },
  pilot: {
    kicker: 'Pilot',
    title: 'Człowiek stojący za planem',
    bio:
      'Krzysztof Taczalski — TACZ — kaskader, motocyklista i pilot przygotowujący swoje pierwsze wielkie lotnicze wyzwanie: przelot przez Atlantyk w 2027 roku.',
    factsTitle: 'Trzy fakty',
    facts: [
      { title: 'Pilot', text: 'Przygotowuje własny przelot przez Atlantyk w 2027 roku.' },
      { title: 'Kaskader', text: 'Zawodowo zajmuje się motocyklowymi kaskadrami.' },
      { title: 'Patronite', text: 'Prowadzi otwartą zbiórkę publiczną na wyprawę.' },
    ],
    quote: null,
    caption: 'Krzysztof Taczalski (TACZ)',
  },
  preparations: {
    kicker: 'Przygotowania',
    title: 'Widać, że to się dzieje',
    intro:
      'Treningi, wywiady i materiały z przygotowań — krok po kroku ku startowi.',
    featuredTitle: 'Pierwszy samodzielny lot',
    featuredDesc: 'Film z pierwszego samodzielnego lotu Krzysztofa.',
    featuredDate: 'Data materiału do potwierdzenia',
    play: 'Obejrzyj film',
    timelineTitle: 'Droga do startu',
    timeline: [
      { title: 'Pierwszy samodzielny lot', status: 'done' },
      { title: 'Planowanie wyprawy i trasy', status: 'ongoing' },
      { title: 'Przelot przez Atlantyk 2027', status: 'planned' },
    ],
  },
  partners: {
    kicker: 'Partnerzy',
    title: 'Zostań częścią wyprawy',
    intro:
      'Rocznica 1927–2027 to historia, którą warto opowiedzieć wspólnie — z jasną, emocjonalną i historycznie osadzoną narracją.',
    whyTitle: 'Dlaczego to ważne',
    why:
      'Sto lat po jednym z najsłynniejszych lotów w historii rocznica daje mediom mocny temat, a partnerom wyrazisty projekt, z którym mogą się związać.',
    needTitle: 'Czego potrzebuje projekt',
    need:
      'Wsparcia dla samego lotu — partnerów, sponsorów i patronów, którzy uwierzą w historię i pomogą jej wystartować.',
    formsTitle: 'Obszary do rozmowy',
    forms: [
      'Mecenat wyprawy',
      'Partnerstwo marki',
      'Wsparcie techniczne',
    ],
    contactText: 'Porozmawiajmy o partnerstwie z wyprawą.',
    cta: 'Porozmawiajmy o partnerstwie',
    emailNote: 'Bezpośredni kontakt lub profile poniżej.',
  },
  patronite: {
    kicker: 'Patronite',
    title: 'Pomóż tej historii wystartować',
    text:
      'Wesprzyj wyprawę przez profil Patronite. Przycisk prowadzi do zbiórki, gdzie opisane są szczegóły wsparcia.',
    cta: 'Wesprzyj na Patronite',
  },
  media: {
    kicker: 'Media',
    title: 'Media i materiały prasowe',
    featuredTitle: 'Radio Eska — wywiad',
    featuredText:
      'Krzysztof Taczalski w Radio Eska o przelocie przez Atlantyk, sto lat po Lindberghu.',
    featuredLang: 'Wywiad po polsku',
    listTitle: 'Więcej materiałów',
    list: [
      {
        medium: 'YouTube',
        title: 'Pierwszy samodzielny lot',
        url: media.links.firstSoloFlight,
        lang: 'PL',
      },
      {
        medium: 'Radio Eska',
        title: 'Wywiad o przelocie przez Atlantyk',
        url: media.links.eska,
        lang: 'PL',
      },
      {
        medium: 'Facebook',
        title: 'Profil oficjalny',
        url: media.links.facebook,
        lang: 'PL',
      },
    ],
    pressTitle: 'Dla dziennikarzy',
    pressText:
      'Krótki opis projektu, zatwierdzone zdjęcia i biografia są dostępne do publikacji. O szczegóły i kredyty zdjęciowe kontaktuj się z wyprawą.',
  },
  final: {
    title: 'Sto lat później. Znów przez Atlantyk.',
    text:
      'Dwie drogi, by być częścią tej historii: dołącz do wyprawy jako partner albo wesprzyj ją przez Patronite.',
    ctaPrimary: 'Porozmawiajmy o partnerstwie',
    ctaSecondary: 'Wesprzyj na Patronite',
    emailLabel: 'E-mail',
    copy: 'Kopiuj e-mail',
    copied: 'Skopiowano',
    emailNote: 'Bezpośredni kontakt',
  },
  footer: {
    brand: 'TACZ · ATLANTYK 2027',
    tagline: 'Wyprawa Krzysztofa Taczalskiego przez Atlantyk, 2027.',
    navLabel: 'Strona',
    profilesLabel: 'Profile',
    contactLabel: 'Kontakt',
    credits:
      'Zdjęcia i materiały należą do ich autorów. Szczegóły w ASSET_CREDITS.md.',
    langLabel: 'Język',
  },
  a11y: {
    skip: 'Przejdź do treści',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    openVideo: 'Otwórz wideo',
    closeVideo: 'Zamknij wideo',
  },
}

const LanguageContext = createContext({ lang: 'en', t: en, setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const match = window.location.hash.match(/^#\/(pl|en)\b/)
    return match ? match[1] : 'en'
  })

  useEffect(() => {
    const onHashChange = () => {
      const match = window.location.hash.match(/^#\/(pl|en)\b/)
      setLang(match ? match[1] : 'en')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'pl' ? pl.meta.title : en.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.content = lang === 'pl' ? pl.meta.description : en.meta.description
  }, [lang])

  const value = { lang, t: lang === 'pl' ? pl : en, setLang }
  return createElement(LanguageContext.Provider, { value }, children)
}

export function useLang() {
  return useContext(LanguageContext)
}