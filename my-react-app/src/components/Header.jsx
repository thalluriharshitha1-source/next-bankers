import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/images/nb.png" alt="Next Bankers" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        {isMobile && (
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
            onClick={closeMenu}
          >
            <nav
              className="mobile-nav"
              onClick={(e) => e.stopPropagation()}
            >
              <ul>
                <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                <li>
                  <Link to="/apply" className="btn-primary" onClick={closeMenu}>
                    Apply Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="desktop-nav">
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li>
                <Link to="/apply" className="btn-primary">
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;