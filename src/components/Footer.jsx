import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();
  // حالة لتحديد الفرع المعروض حالياً (الافتراضي: الفرع الأول)
  const [activeBranch, setActiveBranch] = useState(1);

  // روابط الخرائط
  const mapLinks = {
    1: "https://maps.google.com/maps?q=Thawra%20street,%20Egyptian%20Army%20Bridge,%20El%20Nozha&t=&z=15&ie=UTF8&iwloc=&output=embed", // فرع الثورة
    2: "https://maps.google.com/maps?q=52%20Abu%20El%20Atahiya%20St,%20Nasr%20City&t=&z=15&ie=UTF8&iwloc=&output=embed" // فرع مدينة نصر
  };

  return (
    <footer className="site-footer-main">
      <div className="footer-content">
        
        {/* قسم الخريطة مع التابات */}
        <div className="footer-map-section">
          {/* أزرار التبديل */}
          <div className="branch-tabs">
            <button 
              className={`branch-tab ${activeBranch === 1 ? 'active' : ''}`}
              onClick={() => setActiveBranch(1)}
            >
              {t.footer.branch1Name}
            </button>
            <button 
              className={`branch-tab ${activeBranch === 2 ? 'active' : ''}`}
              onClick={() => setActiveBranch(2)}
            >
              {t.footer.branch2Name}
            </button>
          </div>

          {/* الخريطة */}
          <div className="footer-map">
            <iframe 
              key={activeBranch} /* مفتاح لإعادة تحميل الخريطة عند التغيير */
              width="100%" 
              height="300" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src={mapLinks[activeBranch]}
              title="Clinic Location"
            ></iframe>
          </div>
        </div>

        {/* قسم المعلومات والعناوين */}
        <div className="footer-info">
          <h3>{t.hero.name}</h3> 
          
          <div className="address-item">
            <strong>📍 {t.footer.branch1Name}:</strong>
            <p>{t.footer.branch1Address}</p>
          </div>
          
          <div className="address-item">
            <strong>📍 {t.footer.branch2Name}:</strong>
            <p>{t.footer.branch2Address}</p>
          </div>

          <div className="contact-details">
            <p>
              <a href="tel:+201065957501" style={{ direction: 'ltr', display: 'inline-block', marginInlineStart: '5px' }}>
                📞 0106 595 7501
              </a>
            </p>
            <p>
              <a href="mailto:info@drhamssamy.com">✉️ info@drhamssamy.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ direction: 'ltr', fontFamily: 'sans-serif' }}>
          All rights reserved © {new Date().getFullYear()} Anas Magdy
        </p>
      </div>
    </footer>
  );
}

export default Footer;