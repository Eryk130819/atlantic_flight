import { useReveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

// Prosta projekcja równoobszarowa dla północnego Atlantyku.
// Kontynenty: uproszczone, aproksymowane linie brzegowe (docelowo: Natural Earth).
const toXY = ([lon, lat]) => [lon + 85, 66 - lat]
const P = (pts) =>
  pts
    .map((pt) => {
      const [x, y] = toXY(pt)
      return `${(x * 10).toFixed(0)} ${(y * 10).toFixed(0)}`
    })
    .join(',')

const NA = P([
  [-85, 60], [-60, 60], [-58, 57], [-56, 55], [-55, 52], [-57, 50], [-60, 48],
  [-63, 47], [-65, 46], [-66, 44.5], [-69, 44], [-70, 42.5], [-70.5, 42],
  [-71, 41], [-73.5, 40.5], [-74, 39.5], [-74.5, 38.5], [-75, 37.5],
  [-76, 37], [-75.5, 35.5], [-76, 34], [-77, 33], [-79, 32], [-80.5, 31],
  [-81, 30.5], [-81, 29.5], [-80.5, 28], [-80, 26.5], [-80.5, 25.5],
  [-81, 25], [-82, 24.7], [-82.5, 25.5], [-83, 27], [-83.5, 28.5], [-84, 30],
  [-85, 30.5], [-87, 30], [-89, 29.5], [-91, 29.5], [-93, 29.5], [-95, 29],
  [-96.5, 28], [-97, 27], [-97.3, 25.5], [-97, 23], [-96, 20], [-94, 18],
  [-92, 16], [-88, 15],
])
const GREENLAND = P([
  [-58, 62], [-52, 64], [-45, 65], [-40, 63.5], [-37, 62], [-35, 60],
  [-37, 58], [-40, 56.5], [-44, 56], [-48, 57], [-52, 59], [-55, 60.5],
])
const NEWFOUNDLAND = P([
  [-59, 51.5], [-55.5, 52.5], [-53, 51.5], [-52.5, 49.5], [-53.5, 48.5],
  [-55.5, 47.5], [-57.5, 48], [-59, 49.5],
])
const ICELAND = P([
  [-24, 64.5], [-20, 66.3], [-16, 65.5], [-14.5, 64], [-16, 63],
  [-20, 63.5], [-23, 64],
])
const IRELAND = P([
  [-10, 54.5], [-9, 55.3], [-7.5, 55], [-6.5, 54.5], [-6, 53.5],
  [-6.5, 52], [-8, 51.5], [-9.5, 52], [-10, 53.5],
])
const UK = P([
  [-6, 55], [-5, 58.5], [-3, 58.5], [-2, 57], [-1.5, 55.5], [-1, 54.5],
  [0, 53.5], [0.5, 52.5], [-1.5, 52], [-3, 51.5], [-4.5, 51.5], [-5, 52.5],
  [-5.5, 53.5], [-5, 55],
])
const EUROPE = P([
  [15, 60], [10, 60], [8, 58], [6, 57], [4, 57], [3, 54], [2, 54], [1, 53],
  [0, 52], [-1, 51], [-2, 50.5], [-4, 49.5], [-5, 49], [-6, 48.5],
  [-7, 48], [-9, 47], [-9, 45], [-8.5, 44], [-8, 43.5], [-7, 43], [-5, 43],
  [-3, 43.5], [-1, 43], [0, 43], [2, 42], [4, 43], [6, 43.5], [8, 44],
  [10, 45], [12, 44], [14, 44], [15, 42], [16, 40], [15, 38], [14, 36],
  [12, 36.5], [10, 37], [8, 38], [6, 39], [4, 40], [3, 41], [2, 42],
  [3, 43], [5, 44], [7, 45], [9, 46], [11, 47], [13, 48], [15, 50],
  [15, 55],
])

export default function Map() {
  const { t } = useLang()
  const { ref, visible } = useReveal(0.25)

  const ny = toXY([-74, 40.7])
  const paris = toXY([2.35, 48.85])
  // Łuk trasy zbliżony do wielkiego koła.
  const routePath = `M ${ny[0] * 10} ${ny[1] * 10} C ${(ny[0] + 8) * 10} ${(ny[1] - 14) * 10}, ${(paris[0] - 14) * 10} ${(paris[1] - 12) * 10}, ${paris[0] * 10} ${paris[1] * 10}`

  return (
    <div className="route-map" ref={ref} aria-hidden="true">
      <svg
        className="route-map__svg"
        viewBox="0 0 1000 660"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="map-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e7eeee" />
            <stop offset="100%" stopColor="#d3e2e2" />
          </linearGradient>
        </defs>

        <rect width="1000" height="660" fill="url(#map-sea)" />

        {/* siatka */}
        <g stroke="rgba(22,41,46,0.07)" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`v${i}`} x1={i * 200} y1="0" x2={i * 200} y2="660" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 165} x2="1000" y2={i * 165} />
          ))}
        </g>

        {/* lądy */}
        <g
          className={`route-map__lands${visible ? ' is-visible' : ''}`}
          fill="#eef1ef"
          stroke="#c2cecc"
          strokeWidth="1.5"
        >
          <polygon points={EUROPE} />
          <polygon points={UK} />
          <polygon points={IRELAND} />
          <polygon points={ICELAND} />
          <polygon points={GREENLAND} />
          <polygon points={NEWFOUNDLAND} />
          <polygon points={NA} />
        </g>

        {/* trasa — odsłania się */}
        <path
          d={routePath}
          className={`route-map__line${visible ? ' is-visible' : ''}`}
          fill="none"
          stroke="#0e3b45"
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />

        {/* punkty */}
        <g className="route-map__points">
          <circle cx={ny[0] * 10} cy={ny[1] * 10} r="5" fill="#9a7318" />
          <circle cx={paris[0] * 10} cy={paris[1] * 10} r="5" fill="#9a7318" />
        </g>

        {/* punkt lecący po trasie — jeden raz */}
        {visible && (
          <circle
            className="route-map__plane"
            r="5"
            fill="#d9a93a"
            stroke="#0e3b45"
            strokeWidth="1.5"
          >
            <animateMotion
              dur="4.5s"
              begin="0.2s"
              fill="freeze"
              path={routePath}
            />
          </circle>
        )}

        {/* etykiety */}
        <g className="route-map__labels">
          <text x={ny[0] * 10 - 16} y={ny[1] * 10 + 22}>
            {t.route.from}
          </text>
          <text x={paris[0] * 10 - 16} y={paris[1] * 10 + 24}>
            {t.route.to}
          </text>
          <text x="500" y="640" textAnchor="middle" className="route-map__note">
            {t.route.mapNote}
          </text>
        </g>
      </svg>
    </div>
  )
}