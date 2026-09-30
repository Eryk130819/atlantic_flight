# AGENTS.md

Context file for AI coding agents. Read before working in the repo. Keep up to
date as the project grows.

## Project

`krzysiek_taczalski_project` — a React front-end website promoting Krzysztof
Taczalski's ("TACZ") 2027 transatlantic expedition, a century after
Lindbergh's flight. Built with Vite (static build, easy to host). The page is
a light, editorial "film album" on a paper palette (see `DESIGN_PLAN.md`),
fully bilingual PL/EN via hash routing (`#/pl`, `#/en`, default EN).

## Structure

- `src/i18n.js` — all copy in PL/EN dictionaries + media links/images +
  `LanguageProvider` / `useLang()`. This is the single place to edit text.
- `src/components/` — one component per section (Header, Hero, Countdown,
  TrustStrip, History, Biographies, Aircraft, Route, Preparations, Videos,
  Partners, Patronite, Media, Final, Footer) + `SideNav.jsx` (left section
  legend, desktop ≥1700px) + `Map.jsx` (SVG North-Atlantic route map) +
  `CountdownBadge.jsx` (fixed badge under the header; moves to the corner when
  the header hides) + `VideoModal.jsx` + `useReveal.js` / `useCountdown.js` /
  `useHeaderScroll.js` hooks.
- `src/App.jsx` — section order. `src/main.jsx` wraps app in `LanguageProvider`.

## Commands

```sh
npm install   # first time only
npm run dev    # dev server
npm run build  # production build to dist/
npm run preview # preview the production build
```

## Conventions

- Front-end only, no accounts/backend; static-hostable, dependency-light.
- Do not add comments unless requested.
- Respect `prefers-reduced-motion` (already wired in `useReveal.js`/CSS).
- `CONTENT_TODO.md` lists missing materials; `ASSET_CREDITS.md` tracks image
  licenses. Update them when assets change.

## Notes

- `src/content.js`, `src/hooks/useScrollProgress.js` and
  `src/components/{Airplane,Pilot,StatueOfLiberty,Skyline,About,Contact,Journey,
  JourneyMap,PlaceholderImage,PlaneDetails}.jsx` are leftovers from earlier
  iterations, no longer imported — delete them when convenient. (`Pilot` was
  superseded by `Biographies`.)
- Map coastlines in `Map.jsx` are hand-approximated; replace with Natural
  Earth data when available (see CONTENT_TODO.md).