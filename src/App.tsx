import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { TrustedCompanies } from './components/trustedCompanies'
import { ProductPitch } from './components/productPitch'
import { UseCase } from './components/useCase'
import { SmartTools } from './components/smartTools'
import { Features } from './components/features'
import { Testimonials } from './components/testimonials'
import { Flexibility } from './components/flexibility'
import { TeamTemplates } from './components/teamTemplates'
import { JoinNowBanner } from './components/joinNowBanner'
import { Footer } from './components/footer'
import { SmallHeroSection } from './components/smallHeroSection'

function App() {

  return (
    <div className='min-w-[300px]'>
      <Navbar />
      <Hero />
      <SmallHeroSection />
      <TrustedCompanies />
      <ProductPitch />
      <UseCase />
      <SmartTools />
      <Features />
      <Testimonials />
      <Flexibility />
      <TeamTemplates />
      <JoinNowBanner />
      <Footer />
    </div>
  )
}

export default App
