import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
     const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div>
         <section id="hero" className="hero-section" ref={heroRef}>
        <video
          className="hero-video"
          playsInline
          muted
          loop
          autoPlay
          src="https://video.wixstatic.com/video/b8118a_60e09d0c870d4512b71c6479a9d2f96f/720p/mp4/file.mp4"
        />
      </section>
    </div>
    
  )
}
