import React from 'react';
import './FloatingSocials.css';
// 1. استيراد كل الأيقونات
import { Phone, WhatsApp, Facebook, Instagram } from './Icons';

function FloatingSocials() {
  // --- استبدل هذا بمعلوماتك ---
  const phoneNumber = '+201000000000';
  const whatsappNumber = '+201000000000'; // رقم واتساب (مع كود الدولة)
  const facebookLink = 'https://www.facebook.com/your-page';
  const instagramLink = 'https://www.instagram.com/your-profile';
  // --- نهاية جزء المعلومات ---

  return (
    <div className="floating-container">
      {/* 2. إضافة كل الأيقونات */}
      <a 
        href={facebookLink} 
        className="floating-icon facebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="صفحتنا على فيسبوك"
      >
        <Facebook />
      </a>
      <a 
        href={instagramLink} 
        className="floating-icon instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="صفحتنا على انستجرام"
      >
        <Instagram />
      </a>
      <a 
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
        className="floating-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <WhatsApp />
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-icon phone"
        aria-label="اتصل بنا هاتفياً"
      >
        <Phone />
      </a>
    </div>
  );
}

export default FloatingSocials;