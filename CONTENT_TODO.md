# CONTENT_TODO — braki w materiałach

Lista rzeczy, których brakuje, aby zamknąć stronę. Nic z poniższych nie jest
pokazane na stronie jako placeholder/lorem ipsum.

## Kluczowe (blokują uruchomienie)

- [ ] **Data odliczania**: potwierdzić start `20.05.2027, 7:52 czasu Nowego
      Jorku` (obecnie w `src/i18n.js`, pole `countdown.date`).
- [x] **Filmy z lotów**: 4 pliki `public/images/scene/lot_1–4.mp4` są widoczne
      w sekcji „Filmy” (kafelki + modal). Do potwierdzenia: kolejność i waga
      plików (uwaga na limit transferu Netlify przy dużych mp4).
- [ ] **Biografia Krzysztofa**: zatwierdzić treść; uzupełnić konkretne fakty
      (rocznik, nalot, licencje, osiągnięcia).
- [ ] **Biografia Lindbergha**: zatwierdzić treść (`src/i18n.js`).
- [ ] **Zdjęcie Lindbergha**: plik `public/images/lindbergh/lindbergh.jpg`
      (preferowane domena publiczna; wpisać źródło do ASSET_CREDITS.md).
- [ ] **Kanał kontaktu**: mail usunięty ze strony (decyzja właściciela).
      CTA partnerstwa prowadzi tymczasowo na Facebooka. Przed startem dodać
      właściwy kanał (mail/formularz) i przywrócić go w sekcji Final.
- [ ] **Domena i metadane**: po ustaleniu prawdziwej domeny uzupełnić
      canonical/hreflang oraz Open Graph z istniejącym obrazem.

## Zdjęcia

- [x] **Portret do biografii (Krzysztof)** — `public/images/pilot/pilot_bio.jpeg`
      podpięty w sekcji Biografie; potwierdzić zgodę na publikację.
- [ ] **Archiwalne zdjęcie 1927 / Spirit of St. Louis** — do sekcji
      „1927 → 2027”. Preferowane Smithsonian Open Access (CC0),
      z zapisem kredytu w ASSET_CREDITS.md. Obecnie sekcja jest
      typograficzna (działa bez zdjęcia).
- [ ] **Portret pilota** — potwierdzić, że `public/images/pilot/pilot.jpg`
      przedstawia Krzysztofa Taczalskiego i ma zgodę na publikację.
- [ ] **Zdjęcie maszyny wyprawy** — potwierdzić, że `public/images/plane/plane.jpg`
      to właściwy samolot; doprecyzować podpis (replika / typ).
- [ ] **Thumbnail/poster filmu** — dla karty „Pierwszy samodzielny lot”
      (nie używamy cudzych kadrów).
- [ ] **Pakiet prasowy** — zatwierdzone zdjęcia + biografia do pobrania,
      kredyt fotografa, warunki użycia.

## Dane merytoryczne

- [ ] **Pełna specyfikacja techniczna** maszyny wyprawy (obecnie 4 parametry
      ogólne typu Ryan NYP).
- [ ] **Plan trasy / waypointy** — jeśli znane, zastąpić „schemat”.
- [ ] **Nagłówki 1927–2027** — potwierdzić sformułowania i cytaty
      (nie cytujemy bez autentycznych źródeł).

## Mapa

- [ ] **Dokładne dane wybrzeży** — docelowo Natural Earth (public domain),
      zastępując ręcznie aproksymowane linie brzegowe w `src/components/Map.jsx`.

## Kontakt / media

- [ ] Eska — potwierdzić tytuł audycji i datę.
- [ ] Ewentualny telefon (z numerem kierunkowym) do publikacji.