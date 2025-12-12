import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "/public/img/about.png";

export default function About() {
   const aboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div>
<section id="about" className="about-section" ref={aboutRef}>
      <div className="about-content">
        <div className="about-text">
          <h2>About Dhruval Exim Private Limited</h2>
          <p>
            A Leader in Textile Manufacturing. With a legacy spanning many
            decades, we have established ourselves as a leader in the textile
            manufacturing industry. Our extensive experience and continuous
            innovation enable us to deliver high-quality textile products to
            domestic and international clients. We take pride in our meticulous
            attention to detail and commitment to excellence.
          </p>
          <button className="btn-explore">Learn More</button>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Dhruval Exim Textile Machinery" />
        </div>
      </div>
    </section>
    </div>
  )
}
