import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const productsData = [
  {
    title: "African Printed Fabric",
    img: "/public/img/c-1.png",
    desc:
      "High-quality African prints made with vibrant colors and traditional patterns.",
  },
  {
    title: "Shirting Fabrics",
    img: "/public/img/c-3.jpg",
    desc:
      "Superior cotton shirting fabrics available in a wide variety of colors, textures, and weaves.",
  },
  {
    title: "Designer Sarees Collection",
    img: "/public/img/c-4.jpg",
    desc:
      "Elegant designer sarees crafted with attention to detail and rich textures for every occasion.",
  },
];
export default function Products() {
     const productsRef = useRef([]);

  useEffect(() => {
    productsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.4 * i, ease: "power3.out" }
      );
    });
  }, []);
  return (
    <div>
        <section id="products" className="products-section">
      <h2>Our Products</h2>
      <p>
        Step into a world of superior fabric manufacturing, where cutting-edge
        technology meets unmatched craftsmanship. Every fabric we produce
        reflects precision, durability, and innovation. Experience the finest
        quality, tailored to meet global standards and your unique needs.
      </p>
      <div className="container">
        {productsData.map((product, i) => (
          <div
            className="product-item position-relative mb-5"
            key={product.title}
            ref={(el) => (productsRef.current[i] = el)}
          >
            <img src={product.img} alt={product.title} className="rounded" />
            <div className="product-overlay">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <button className="btn-explore">Explore Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
