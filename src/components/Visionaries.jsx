import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import o1 from '/public/img/owner-1.jpg'
import o2 from '/public/img/owner-2.jpg'
import o3 from '/public/img/owner-3.jpg'
import o4 from '/public/img/owner-4.jpg'
import o5 from '/public/img/owner-5.jpg'

const visionariesData = [
  { name: "Suresh Sabharwal", designation: "Director" ,src: o1 },
  { name: "Manish Sabharwal", designation: "CEO & Production Manager",src: o2 },
  { name: "Ganesh Sabharwal", designation: "Founder & Chairman",src:o3 },
  { name: "Dhruval Sabharwal", designation: "Marketing Director",src: o4 },
  { name: "Yash Sabharwal", designation: "Director",src:o5},
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
