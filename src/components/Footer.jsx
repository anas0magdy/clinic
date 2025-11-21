import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer-main">
      <div className="footer-content">
        <div className="footer-map">
          <iframe 
            width="100%" 
            height="300" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=52%20Abu%20El%20Atahiya%20St,%20Nasr%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Clinic Location"
          ></iframe>
        </div>
        <div className="footer-info">
          {/* الاسم من الترجمة */}
          <h3>{t.hero.name}</h3> 
          <p>
            {t.footer.address}
          </p>
          <p>
            <a href="tel:+201065957501" style={{ direction: 'ltr', display: 'inline-block', marginInlineStart: '5px' }}>
              0106 595 7501
            </a>
          </p>
          <p>
            <a href="mailto:info@drhamssamy.com">info@drhamssamy.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        {/* تم تثبيت النص بالإنجليزية وتغيير الاسم لـ Anas Magdy كما طلبت */}
        <p style={{ direction: 'ltr', fontFamily: 'sans-serif' }}>
          All rights reserved © {new Date().getFullYear()} Anas Magdy
        </p>
      </div>
    </footer>
  );
}

export default Footer;