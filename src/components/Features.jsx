import { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Features.css'

// Import your PNG images
import wideImg from '/public/img/wide.png'
import safeImg from '/public/img/safe.png'
import cottonImg from '/public/img/cotton.png'
import plantImg from '/public/img/plant.png'
import skinImg from '/public/img/skin.png'

gsap.registerPlugin(ScrollTrigger)

const featuresData = [
  {
    id: 1,
    title: "Wide Fabric Range",
    desc: "From Sarees to Shirting, We Have It All",
    img: wideImg,
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "🔄",
    delay: 0
  },
  {
    id: 2,
    title: "Skin-Friendly",
    desc: "Gentle on Skin, Safe for All",
    img: skinImg,
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "🌸",
    delay: 0.1
  },
  {
    id: 3,
    title: "Pure & Natural",
    desc: "100% Natural Cotton, Softness You Can Feel",
    img: cottonImg,
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "☁️",
    delay: 0.2
  },
  {
    id: 4,
    title: "Sustainable",
    desc: "Eco-Friendly Processes, Better for the Planet",
    img: plantImg,
    bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    icon: "🌍",
    delay: 0.3
  },
  {
    id: 5,
    title: "Safe & Gentle",
    desc: "Certified Safe, Quality You Can Trust",
    img: safeImg,
    bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: "🛡️",
    delay: 0.4
  }
];

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      })

      // Cards animation with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            rotation: index % 2 === 0 ? -5 : 5,
            duration: 0.8,
            delay: featuresData[index].delay,
            ease: "back.out(1.2)"
          })
        }
      })

      // Floating animation for cards on hover
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            })
          })
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            })
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="features-section py-5"
    >
      <Container className="py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          
          <h2 className="section-title mb-4" ref={titleRef}>
            WHAT SETS US APART
          </h2>
          <br />
          <h6 className="section-subtitle mb-3" ref={subtitleRef}>
            Excellence in Textile Manufacturing & Export
          </h6>
          <div className="title-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* Features Grid */}
        <Row className="g-4 justify-content-center">
          {featuresData.map((feature, index) => (
            <Col 
              key={feature.id} 
              lg={4} 
              md={6} 
              className="mb-4"
            >
              <div 
                ref={el => cardsRef.current[index] = el}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card Background with Gradient */}
                <div 
                  className="card-bg"
                  style={{ background: feature.bgColor }}
                ></div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Icon Badge */}
                  <div className="icon-badge">
                    <span className="icon-emoji">{feature.icon}</span>
                  </div>

                  {/* Feature Image */}
                  <div className="feature-image-wrapper">
                    <img 
                      src={feature.img} 
                      alt={feature.title}
                      className="feature-img"
                    />
                    <div className="image-overlay"></div>
                  </div>

                  {/* Text Content */}
                  <div className="feature-text">
                    <h3 className="feature-title">
                      {feature.title}
                    </h3>
                    <p className="feature-desc">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="hover-line"></div>

                  {/* Floating Particles */}
                  <div className="particles">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="particle"
                        style={{
                          animationDelay: `${i * 0.3}s`,
                          left: `${20 + i * 20}%`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

       
      </Container>
    </section>
  )
}