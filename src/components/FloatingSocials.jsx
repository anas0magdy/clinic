import React from 'react';
import './FloatingSocials.css';
import { Phone, WhatsApp, Facebook, Instagram } from './Icons';
import { useLanguage } from '../context/LanguageContext';

function FloatingSocials() {
  const { toggleLanguage, lang } = useLanguage(); 

  const phoneNumber = '+201065957501';
  const whatsappNumber = '201065957501';
  
  const facebookLink = 'https://www.facebook.com/share/1EM5iPsj13/?mibextid=wwXIfr';
  const instagramLink = 'https://www.instagram.com/dr.hams_samy'; 
  
  return (
    <div className="floating-container">
      {/* زر اللغة العائم (فوق الفيسبوك) */}
      <button 
        onClick={toggleLanguage} 
        className="floating-icon language-float-btn"
        aria-label="Change Language"
      >
        {lang === 'ar' ? 'En' : 'ع'}
      </button>

      <a 
        href={facebookLink} 
        className="floating-icon facebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="فيسبوك"
      >
        <Facebook />
      </a>
      <a 
        href={instagramLink} 
        className="floating-icon instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="انستجرام"
      >
        <Instagram />
      </a>
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        className="floating-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
      >
        <WhatsApp />
      </a>
      <a 
        href={`tel:${phoneNumber}`} 
        className="floating-icon phone"
        aria-label="اتصال"
      >
        <Phone />
      </a>
    </div>
  );
}

export default FloatingSocials;