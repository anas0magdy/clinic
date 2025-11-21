import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about-section" className="about-section slide-in-up">
      <h2 className="section-title">عن الدكتور</h2>
      <div className="about-section-content">
        <div className="about-image">
          <img 
            src="images/clinic-photo2.jpg" 
            alt="د. همس سامي" 
          />
        </div>
        <div className="about-text">
          <h3>د. هـمـس سـامـي</h3>
          <p className="about-intro">
            أخصائي طب وجراحة العيون، ومتخصصة في أمراض سطح العين وأمراض القرنية وجراحات سطح العين وتقنيات تصحيح الإبصار الحديثة.
          </p>
          
          <div className="about-description">
            <p>
              تُعد د. همس <strong>أول طبيبة مصرية تنضم إلى الجمعية العالمية لجراحات تصحيح الإبصار (ISRS)</strong>، إلى جانب عضويتها في الجمعية الأوروبية لجفاف العين.
            </p>
            <p>
              تُعد د. همس من روّاد علاج جفاف العين في مصر؛ حيث قامت بتأسيس عيادات متخصصة لجفاف العين في أكثر من مستشفى كبرى، لتكون من أوائل من أدخلوا برامج التشخيص المتقدم والبروتوكولات العالمية لعلاج أمراض سطح العين.
            </p>
          </div>

          <ul>
            <li>
              <strong>النشاط العلمي:</strong>
              <span> شاركت في العديد من المؤتمرات الدولية، وقدمت خبراتها في جلسات تناقش أحدث تطورات علاج الجفاف وتصحيح الإبصار.</span>
            </li>
            <li>
              <strong>النهج الطبي:</strong>
              <span> فهم الأسباب العميقة للمشكلة وليس فقط التعامل مع الأعراض، لضمان نتائج مميزة ورعاية طبية راقية.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;