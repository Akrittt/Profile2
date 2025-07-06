import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/navbar'
import Skills from './components/Skills'
import Works from './components/Works'
import { motion, useScroll } from "motion/react"

function App() {
  const { scrollYProgress } = useScroll();
  

  return (
    <div className='bg-gradient-to-b from-dark via-shadow to-dark  text-orange-50 '>
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
                    zIndex:50,
                    width: "100vw",
                }}
            />
      <Navbar/>
      <Home/>
      <Works/>
      <AboutMe/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
