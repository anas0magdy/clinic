import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo'; 
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      
      <div className="header-container">
        {/* اللوجو (مكون Logo مش محتاج تعديل صور، لكن لو استخدمت img تأكد من المسار) */}
        <div className="logo-wrapper">
          <Logo />
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="new-hero-section"
                spy={true} smooth={true} duration={500} offset={-100}
                className="nav-link"
                onClick={handleLinkClick}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about-section"
                spy={true} smooth={true} duration={500} offset={-100}
                className="nav-link"
                onClick={handleLinkClick}
              >
                عن الدكتور
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services-section"
                spy={true} smooth={true} duration={500} offset={-100}
                className="nav-link"
                onClick={handleLinkClick}
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                spy={true} smooth={true} duration={500} offset={-100}
                className="nav-link book-btn"
                onClick={handleLinkClick}
              >
                احجز موعد
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header;