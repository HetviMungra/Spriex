import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import c1 from '/public/img/c-1.png'
import c2 from '/public/img/c-3.jpg'
import c3 from '/public/img/c-4.jpg'

const productsData = [
  {
    title: "African Printed Fabric",
    img: c1,
    desc: "High-quality African prints made with vibrant colors and traditional patterns.",
  },
  {
    title: "Shirting Fabrics",
    img: c2,
    desc: "Superior cotton shirting fabrics available in a wide variety of colors, textures, and weaves.",
  },
  {
    title: "Designer Sarees Collection",
    img: c3,
    desc: "Elegant designer sarees crafted with attention to detail and rich textures for every occasion.",
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
      <section id="products" className="products-section mt-5">
        <h2>Our Products</h2>
        <p className="products-description">
          Step into a world of superior fabric manufacturing, where cutting-edge
          technology meets unmatched craftsmanship. Every fabric we produce
          reflects precision, durability, and innovation. Experience the finest
          quality, tailored to meet global standards and your unique needs.
        </p>
        <div className="products-container">
          {productsData.map((product, i) => (
            <div
              className="product-item"
              key={product.title}
              ref={(el) => (productsRef.current[i] = el)}
            >
              <div className="product-image-wrapper">
                <img src={product.img} alt={product.title} className="product-image" />
                <div className="product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <button className="btn-explore">Explore Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <style jsx>{`
        .products-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }
        
        .products-description {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
        }
        
        .products-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          padding: 0 20px;
        }
        
        .product-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .product-item:hover {
          transform: translateY(-5px);
        }
        
        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .product-item:hover .product-image {
          transform: scale(1.05);
        }
        
        .product-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%);
          color: white;
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.5s ease;
        }
        
        .product-item:hover .product-overlay {
          transform: translateY(0);
        }
        
        .product-overlay h3 {
          margin-bottom: 10px;
          font-size: 1.3rem;
        }
        
        .product-overlay p {
          margin-bottom: 15px;
          font-size: 0.95rem;
          line-height: 1.4;
          opacity: 0.9;
        }
        
        .btn-explore {
          background: #fff;
          color: #333;
          border: none;
          padding: 10px 25px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-explore:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
        
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .products-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding: 0 15px;
          }
          
          .product-image-wrapper {
            height: 300px;
          }
          
          h2 {
            font-size: 2.2rem;
          }
          
          .products-description {
            font-size: 1rem;
            padding: 0 20px;
          }
        }
        
        /* Mobile Landscape */
        @media (max-width: 768px) {
          .products-section {
            padding: 40px 15px;
          }
          
          .products-container {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
            gap: 20px;
          }
          
          .product-image-wrapper {
            height: 280px;
          }
          
          h2 {
            font-size: 2rem;
          }
          
          .products-description {
            font-size: 0.95rem;
            margin-bottom: 40px;
            padding: 0;
          }
          
          .product-overlay {
            transform: translateY(0);
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
            padding: 20px 15px 15px;
          }
          
          .product-overlay h3 {
            font-size: 1.2rem;
          }
          
          .product-overlay p {
            font-size: 0.9rem;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .products-section {
            padding: 30px 10px;
          }
          
          h2 {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }
          
          .products-description {
            font-size: 0.9rem;
            margin-bottom: 30px;
            line-height: 1.5;
          }
          
          .products-container {
            padding: 0 10px;
            gap: 15px;
          }
          
          .product-image-wrapper {
            height: 250px;
          }
          
          .product-overlay {
            padding: 15px 10px 10px;
          }
          
          .product-overlay h3 {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }
          
          .product-overlay p {
            font-size: 0.85rem;
            margin-bottom: 10px;
          }
          
          .btn-explore {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }
        
        /* Large Desktop */
        @media (min-width: 1600px) {
          .products-section {
            max-width: 1400px;
          }
          
          .products-container {
            gap: 40px;
          }
          
          .product-image-wrapper {
            height: 400px;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .product-overlay {
            transform: translateY(0);
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
          }
          
          .product-item:hover {
            transform: none;
          }
          
          .product-item:hover .product-image {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}