import React from 'react';
import { Link } from 'react-scroll'; 
import { useLanguage } from '../context/LanguageContext'; 
import './NewHero.css';

function NewHero() {
  const { t, lang } = useLanguage();

  return (
    <section id="new-hero-section" className="new-hero-section fade-in">
      <div className="hero-content-area">
        <div className="hero-badges">
          <span className="hero-subtitle">
            {t.hero.badge1} 
            {lang === 'ar' && <span className="english-text"> (ISRS)</span>}
          </span>
          <span className="hero-subtitle secondary">
            {t.hero.badge2}
          </span>
        </div>
        
        {/* استخدام الاسم المترجم هنا */}
        <h1 className="hero-title">{t.hero.name}</h1>
        
        <h2 className="hero-slogan">
          {t.hero.slogan}
        </h2>

        <p className="hero-description">
          {t.hero.description}
        </p>
        
        <Link 
          to="contact-section" 
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="hero-cta-button"
        >
          {t.hero.cta}
        </Link>
      </div>
      <div className="hero-image-area">
        <img 
          src="images/doctor-hero2.jpg" 
          alt={t.hero.name}
          className="hero-image"
        />
        <div className="hero-image-bg-shape1"></div>
        <div className="hero-image-bg-shape2"></div>
      </div>
    </section>
  );
}

export default NewHero;