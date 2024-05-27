import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Events from './components/Events'
import { motion } from 'framer-motion'
function App() {
  return (
    <>
      <motion.div
        initial={{
          opacity: .5
        }}
        whileInView={{
          opacity: 1
        }}
      >
        <div
          id='bg'
          className='text-orange'
        >
          <Navbar />
          <Hero />
        </div>
        <Intro />
        <Team />
        <Testimonials />
      </motion.div>
    </>
  )
}

export default App
