import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
  
  const services = [
    {
      img: "images/service-1.jpg",
      title: "علاج جفاف العين نهائياً",
      description: "جلسات متخصصة بأحدث التكنولوجيا لعلاج السبب الحقيقي للجفاف (حرقان، دموع، زغللة) وليس مجرد قطرات مؤقتة."
    },
    {
      img: "images/service-2.jpg",
      title: "عمليات تصحيح الإبصار",
      description: "تقنيات عالمية لتصحيح النظر (ليزك، فيمتو ليزك) بأعلى معايير الأمان، لتعيش حياتك بحرية بدون نظارة."
    },
    {
      img: "images/service-3.jpg",
      title: "فحص الصداع وإجهاد العين",
      description: "تشخيص دقيق لأسباب الصداع المتكرر الناتج عن ضعف النظر أو إجهاد عضلات العين، خاصة لمستخدمي الشاشات."
    }
  ];

  return (
    <section id="services-section" className="services-section slide-in-up">
      <h2 className="section-title">خدمات العيادة</h2>
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