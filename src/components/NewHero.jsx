import React from 'react';
import { Link } from 'react-scroll'; // استخدام Link من react-scroll
import './NewHero.css';

function NewHero() {
  return (
    // 1. إضافة الـ ID المهم
    <section id="new-hero-section" className="new-hero-section fade-in">
      <div className="hero-content-area">
        <span className="hero-subtitle">أخصائية طب الأسرة (مثال)</span>
        <h1 className="hero-title">د. نـــور ســلــيــم</h1>
        <p className="hero-description">
          خبرة لسنوات في تقديم الرعاية الصحية المتكاملة والشاملة 
          لكِ ولعائلتك.
        </p>
        {/* 2. تغيير الزر لـ react-scroll Link */}
        <Link 
          to="contact-section" // اسم الـ ID للقسم
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
          // 3. تغيير مسار الصورة
          src="/images/doctor-hero.png" 
          alt="صورة الدكتورة نور سليم"
          className="hero-image"
        />
        <div className="hero-image-bg-shape1"></div>
        <div className="hero-image-bg-shape2"></div>
      </div>
    </section>
  );
}

export default NewHero;