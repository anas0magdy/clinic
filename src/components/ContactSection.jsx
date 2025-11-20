import React from 'react';
import { WhatsApp } from './Icons'; 
import './ContactSection.css';

function ContactSection() {
  // <<< عدل رقم الواتساب هنا >>>
  const whatsappNumber = '+201xxxxxxxxx'; 
  // ---------------------------
  
  return (
    <section id="contact-section" className="contact-section-wrapper">
      <h2 className="section-title">هل أنتِ مستعدة؟</h2>
      <p className="contact-subtitle">
        اضغطي على الزر أدناه لحجز موعدك مباشرة عبر واتساب.
      </p>
      <div className="contact-content">
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