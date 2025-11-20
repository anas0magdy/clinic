import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
  
  const services = [
    {
      // 1. تغيير مسار الصورة
      img: "/images/service-1.jpg",
      title: "استشارات طبية",
      description: "استشارات دقيقة وشاملة لجميع الحالات الصحية العامة."
    },
    {
      img: "/images/service-2.jpg",
      title: "متابعة دورية",
      description: "خطط متابعة دورية لضمان أفضل النتائج الصحية."
    },
    {
      img: "/images/service-3.jpg",
      title: "رعاية الأسرة",
      description: "خدمات طبية متكاملة لجميع أفراد الأسرة (كبار وأطفال)."
    }
  ];

  return (
    // 2. إضافة الـ ID المهم
    <section id="services-section" className="services-section slide-in-up">
      <h2 className="section-title">خدماتي</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-card-img" />
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