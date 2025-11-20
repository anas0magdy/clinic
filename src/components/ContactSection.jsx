import React from 'react';
import { WhatsApp } from './Icons'; 
import './ContactSection.css';

function ContactSection() {
  const whatsappNumber = '201065957501'; 
  
  return (
    <section id="contact-section" className="contact-section-wrapper">
      <h2 className="section-title">رجّع لعينك راحتها</h2>
      <p className="contact-subtitle">
        متستحملش الجفاف والصداع اكتر من كدا. اضغط لحجز كشفك أو جلستك عبر واتساب.
      </p>
      <div className="contact-content">
        <a 
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
          className="contact-whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          <span>احجز موعدك الآن </span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;