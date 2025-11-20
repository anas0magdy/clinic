import React from 'react';
import { Link } from 'react-scroll'; 
import './NewHero.css';

function NewHero() {
  return (
    <section id="new-hero-section" className="new-hero-section fade-in">
      <div className="hero-content-area">
        <span className="hero-subtitle">
           أول طبيبة مصرية في الجمعية العالمية لجراحات تصحيح الإبصار <span className="english-text">(ISRS) EG</span>
        </span>
        
        <h1 className="hero-title">د. هـمـس سـامـي</h1>
        
        <p className="hero-description">
          رؤية أوضح، وحياة خالية من ألم الجفاف.
          نقدم لك أحدث بروتوكولات علاج جفاف العين نهائياً، وتقنيات تصحيح الإبصار العالمية، لأن عينك تستحق أفضل رعاية.
        </p>
        
        <Link 
          to="contact-section" 
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="hero-cta-button"
        >
          احجز كشفك الآن
        </Link>
      </div>
      <div className="hero-image-area">
        <img 
          src="images/doctor-hero.png" 
          alt="د. همس سامي"
          className="hero-image"
        />
        <div className="hero-image-bg-shape1"></div>
        <div className="hero-image-bg-shape2"></div>
      </div>
    </section>
  );
}

export default NewHero;