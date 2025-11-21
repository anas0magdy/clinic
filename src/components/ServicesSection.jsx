import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
  
  const baseUrl = import.meta.env.BASE_URL;

  const services = [
    {
      // يفضل هنا وضع صورة للدكتورة وهي تجري عملية تصحيح إبصار
      img: `${baseUrl}images/lasik.jpg`,
      title: "عمليات تصحيح الإبصار (الليزك)",
      description: "إجراء عمليات الليزك وتصحيح الإبصار بأحدث التقنيات العالمية لضمان رؤية ممتازة والاستغناء عن النظارة."
    },
    {
      // صورة توضيحية لزراعة الحلقات أو جهاز الفحص الخاص بها
      img: `${baseUrl}images/keratoconus.jpg`,
      title: "القرنية المخروطية",
      description: "عمليات تثبيت وزراعة الحلقات لحالات القرنية المخروطية لتقوية القرنية وتحسين جودة الرؤية."
    },
    {
      // صورة للدكتورة أثناء جلسة علاج جفاف العين (LipiFlow أو IPL)
      img: `${baseUrl}images/service-3.jpg`,
      title: "علاج جفاف العين وأمراض سطح العين",
      description: "أحدث فحوصات لتشخيص وعلاج أسباب وأنواع جفاف العين وجميع أمراض سطح العين بأحدث التقنيات."
    },
    {
      // صورة لجهاز فحص العين الشامل
      img: `${baseUrl}images/slitlamp.jpg`,
      title: "فحص شامل للعين",
      description: "فحص روتيني دقيق للاطمئنان على صحة العين، الشبكية، والقرنية، والكشف المبكر عن أي مشاكل."
    },
    {
      // صورة لجهاز قياس ضغط العين
      img: `${baseUrl}images/glaucoma.jpg`,
      title: "متابعة ضغط العين والجلوكوما",
      description: "تشخيص ومتابعة حالات المياه الزرقاء (الجلوكوما) وضغط العين للحفاظ على العصب البصري."
    }
  ];

  return (
    <section id="services-section" className="services-section slide-in-up">
      {/* تم تغيير العنوان لـ "الخدمات" فقط */}
      <h2 className="section-title">الخدمات</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img 
              src={service.img} 
              alt={service.title} 
              className="service-card-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none'; 
              }}
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