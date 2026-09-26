// Wygenerowana mapa przelotu Spirit of St. Louis (maj 1927):
// Nowy Jork (Roosevelt Field) → St. John's (Nowa Fundlandia) →
// Valentia (Irlandia) → Paryż (Le Bourget). Samolot leci po trasie.
export default function JourneyMap() {
  return (
    <div className="map" aria-hidden="true">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="map-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1b2e" />
            <stop offset="60%" stopColor="#122338" />
            <stop offset="100%" stopColor="#0a1624" />
          </linearGradient>
          <linearGradient id="map-land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3d52" />
            <stop offset="100%" stopColor="#1c2c40" />
          </linearGradient>
          <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(233,180,76,0.35)" />
            <stop offset="100%" stopColor="rgba(233,180,76,0)" />
          </radialGradient>
        </defs>

        {/* ocean */}
        <rect width="1200" height="600" fill="url(#map-ocean)" />

        {/* siatka geograficzna */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          <line x1="300" y1="0" x2="300" y2="600" />
          <line x1="600" y1="0" x2="600" y2="600" />
          <line x1="900" y1="0" x2="900" y2="600" />
          <line x1="0" y1="150" x2="1200" y2="150" />
          <line x1="0" y1="300" x2="1200" y2="300" />
          <line x1="0" y1="450" x2="1200" y2="450" />
        </g>

        {/* lądy */}
        <g fill="url(#map-land)" stroke="rgba(200,220,240,0.14)" strokeWidth="2">
          {/* Ameryka Północna */}
          <path d="M0 0 L500 0 C500 40 480 55 460 80 C450 95 455 120 470 130 C485 140 500 155 490 175 C480 195 460 190 450 205 C440 220 460 235 455 255 C450 275 430 270 425 290 C420 310 445 320 440 340 C435 360 405 355 400 375 C395 395 420 410 400 430 C380 450 340 450 310 470 C280 490 240 510 200 530 C160 550 120 570 80 585 C50 595 20 600 0 600 Z" />
          {/* Grenlandia */}
          <path d="M570 0 C600 10 625 40 620 70 C615 100 580 120 555 110 C530 100 535 70 550 50 C560 30 560 0 570 0 Z" />
          {/* Nowa Fundlandia */}
          <path d="M505 90 C535 80 565 95 575 125 C585 155 565 180 535 175 C505 170 495 140 495 115 C495 105 500 95 505 90 Z" />
          {/* Irlandia */}
          <path d="M760 128 C783 116 807 130 813 156 C819 182 797 208 773 202 C749 196 743 168 745 148 C747 138 750 133 760 128 Z" />
          {/* Wielka Brytania */}
          <path d="M838 108 C873 98 903 113 913 143 C923 173 898 203 868 208 C838 213 818 188 818 163 C818 138 823 116 838 108 Z" />
          {/* Europa kontynentalna */}
          <path d="M885 250 C925 260 950 300 965 340 C980 380 960 420 970 460 C980 500 1020 520 1060 540 C1100 558 1150 570 1200 580 L1200 600 L885 600 C880 550 885 500 895 450 C905 400 900 350 895 300 C892 280 887 265 885 250 Z" />
        </g>

        {/* etykiety lądów */}
        <g fill="rgba(255,255,255,0.4)" fontSize="15" fontStyle="italic">
          <text x="90" y="70">Ameryka Północna</text>
          <text x="880" y="560" textAnchor="end">Europa</text>
        </g>

        {/* poświata startu */}
        <circle cx="440" cy="250" r="90" fill="url(#map-glow)" />

        {/* trasa */}
        <path
          d="M440 245 C485 200 500 150 540 132 C600 112 690 128 770 152 C810 164 835 190 880 225 C930 265 985 320 1040 380"
          fill="none"
          stroke="rgba(233,180,76,0.55)"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />

        {/* odległości na trasie */}
        <g fill="rgba(255,220,150,0.8)" fontSize="13" letterSpacing="0.06em">
          <text x="500" y="200">≈ 1 500 km</text>
          <text x="660" y="165">≈ 3 200 km</text>
          <text x="900" y="315">≈ 900 km</text>
        </g>

        {/* punkty charakterystyczne */}
        <g className="map-points">
          {/* Nowy Jork */}
          <circle className="map__pulse" cx="440" cy="250" r="10" />
          <circle cx="440" cy="250" r="5" className="map__dot" />
          <line x1="446" y1="252" x2="470" y2="245" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <text x="476" y="240" className="map__label">Nowy Jork</text>
          <text x="476" y="256" className="map__sub">Roosevelt Field · start</text>

          {/* St. John's */}
          <circle className="map__pulse" cx="545" cy="135" r="10" />
          <circle cx="545" cy="135" r="5" className="map__dot" />
          <line x1="551" y1="137" x2="575" y2="120" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <text x="581" y="112" className="map__label">St. John’s</text>
          <text x="581" y="128" className="map__sub">Nowa Fundlandia · ostatni ląd</text>

          {/* Valentia */}
          <circle className="map__pulse" cx="782" cy="158" r="10" />
          <circle cx="782" cy="158" r="5" className="map__dot" />
          <line x1="788" y1="160" x2="810" y2="180" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <text x="816" y="185" className="map__label">Valentia</text>
          <text x="816" y="201" className="map__sub">Irlandia · pierwsza Europa</text>

          {/* Paryż */}
          <circle className="map__pulse" cx="1040" cy="382" r="10" />
          <circle cx="1040" cy="382" r="5" className="map__dot" />
          <line x1="1046" y1="384" x2="1070" y2="375" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <text x="1076" y="370" className="map__label">Paryż</text>
          <text x="1076" y="386" className="map__sub">Le Bourget · cel</text>
        </g>

        {/* animowany samolot na trasie */}
        <g className="map__plane-wrap">
          <animateMotion
            path="M440 245 C485 200 500 150 540 132 C600 112 690 128 770 152 C810 164 835 190 880 225 C930 265 985 320 1040 380"
            begin="1.5s"
            dur="12s"
            fill="freeze"
            rotate="auto"
          />
          <g transform="translate(-17,-7)">
            <path d="M6 8 L30 5 L36 8 L30 11 L6 10 L8 8 Z" className="map__plane-body" />
            <path d="M22 5 L18 1 L26 3 Z" className="map__plane-body" />
            <path d="M16 10 L20 14 L24 11 Z" className="map__plane-body" />
          </g>
        </g>

        {/* róża wiatrów */}
        <g transform="translate(1090,64)">
          <circle r="18" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <path d="M0 -14 L4 0 L0 14 L-4 0 Z" fill="rgba(233,180,76,0.85)" />
          <text y="-26" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="12">N</text>
        </g>

        {/* legenda */}
        <g transform="translate(30,470)">
          <rect width="330" height="76" rx="10" fill="rgba(13,27,46,0.72)" stroke="rgba(255,255,255,0.12)" />
          <text x="18" y="28" className="map__legend-title">Spirit of St. Louis · 20–21 maja 1927</text>
          <text x="18" y="50" className="map__legend-sub">Nowy Jork → Paryż</text>
          <text x="18" y="66" className="map__legend-sub">ok. 5 800 km · 33,5 godziny · non stop</text>
        </g>
      </svg>
    </div>
  )
}