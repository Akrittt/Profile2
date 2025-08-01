import './App.css'
import AboutMe from './components/AboutMe.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'
import ContactMe from './components/ContactMe.jsx'
import { motion, useScroll } from "motion/react"
import AiTechRecommender from './components/AiTechRecommender.jsx'

function App() {
  const { scrollYProgress } = useScroll();


  return (
    <div className='bg-gradient-to-br from-dark via-shadow to-dark  text-orange-50 '>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 59,
          left: 0,
          right: 0,
          height: 8,
          originX: 0,
          backgroundColor: "#FFFFFF",
          zIndex: 50,
          width: "100vw",
        }}
      />
      <Navbar />
      <Home />
      <Works />
      <AboutMe />
      <Skills />
      <AiTechRecommender />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
