import { useState, useEffect, useRef } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { gsap } from 'gsap'
import './Navbar.css'

export default function Navbarmain() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const navbarRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // GSAP animations
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from('.navbar-logo', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
      })

      // Nav links animation
      gsap.from('.nav-item', {
        duration: 0.8,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'back.out(1.7)'
      })

      // Navbar background animation on scroll
      if (scrolled) {
        gsap.to('.main-navbar', {
          backgroundColor: 'rgba(10, 25, 47, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
          duration: 0.3
        })
      } else {
        gsap.to('.main-navbar', {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          boxShadow: 'none',
          duration: 0.3
        })
      }
    }, navbarRef)

    window.addEventListener('scroll', handleScroll)
    return () => {
      ctx.revert()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleNavClick = () => {
    if (expanded) {
      setExpanded(false)
    }
  }

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Machinery', path: '#machinery' },
    { name: 'Products', path: '#products' },
    { name: 'Certificates', path: '#certificates' },
    { name: 'Contact', path: '#contact' }
  ]

  return (
    <div ref={navbarRef}>
      <Navbar 
        expand="lg" 
        fixed="top" 
        expanded={expanded}
        onToggle={setExpanded}
        className={`main-navbar py-2 py-lg-3 ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="navbar-logo">
            <img 
              src="./img/Untitled design_edited.png" 
              alt="Dhruval Exim" 
              className="logo-img"
            />
            <div className="logo-text">
              <span className="logo-main text-uppercase">Dhruval Exim</span>
              <span className="logo-sub">Private Limited</span>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            className="navbar-toggler-custom"
          >
            <div className={`hamburger ${expanded ? 'active' : ''}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </Navbar.Toggle>

          {/* Nav Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <div 
                  key={item.name}
                  className="nav-item-wrapper"
                  data-index={index}
                >
                  <Nav.Link 
                    href={item.path}
                    className="nav-link-custom"
                    onClick={handleNavClick}
                  >
                    {/* <span className="nav-number">0{index + 1}.</span> */}
                    <span className="nav-text">{item.name}</span>
                    <span className="nav-underline"></span>
                  </Nav.Link>
                </div>
              ))}
              
            
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Animated Border Bottom */}
        <div className="navbar-border"></div>
      </Navbar>
    </div>
  )
}