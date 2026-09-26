# DESIGN_PLAN — TACZ · Atlantyk 2027

Koncepcja artystyczna i układ strony. Wersja do wdrożenia.

## Kierunek

Jasny, filmowy „album wyprawy”: ciepły papier, autentyczne zdjęcia,
srebrzysta konstrukcja maszyny, ogrom oceanu, cienka linia trasy, duże daty
1927 i 2027. Zero granatu, neonów i „kokpitów”. Około 85% powierzchni to jasne
tła; ciemne akcenty (stopka, przycisk Patronite) wynikają z kompozycji.

## Paleta

- tło: `#F3EBDD`, jasny papier `#FAF6EF`, ciemniejszy `#E6D8C4`
- tekst: `#29251F`, pomocniczy `#62574A`
- akcenty: mosiądz `#826037`, terakota `#8B4434`, separator `#CBBBA5`

Kontrasty sprawdzone: tekst podstawowy na papierze > 7:1 (AA), pomocniczy
≈ 5:1, akcenty tylko ornamenty/large.

## Typografia

- Nagłówki: **Libre Caslon Text** (serif display), wagi 400/700, kursywa
  akcentowa. Fallback Georgia/Times.
- Tekst/UI: **Source Sans 3**, wagi 400/600/700.
- Skala: H1 ≈ 48–112 px, H2 ≈ 34–68 px, body 17–20 px / 1.6, podpisy 13–14 px.

## Sekwencja scen

1. **Header** — sticky, jasny, brand typograficzny, kotwice, PL/EN, CTA.
2. **Hero** — tekst lewo / zdjęcie prawo (3:2), dwa CTA. Bez sztywnego 100vh.
3. **Trust strip** — trzy fakty + link Eska (pomost do wiarygodności).
4. **1927 → 2027** — dwie kolumny, duże daty, klamra „100 lat”.
5. **Trasa** — mapa północnego Atlantyku (SVG, uproszczone linie brzegowe),
   trasa odsłania się przy scrollu, punkt przesuwa się raz. Obok 4 fakty.
6. **Samolot** — duże zdjęcie + 4 parametry.
7. **Pilot** — portret 4:5 + biografia + 3 fakty.
8. **Przygotowania** — wyróżniony film (modal na żądanie) + oś postępów.
9. **Partnerzy** — sekcja konwersji, bez tabel i cen.
10. **Patronite** — krótki ciepły blok, jeden przycisk.
11. **Media** — wyróżnione Eska + lista, sekcja prasowa.
12. **Final** — mocne zdanie, dwie ścieżki, mail + kopiowanie.
13. **Stopka** — nazwa, profile, język, credits.

## Ruch

- Hero: fade + przesunięcie tekstu przy wejściu (CSS).
- Sekcje: `IntersectionObserver` → `opacity`/`transform` (0.6 s).
- Mapa: linia trasy rysuje się (stroke-dashoffset), punkt leci raz (SVG
  `animateMotion`, `fill="freeze"`).
- `prefers-reduced-motion`: wszystko od razu widoczne, brak ruchu.

## Mobile

- 360/390/768/1024/1440: grid łamie się do 1 kolumny, mapa `meet`,
  lista faktów pod nią, menu w drawerze, CTA dostępne.

## Decyzje / ryzyko

- **Mapa**: linie brzegowe są aproksymowane ręcznie; docelowo zamienić na
  dane Natural Earth (public domain). Wskazane w CONTENT_TODO.md.
- **Języki**: PL/EN przez `#/pl` i `#/en` (hash routing — bezpieczne dla
  hostingu statycznego; pełne ścieżki `/pl` `/en` wymagają rewrites na serwerze).
- **Mail**: użyto adresu kontaktowego do potwierdzenia przez właściciela.