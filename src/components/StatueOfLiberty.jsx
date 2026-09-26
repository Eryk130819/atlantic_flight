// Stylizowana sylwetka Statuy Wolności (SVG).
export default function StatueOfLiberty({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 240"
      role="img"
      aria-label="Statua Wolności"
    >
      <defs>
        <linearGradient id="statue-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c3f52" />
          <stop offset="100%" stopColor="#141e2a" />
        </linearGradient>
        <linearGradient id="statue-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#24384c" />
          <stop offset="100%" stopColor="#101a26" />
        </linearGradient>
      </defs>
      <g>
        {/* podest */}
        <g fill="url(#statue-base)">
          <rect x="28" y="208" width="64" height="32" />
          <rect x="34" y="200" width="52" height="8" />
          <rect x="40" y="193" width="40" height="7" />
          <rect x="46" y="187" width="28" height="6" />
        </g>

        <g fill="url(#statue-body)">
          {/* uniesiona ręka z pochodnią (lewa strona) */}
          <path d="M50 122
            C44 112 39 100 37 88
            C36 80 35 72 36 64
            L30 58
            L25 64
            C27 72 28 82 31 92
            C34 106 41 118 49 126
            Z" />

          {/* szata i korpus */}
          <path d="M52 118
            C47 126 47 136 51 144
            C54 152 52 162 50 172
            C48 182 46 190 44 196
            L76 196
            C74 190 72 182 70 172
            C68 162 66 152 69 144
            C73 136 73 126 68 118
            C65 113 55 113 52 118
            Z" />

          {/* głowa */}
          <circle cx="60" cy="99" r="12" />

          {/* korona z kolcami */}
          <path d="M50 93
            L51 72 L55 86
            L57 68 L60 84
            L63 70 L65 86
            L69 74 L70 93
            L66 90
            C63 85 57 85 54 90
            Z" />

          {/* tablica (prawa strona, opuszczona ręka) */}
          <path d="M68 118
            C74 124 77 134 75 145
            L69 147
            C71 138 71 127 67 121
            Z" />
          <rect x="63" y="143" width="19" height="26" rx="2" />

          {/* pochodnia */}
          <rect x="23" y="50" width="11" height="7" rx="2" />
          <path d="M29 26 C35 35 35 44 29 49 C23 44 23 35 29 26 Z" fill="#ffb84d" />
        </g>
      </g>
    </svg>
  )
}