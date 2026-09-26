// Ryan NYP "Spirit of St. Louis" (Lindbergh, 1927).
// Górnopłat parasol, silnik gwiazdowy, duże zbiorniki paliwa za silnikiem,
// pilot za skrzydłem z peryskopem zamiast przedniej szyby.
export default function Airplane({ className = '', gearsDown = true, style }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 160"
      role="img"
      aria-label="Ryan NYP Spirit of St. Louis"
      style={style}
    >
      <defs>
        <linearGradient id="sosl-fuse" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dfe4ea" />
          <stop offset="50%" stopColor="#c3cad3" />
          <stop offset="100%" stopColor="#a4acb7" />
        </linearGradient>
        <linearGradient id="sosl-wing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d0d9" />
          <stop offset="100%" stopColor="#9aa3af" />
        </linearGradient>
      </defs>

      {/* tylny statecznik poziomy */}
      <path d="M26 92 L14 102 L52 100 L56 90 Z" fill="url(#sosl-wing)" stroke="#6d7683" strokeWidth="1.5" />

      {/* statecznik pionowy z N-X-211 */}
      <path d="M28 78 C24 62 26 46 36 34 C44 26 50 30 48 40 C46 50 44 62 44 76 Z" fill="url(#sosl-wing)" stroke="#6d7683" strokeWidth="1.5" />
      <text
        x="40"
        y="52"
        transform="rotate(-10 40 52)"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="9"
        fill="#2b3442"
        textAnchor="middle"
      >
        N-X-211
      </text>

      {/* skrzydło górnopłat (parasol) */}
      <path d="M92 34 C116 24 190 22 230 28 C242 30 244 38 238 42 C200 50 130 52 96 44 C88 42 86 38 92 34 Z" fill="url(#sosl-wing)" stroke="#6d7683" strokeWidth="1.5" />
      {/* żebra skrzydła */}
      <path d="M120 36 L150 44" stroke="rgba(109,118,131,0.6)" strokeWidth="1" />
      <path d="M160 35 L190 42" stroke="rgba(109,118,131,0.6)" strokeWidth="1" />
      <path d="M200 33 L222 38" stroke="rgba(109,118,131,0.6)" strokeWidth="1" />

      {/* rozpórki parasol */}
      <line x1="118" y1="42" x2="132" y2="66" stroke="#6d7683" strokeWidth="2.5" />
      <line x1="196" y1="40" x2="222" y2="64" stroke="#6d7683" strokeWidth="2.5" />
      <line x1="150" y1="42" x2="150" y2="62" stroke="#6d7683" strokeWidth="2.5" />

      {/* kadłub */}
      <path d="M30 74 C38 62 96 54 168 54 C226 54 260 62 274 72 C288 78 294 88 292 94 C288 102 262 108 222 110 C160 113 60 108 32 96 C26 92 26 82 30 74 Z" fill="url(#sosl-fuse)" stroke="#6d7683" strokeWidth="1.5" />

      {/* pas pasażerski na kadłubie */}
      <path d="M84 64 C140 58 210 60 258 72" stroke="rgba(233,180,76,0.7)" strokeWidth="2" fill="none" />

      {/* osłona silnika gwiazdowego */}
      <path d="M274 72 C290 76 300 82 304 88 C308 92 308 98 304 100 C296 106 284 108 272 104 Z" fill="#5a636e" stroke="#454c55" strokeWidth="1.5" />
      <path d="M282 74 C292 80 294 94 284 102" stroke="#454c55" strokeWidth="1.5" fill="none" />

      {/* śmigło */}
      <circle cx="304" cy="94" r="5" fill="#454c55" />
      <ellipse cx="310" cy="94" rx="8" ry="2.2" fill="#2c323a" />

      {/* zbiornik paliwa (gruby przód kadłuba przed kabiną) */}
      <path d="M196 58 C220 58 244 62 256 70 L256 76 C240 84 210 86 196 86 Z" fill="rgba(255,255,255,0.12)" />

      {/* okienka kabiny + peryskop */}
      <rect x="152" y="58" width="16" height="8" rx="3" fill="#1b2129" />
      <rect x="120" y="58" width="16" height="8" rx="3" fill="#1b2129" />
      <path d="M132 58 L132 44 L136 44 L136 58" fill="#454c55" />
      <rect x="129" y="40" width="10" height="5" rx="2" fill="#1b2129" />

      {/* napis "Spirit of St. Louis" na kadłubie, jak w oryginale */}
      <text
        x="200"
        y="100"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="11"
        fill="#1f2833"
        textAnchor="middle"
      >
        Spirit of St. Louis
      </text>

      {/* podwozie (chowane podczas lotu) */}
      <g className={gearsDown ? 'gears-down' : 'gears-up'}>
        <line x1="140" y1="106" x2="122" y2="124" stroke="#454c55" strokeWidth="3" />
        <line x1="140" y1="106" x2="150" y2="124" stroke="#454c55" strokeWidth="3" />
        <circle cx="134" cy="124" r="8" fill="#1b2129" />
        <circle cx="134" cy="124" r="2.5" fill="#8b95a1" />
        <line x1="28" y1="96" x2="24" y2="110" stroke="#454c55" strokeWidth="3" />
        <circle cx="24" cy="112" r="4.5" fill="#1b2129" />
      </g>
    </svg>
  )
}