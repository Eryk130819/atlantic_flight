import Header from './components/Header.jsx'
import CountdownBadge from './components/CountdownBadge.jsx'
import SideNav from './components/SideNav.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import History from './components/History.jsx'
import Biographies from './components/Biographies.jsx'
import Aircraft from './components/Aircraft.jsx'
import Route from './components/Route.jsx'
import Preparations from './components/Preparations.jsx'
import Videos from './components/Videos.jsx'
import Partners from './components/Partners.jsx'
import Patronite from './components/Patronite.jsx'
import Media from './components/Media.jsx'
import Final from './components/Final.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <CountdownBadge />
      <SideNav />
      <main id="main">
        <Countdown />
        <Hero />
        <TrustStrip />
        <History />
        <Biographies />
        <Aircraft />
        <Route />
        <Preparations />
        <Videos />
        <Partners />
        <Patronite />
        <Media />
        <Final />
      </main>
      <Footer />
    </>
  )
}
