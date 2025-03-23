import React from "react";
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - Branding */}
        <div className="footer-branding">
          <h3>Mount Perry Rural Fire Service</h3>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right - Nav Links */}
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#donate">Donate</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
