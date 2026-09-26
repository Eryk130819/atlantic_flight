// Jeśli `src` jest puste, pokazuje stylizowany placeholder
// z podpowiedzią, gdzie wstawić obrazek.
export default function PlaceholderImage({ src, label, aspect = '4 / 3' }) {
  if (src) {
    return (
      <div className="placeholder" style={{ aspectRatio: aspect }}>
        <img src={src} alt={label} loading="lazy" />
      </div>
    )
  }
  return (
    <div
      className="placeholder placeholder--empty"
      style={{ aspectRatio: aspect }}
    >
      <span className="placeholder__icon">🖼️</span>
      <span className="placeholder__label">{label}</span>
      <span className="placeholder__hint">
        Wstaw ścieżkę do zdjęcia w src/content.js
      </span>
    </div>
  )
}