import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { Services } from './components/services'
import { HowItWorks } from './components/how-it-works'
import { Industries } from './components/industries'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="bg-[#080c14] text-[#e6e8ed] min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
