import React from "react";
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Text Section */}
        <div className="hero-text">
          <h1>Support Mount Perry’s First Responders</h1>
          <p>
            Your donation helps our Rural Fire Service stay equipped, trained, and ready
            to protect our community. Every dollar counts.
          </p>
          <a href="#donate" className="hero-cta">Donate Now</a>
        </div>

        {/* Image Section */}
        <div className="hero-image">
          <img
            src="/firefighters-hero.webp"
            alt="Mount Perry RFS firefighters"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
