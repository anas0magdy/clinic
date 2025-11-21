import React from 'react';
import { Link } from 'react-scroll'; 
import './NewHero.css';

function NewHero() {
  return (
    <section id="new-hero-section" className="new-hero-section fade-in">
      <div className="hero-content-area">
        {/* العضويات العالمية */}
        <div className="hero-badges">
          <span className="hero-subtitle">
            أول طبيبة مصرية عضو في الجمعية العالمية لجراحات تصحيح الإبصار <span className="english-text">(ISRS)</span>
          </span>
          <span className="hero-subtitle secondary">
            وعضو الجمعية الأوروبية لجفاف العين
          </span>
        </div>
        
        <h1 className="hero-title">د. هـمـس سـامـي</h1>
        
        {/* الشعار الجديد */}
        <h2 className="hero-slogan">
          معايير عالمية… برعاية طبية على أرض مصرية.
        </h2>

        <p className="hero-description">
          خبرة متخصصة في أمراض سطح العين وأمراض القرنية، مع تميّز في جراحات سطح العين وتقنيات تصحيح الإبصار المتقدمة، مدعومة بأحدث بروتوكولات علاج جفاف العين عالمياً.
          <br />
          رعاية طبية راقية مبنية على العلم والخبرة لضمان تجربة علاجية متقدمة ونتائج ترتقي بتوقعاتك.
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
          src="images/doctor-hero2.jpg" 
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