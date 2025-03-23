import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Mount Perry RFS</Link>
        </div>

        <div className="navbar-links">
          {/* HOME — if already on /, scroll to top. Otherwise, route to / */}
          {isHome ? (
            <a href="#home">Home</a>
          ) : (
            <Link to="/">Home</Link>
          )}

          {/* ABOUT — route to full page */}
          <Link to="/about">About</Link>

          {/* DONATE — same logic: only works from homepage */}
          {isHome ? (
            <a href="#donate" className="donate-button">Donate Now</a>
          ) : (
            <Link to="/" className="donate-button">Donate Now</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
