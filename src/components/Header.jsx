import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo'; 
import { useLanguage } from '../context/LanguageContext'; 
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        
        {/* اللوجو (شمال دائماً) */}
        <div className="logo-wrapper">
          <Logo />
        </div>

        {/* القسم الأيمن (زر الموبايل + القائمة) */}
        <div className="header-right-section">
          
          {/* زر الموبايل */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* القائمة */}
          <nav className={`nav-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <ul>
              <li>
                <Link activeClass="active" to="new-hero-section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link" onClick={handleLinkClick}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="about-section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link" onClick={handleLinkClick}>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="services-section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link" onClick={handleLinkClick}>
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="media-section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link" onClick={handleLinkClick}>
                  {t.nav.media}
                </Link>
              </li>
              <li>
                <Link to="contact-section" spy={true} smooth={true} duration={500} offset={-100} className="nav-link book-btn" onClick={handleLinkClick}>
                  {t.nav.book}
                </Link>
              </li>
              <li>
                <button onClick={toggleLanguage} className="lang-switch-btn">
                  {lang === 'ar' ? 'English' : 'عربي'}
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;