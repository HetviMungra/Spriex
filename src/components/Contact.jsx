import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { gsap } from "gsap";

export default function Contact() {
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);
  return (
    <div>
      <section id="contact" className="contact-section" ref={contactRef}>
        <h3>Get In Touch</h3>
        <div className="contact-info mb-4">
          <p>Whether you have inquiries about our products or require textile job work services, feel free to reach out to us via email or phone. We look forward to connecting with you.</p>
          <p>
            <strong>Address:</strong> Narsang Tekari, Opposite Bhadar River,
            Sama Katha, Jetpur – 360370,
            Gujarat, India
          </p>
          <p>
            <strong>Phone:</strong>+91 8347668808
            <br />
            <strong>Email:</strong> Contact@dhruvalexim.com
          </p>
          <p >
            <strong>Follow Us:</strong>
            <img className="p-1" src="./public/img/facebook.png" />
             
            <img className="p-1" src="./public/img/instragram.png" />
             <img className="p-1 " src="./public/img/linkdin.png" />
          </p>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn-explore">
                Send
              </button>
            </div>
          </div>
        </form>
        <div className="mt-5">
          <iframe
            title="Dhruval Exim Location"
            src="https://maps.google.com/maps?q=sinnar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
