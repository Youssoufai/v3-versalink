import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Team from './components/Team'
import Services from './components/Services'
import Events from './components/Events'
import { motion } from 'framer-motion'
import Footer from './Footer'
function App() {
  return (
    <>
      <motion.div>
        <div
          id='bg'
          className='text-orange'
        >
          <Navbar />
          <Hero />
        </div>
        <Intro />
        <Team />
        <Services />
        <Events />
        <Footer />
      </motion.div>
    </>
  )
}

export default App
