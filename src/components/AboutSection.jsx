import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about-section" className="about-section slide-in-up">
      <h2 className="section-title">نبذة عني</h2>
      <div className="about-section-content">
        <div className="about-image">
          <img 
            src="/images/clinic-photo.jpg" 
            alt="صورة العيادة" 
          />
        </div>
        <div className="about-text">
          {/* تم تحديث الاسم */}
          <h3>د. هـمـس سـامـي</h3>
          <p>
            أنا دكتورة همس سامي، أتمتع بخبرة واسعة في تقديم الرعاية الصحية الشاملة. 
            أؤمن بأهمية بناء علاقة قوية مبنية على الثقة مع مرضاي، والاستماع إليهم بعناية لفهم احتياجاتهم الصحية.
          </p>
          <ul>
            <li>
              <strong>الخبرات:</strong>
              <span> خبرة في المستشفيات الجامعية والعيادات الخاصة.</span>
            </li>
            <li>
              <strong>الشهادات:</strong>
              <span> البكالوريوس في الطب والجراحة، ودراسات عليا متخصصة.</span>
            </li>
            <li>
              <strong>فلسفتي:</strong>
              <span> أؤمن بأن "الوقاية خير من العلاج" وأسعى لتثقيف مرضاي لنمط حياة صحي.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;