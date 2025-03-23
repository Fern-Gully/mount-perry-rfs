import React from "react";
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Mount Perry Rural Fire Service</h2>

        <div className="about-text">
          <p>
            Mount Perry Rural Fire Service is a volunteer-led brigade that protects the homes,
            properties, and bushlands of our local community. Located in the heart of rural
            Queensland, our dedicated firefighters are on-call 24/7 — rain, hail, or bushfire.
          </p>

          <p>
            From battling fast-moving grass fires to providing education on fire safety,
            our crew members put their lives on the line to keep Mount Perry safe. But we don’t do
            it for recognition — we do it for our neighbours, our families, and the land we love.
          </p>

          <p>
            Your donations help us fund life-saving equipment, maintain our vehicles, and support
            volunteer training programs. Every contribution ensures we can continue showing up when
            it matters most.
          </p>
        </div>

        <div className="about-gallery">
          <img src="/firies-1.webp" alt="Volunteer in action" />
          <img src="/firies-2.webp" alt="Mount Perry crew" />
          <img src="/firies-3.webp" alt="Bushfire response" />
        </div>
      </div>
    </section>
  );
};

export default About;
