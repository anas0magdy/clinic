import React from 'react';
import { WhatsApp } from './Icons'; 
import { useLanguage } from '../context/LanguageContext';
import './ContactSection.css';

function ContactSection() {
  const { t } = useLanguage();
  const whatsappNumber = '201065957501'; 
  
  return (
    <section id="contact-section" className="contact-section-wrapper">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-subtitle">
        {t.contact.subtitle}
      </p>
      <div className="contact-content">
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          className="contact-whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          <span>{t.contact.btn}</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;