import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
