import { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Machinery from './components/Machinery'
import Products from './components/Products'
import Visionaries from './components/Visionaries'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import Navbarmain from './components/Navbar'

gsap.registerPlugin(ScrollTrigger)

function App() {
   const appRef = useRef()

  useEffect(() => {
  // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Scroll animations for sections
      gsap.utils.toArray('.scroll-animate').forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
     
       <Navbarmain />
        <Hero />

      <Container fluid className="px-0">
        <Features />
        <About />
        <Machinery />
        <Products />
        <Visionaries />
        <Certificates />
        <Contact />
      </Container>
      <Footer />

    </>
  )
}

export default App
