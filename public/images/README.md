# public/images

Tutaj wgrywaj materiały, które mają pojawić się na stronie. Ścieżka podawana
w `src/content.js` zawsze zaczyna się od `/images/...` (bez `public` w ścieżce).

Mapa trasy na górze strony (`JourneyMap.jsx`) jest generowana w kodzie — nie
wymaga żadnych plików.

## Obrazki w sekcjach (pola `imagePath`)

- `pilot/` — zdjęcie pilota (sekcja „O wyzwaniu", `about.imagePath`)
- `plane/` — zdjęcie samolotu (sekcja „Samolot", `plane.imagePath`)
- `route/` — grafika/trasa lotu (sekcja „Trasa", `journey.imagePath`)

Zalecane formaty: JPG, PNG lub WebP. Dopóki pole w `content.js` jest puste,
strona pokazuje placeholder zamiast grafiki.