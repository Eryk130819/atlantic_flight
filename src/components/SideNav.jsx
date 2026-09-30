import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

export default function SideNav() {
  const { t } = useLang()
  const [active, setActive] = useState('top')
  const [marker, setMarker] = useState({ top: 0, height: 0 })
  const itemRefs = useRef({})

  const items = [{ id: 'top', label: t.nav.top }, ...t.nav.links]

  useEffect(() => {
    const onScroll = () => {
      let current = 'top'
      t.nav.links.forEach((link) => {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = link.id
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [t.nav.links])

  useLayoutEffect(() => {
    const el = itemRefs.current[active]
    if (el) setMarker({ top: el.offsetTop, height: el.offsetHeight })
  }, [active, t])

  useEffect(() => {
    const onResize = () => {
      const el = itemRefs.current[active]
      if (el) setMarker({ top: el.offsetTop, height: el.offsetHeight })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  const goTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="side-nav" aria-label={t.footer.navLabel}>
      <div className="side-nav__list">
        <span
          className="side-nav__marker"
          style={{
            transform: `translateY(${marker.top}px)`,
            height: `${marker.height}px`,
          }}
          aria-hidden="true"
        />
        {items.map((item) => (
          <button
            key={item.id}
            ref={(node) => {
              itemRefs.current[item.id] = node
            }}
            type="button"
            className={`side-nav__item${active === item.id ? ' is-active' : ''}`}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
