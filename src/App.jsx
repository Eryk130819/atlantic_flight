import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import History from './components/History.jsx'
import Route from './components/Route.jsx'
import Aircraft from './components/Aircraft.jsx'
import Pilot from './components/Pilot.jsx'
import Preparations from './components/Preparations.jsx'
import Partners from './components/Partners.jsx'
import Patronite from './components/Patronite.jsx'
import Media from './components/Media.jsx'
import Final from './components/Final.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <History />
        <Route />
        <Aircraft />
        <Pilot />
        <Preparations />
        <Partners />
        <Patronite />
        <Media />
        <Final />
      </main>
      <Footer />
    </>
  )
}