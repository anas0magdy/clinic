import React from 'react';
import './FloatingSocials.css';
import { Phone, WhatsApp, Facebook, Instagram } from './Icons';

function FloatingSocials() {
  // <<< تم تحديث البيانات بناءً على اللينكات >>>
  const phoneNumber = '+201xxxxxxxxx'; // (لسه محتاجين رقم التليفون)
  const whatsappNumber = '+201xxxxxxxxx'; // (لسه محتاجين رقم الواتساب)
  
  // اللينكات اللي انت بعتها
  const facebookLink = 'https://www.facebook.com/share/1EM5iPsj13/?mibextid=wwXIfr';
  const instagramLink = 'https://www.instagram.com/dr.hams_samy'; 
  // -----------------------

  return (
    <div className="floating-container">
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