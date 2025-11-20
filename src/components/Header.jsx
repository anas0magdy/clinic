import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  // 1. تعديل الـ States
  const [scrolled, setScrolled] = useState(false); // لتصغير الهيدر
  const [isVisible, setIsVisible] = useState(true); // لإخفاء/إظهار الهيدر
  const [lastScrollY, setLastScrollY] = useState(0); // لتحديد اتجاه السكرول
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // لفتح قائمة الموبايل

  // 2. تعديل الـ Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // منطق تصغير الهيدر
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // منطق إخفاء/إظهار الهيدر (يعمل على الديسكتوب فقط)
      if (window.innerWidth > 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling Down
          setIsVisible(false);
        } else {
          // Scrolling Up
          setIsVisible(true);
        }
      } else {
        // على الموبايل، اجعله ظاهراً دائماً
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // 3. دالة لإغلاق المنيو عند الضغط على لينك
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // 4. تطبيق الكلاسات الديناميكية
    <header className={`
      site-header 
      ${scrolled ? "scrolled" : ""} 
      ${!isVisible ? "hidden" : ""}
    `}>
      
      {/* 5. تعديل الهيكل ليدعم الموبايل منيو */}
      <div className="header-left">
        {/* زر الهمبرجر (يظهر في الموبايل فقط) */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* حاوية اللينكات (للديسكتوب + قائمة الموبايل المنسدلة) */}
        <div className={`header-nav-container ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="new-hero-section"
                  spy={true} smooth={true} duration={500} offset={-80}
                  className="nav-link"
                  onClick={handleLinkClick} // 6. إضافة دالة الإغلاق
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about-section"
                  spy={true} smooth={true} duration={500} offset={-80}
                  className="nav-link"
                  onClick={handleLinkClick} // 6. إضافة دالة الإغلاق
                >
                  من أنا
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="services-section"
                  spy={true} smooth={true} duration={500} offset={-80}
                  className="nav-link"
                  onClick={handleLinkClick} // 6. إضافة دالة الإغلاق
                >
                  خدماتي
                </Link>
              </li>
            </ul>
          </nav>
          
          <Link
            to="contact-section"
            spy={true} smooth={true} duration={500} offset={-80}
            className="header-cta-button"
            onClick={handleLinkClick} // 6. إضافة دالة الإغلاق
          >
            تـواصـل الآن
          </Link>
        </div>
      </div>

      <div className="logo">
        <img src="/images/logo.png" alt="لوجو عيادة د. نور" />
      </div>

    </header>
  );
}

export default Header;