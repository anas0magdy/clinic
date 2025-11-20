import React from 'react';
import { Link } from 'react-scroll'; 
import './NewHero.css';

function NewHero() {
  return (
    <section id="new-hero-section" className="new-hero-section fade-in">
      <div className="hero-content-area">
        <span className="hero-subtitle">أخصائية طب الأسرة والتغذية العلاجية</span>
        {/* تم تحديث الاسم */}
        <h1 className="hero-title">د. هـمـس سـامـي</h1>
        <p className="hero-description">
          خبرة لسنوات في تقديم الرعاية الصحية المتكاملة والشاملة 
          لكِ ولعائلتك.
        </p>
        <Link 
          to="contact-section" 
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="hero-cta-button"
        >
          احجزي موعدك الآن
        </Link>
      </div>
      <div className="hero-image-area">
        <img 
          src="/images/doctor-hero.png" 
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