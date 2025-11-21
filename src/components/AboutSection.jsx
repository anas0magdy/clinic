import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './AboutSection.css';

function AboutSection() {
  // استدعاء دالة الترجمة
  const { t } = useLanguage();

  return (
    <section id="about-section" className="about-section slide-in-up">
      {/* استخدام المتغيرات بدلاً من النص الثابت */}
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-section-content">
        <div className="about-image">
          <img 
            src="images/clinic-photo2.jpg" 
            alt="Dr. Hams Samy" 
          />
        </div>
        <div className="about-text">
          <h3>{t.about.name}</h3>
          <p className="about-intro">
            {t.about.intro}
          </p>
          
          <div className="about-description">
            <p>{t.about.desc1}</p>
            <p>{t.about.desc2}</p>
          </div>

          <ul>
            <li>
              <strong>{t.about.activityTitle}</strong>
              <span> {t.about.activityText}</span>
            </li>
            <li>
              <strong>{t.about.approachTitle}</strong>
              <span> {t.about.approachText}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;