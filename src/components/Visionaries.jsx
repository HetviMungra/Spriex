import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const visionariesData = [
  { name: "Suresh Sabharwal", designation: "Director" ,src: "/public/img/owner-1.jpg" },
  { name: "Manish Sabharwal", designation: "CEO & Production Manager",src: "/public/img/owner-2.jpg" },
  { name: "Ganesh Sabharwal", designation: "Founder & Chairman",src: "/public/img/owner-3.jpg" },
  { name: "Dhruval Sabharwal", designation: "Marketing Director",src: "/public/img/owner-4.jpg" },
  { name: "Yash Sabharwal", designation: "Director",src: "/public/img/owner-5.jpg" },
];

export default function Visionaries() {
     const visionRef = useRef([]);

  useEffect(() => {
    visionRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3 * i, ease: "power3.out" }
      );
    });
  }, []);
  return (
    <div>
         <section className="visionaries-section">
      <h2>Visionaries Behind Dhruval Exim</h2>
      <div className="visionaries-grid">
        {visionariesData.map((v, i) => (
          <div
            key={v.name}
            className="visionary-card"
            ref={(el) => (visionRef.current[i] = el)}
          >
            <img src={v.src} alt="" />
            <div className="visionary-name">{v.name}</div>
            <small>{v.designation}</small>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
