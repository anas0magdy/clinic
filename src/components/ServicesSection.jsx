import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ServicesSection.css';

function ServicesSection() {
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL;

  const services = [
    {
      img: `${baseUrl}images/lasik.jpg`,
      title: t.services.s1_title,
      description: t.services.s1_desc
    },
    {
      img: `${baseUrl}images/keratoconus.jpg`,
      title: t.services.s2_title,
      description: t.services.s2_desc
    },
    {
      img: `${baseUrl}images/service-3.jpg`,
      title: t.services.s3_title,
      description: t.services.s3_desc
    },
    {
      img: `${baseUrl}images/slitlamp.jpg`,
      title: t.services.s4_title,
      description: t.services.s4_desc
    },
    {
      img: `${baseUrl}images/glaucoma.jpg`,
      title: t.services.s5_title,
      description: t.services.s5_desc
    }
  ];

  return (
    <section id="services-section" className="services-section slide-in-up">
      <h2 className="section-title">{t.services.title}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img 
              src={service.img} 
              alt={service.title} 
              className="service-card-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;