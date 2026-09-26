// Sylwetka panoramy Manhattanu na horyzoncie.
const buildings = [
  { w: 30, h: 54 },
  { w: 24, h: 88 },
  { w: 36, h: 66 },
  { w: 20, h: 48 },
  { w: 28, h: 80 },
  { w: 22, h: 100 },
  { w: 34, h: 58 },
  { w: 26, h: 84 },
  { w: 40, h: 70 },
  { w: 22, h: 50 },
  { w: 30, h: 92 },
  { w: 24, h: 62 },
  { w: 36, h: 78 },
  { w: 20, h: 66 },
  { w: 28, h: 94 },
  { w: 24, h: 56 },
  { w: 32, h: 86 },
  { w: 22, h: 72 },
  { w: 36, h: 60 },
  { w: 26, h: 76 },
]

export default function Skyline({ className = '' }) {
  let x = 0
  return (
    <svg
      className={className}
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
      role="img"
      aria-label="Panorama Nowego Jorku"
    >
      <defs>
        <linearGradient id="skyline-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23354d" />
          <stop offset="100%" stopColor="#0c1522" />
        </linearGradient>
      </defs>
      <g fill="url(#skyline-fill)">
        {buildings.map((b, i) => {
          const isTall = i === 5 || i === 14
          const rect = (
            <rect
              key={i}
              x={x}
              y={120 - b.h}
              width={b.w}
              height={b.h}
            />
          )
          x += b.w
          return (
            <g key={i}>
              {rect}
              {isTall && (
                <line
                  x1={x - b.w / 2}
                  y1={120 - b.h}
                  x2={x - b.w / 2}
                  y2={120 - b.h - 14}
                  stroke="url(#skyline-fill)"
                  strokeWidth="2"
                />
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}