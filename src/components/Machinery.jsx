import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import c2Image from "/public/img/c-2.jpg";

export default function Machinery() {
      const machRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      machRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);
  return (
    <div>
       <section className="products-section" ref={machRef}>
      <div className="text-content">
        <h2>Machinery Showcase</h2>
        <p>
          At Dhruval Exim, our production is driven by reliable industrial
          machinery built for high volume fabric manufacturing and precision
          printing with finest quality, speed, and consistency, just as you
          expect from bulk order efficiency with minimal global standards.
        </p>
        <button className="btn-explore">Explore Now</button>
      </div>
      <div className="image-content">
        <img src={c2Image} alt="Machinery showcase" />
      </div>
    </section>
    </div>
  )
}
