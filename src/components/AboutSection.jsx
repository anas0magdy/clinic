import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    // 1. إضافة الـ ID المهم
    <section id="about-section" className="about-section slide-in-up">
      <h2 className="section-title">نبذة عني</h2>
      <div className="about-section-content">
        <div className="about-image">
          {/* 2. إضافة صورة العيادة كما طلبت */}
          <img 
            src="/images/clinic-photo.jpg" 
            alt="صورة العيادة" 
          />
        </div>
        <div className="about-text">
          <h3>د. نـور سـلـيـم</h3>
          <p>
            أنا دكتورة نور سليم، أخصائية طب الأسرة (كمثال)، أتمتع بخبرة تزيد عن 10 سنوات في تقديم الرعاية الصحية الشاملة. 
            أؤمن بأهمية بناء علاقة قوية مبنية على الثقة مع مرضاي.
          </p>
          <ul>
            <li>
              <strong>الخبرات:</strong>
              <span> حاصلة على ماجستير في طب الأسرة، وعملت في مستشفى (X).</span>
            </li>
            <li>
              <strong>الشهادات:</strong>
              <span> البكالوريوس في الطب والجراحة، وعضو في الجمعية الطبية.</span>
            </li>
            <li>
              <strong>فلسفتي:</strong>
              <span> أؤمن بأن "الوقاية خير من العلاج" وأسعى لتثقيف مرضاي.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;