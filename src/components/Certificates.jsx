import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const certificatesData = [
  { 
    src: "./img/iso-1.png", 
    alt: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    description: "Certified for workplace safety standards"
  },
  { 
    src: "./img/iso-2.png", 
    alt: "ISO 9001:2015",
    title: "Quality Management",
    description: "Ensuring consistent product quality"
  },
  { 
    src: "./img/iso-3.png", 
    alt: "ISO 14001:2015",
    title: "Environmental Management",
    description: "Commitment to eco-friendly practices"
  },
];

export default function Certificates() {
    const certRef = useRef([]);

  useEffect(() => {
    certRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 * i, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <div>
         <section className="certificates-section" id="privacy">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, i) => (
          <img
            key={cert.alt}
            src={cert.src}
            alt={cert.alt}
            className="certificate-img"
            ref={(el) => (certRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
    </div>
  )
}
