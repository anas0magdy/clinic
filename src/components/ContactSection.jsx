import React from 'react';
// 1. إزالة الفورم، واستيراد الأيقونة
import { WhatsApp } from './Icons'; 
import './ContactSection.css';

function ContactSection() {
  // --- بيانات الواتساب ---
  // (استخدم نفس الرقم من FloatingSocials أو غيره)
  const whatsappNumber = '+201000000000'; 
  // ---
  
  return (
    // هذا الـ id مهم جداً لـ react-scroll
    <section id="contact-section" className="contact-section-wrapper">
      <h2 className="section-title">هل أنتِ مستعدة؟</h2>
      <p className="contact-subtitle">
        اضغطي على الزر أدناه لحجز موعدك مباشرة عبر واتساب.
      </p>
      <div className="contact-content">
        {/* 2. إزالة الفورم وإضافة الزر */}
        <a 
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
          className="contact-whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          <span>احجزي موعدك الآن عبر واتساب</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;