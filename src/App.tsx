import './index.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Portfolio from './components/Portfolio'

import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <About />
      <Portfolio />
  <Resume />
  <Certificates />
  <Contact />
    </div>
  )
}
