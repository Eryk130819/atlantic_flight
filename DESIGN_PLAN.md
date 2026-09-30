# DESIGN_PLAN — TACZ · Atlantyk 2027

Koncepcja artystyczna i układ strony. Wersja do wdrożenia.

## Kierunek

Jasny, filmowy „album wyprawy”: autentyczne zdjęcia, ogrom oceanu, cienka
linia trasy, duże daty 1927 i 2027. Paleta inspirowana stroną Lindbergh
Foundation: głęboki morski (teal) na nagłówku i sekcjach ciemnych, złoto na
akcentach i liczbach, jasne neutralne tła. Około 80% powierzchni to jasne tła;
ciemne pasma (odliczanie, Patronite, stopka) budują rytm kompozycji.

## Paleta

- tło: `#F2F3F1` (neutralny jasny), karta `#FFFFFF`, alternatywne `#E4E8E7`
- tekst: `#16292E`, pomocniczy `#53666B`
- ciemne pasma / przyciski: `#0E3B45` (teal), hover `#16505C`
- złoto: `#D9A93A` (na ciemnym), `#9A7318` / `#B8860B` (na jasnym)
- akcent CTA: czerwień `#C1362B`, hover `#A02A21` (przyciski akcji)
- separator: `#CDD5D3`

Kontrasty: tekst podstawowy na jasnym tle > 10:1, pomocniczy ≈ 5:1, złoto na
teal ≈ 5,5:1; akcenty złote na jasnym tle tylko jako ornamenty/large.

## Typografia

- Nagłówki: **Inter** (czytelny sans display), wagi 600/700, kursywa
  akcentowa. Fallback system-ui/Arial.
- Tekst/UI: **Source Sans 3**, wagi 400/600/700.
- Skala: H1 ≈ 48–112 px, H2 ≈ 34–68 px, body 17–20 px / 1.6, podpisy 13–14 px.

## Sekwencja scen

1. **Header** — sticky, ciemny morski (teal), brand typograficzny, kotwice,
   PL/EN, czerwone CTA; ukrywa się przy scrollu w dół, wraca przy scrollu
   w górę; w prawym rogu dokuje kompaktowy licznik.
2. **Odliczanie** — pas na samej górze strony (zaraz pod headerem): duży
   licznik na żywo dni/godzin/minut/sekund do startu (20 maja 2027, 7:52
   czasu Nowego Jorku), złote liczby na teal.
3. **Hero** — tekst lewo / zdjęcie prawo (3:2), dwa CTA. Bez sztywnego 100vh.
4. **Trust strip** — trzy fakty + link Eska (pomost do wiarygodności).
5. **1927 → 2027** — dwie kolumny, duże daty, klamra „100 lat”.
6. **Biografie** — dwie karty: Charles A. Lindbergh i Krzysztof Taczalski,
   portret 4:5, metryczka, teksty.
7. **Samolot** — duże zdjęcie + 4 parametry.
8. **Trasa** — mapa północnego Atlantyku (SVG, uproszczone linie brzegowe),
   trasa odsłania się przy scrollu, punkt przesuwa się raz. Obok 4 fakty.
9. **Przygotowania** — oś czasu bez wielkiego wyróżnienia: „pierwszy
   samodzielny lot” (wspomnienie, film w modalu) i „teraz: filmy z lotów”.
10. **Filmy** — cztery kafelki 16:9 z przyciskiem play; klik otwiera modal
    z lokalnym mp4. Bez podpisów.
11. **Partnerzy** — sekcja konwersji, bez tabel i cen.
12. **Patronite** — krótki ciepły blok, jeden przycisk.
13. **Media** — wyróżnione Eska + lista, sekcja prasowa.
14. **Final** — mocne zdanie, dwie ścieżki, kontakt przez profile.
15. **Stopka** — nazwa, profile, język, credits.

Poza sekwencją: **legenda sekcji** — stała, minimalistyczna lista po lewej
krawędzi (desktop ≥ 1700 px), pozycje rozdzielone poziomymi kreskami w kolorze
teal; aktywna sekcja podświetlona prostokątem, który płynnie przesuwa się przy
scrollu.

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