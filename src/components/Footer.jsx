import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer-main">
      <div className="footer-content">
        <div className="footer-map">
          {/* تم تحديث الخريطة لتشير إلى العنوان: 52 شارع أبو العتاهية - مدينة نصر */}
          <iframe 
            width="100%" 
            height="300" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            src="https://maps.google.com/maps?q=52%20Abu%20El%20Atahiya%20St,%20Nasr%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="موقع العيادة"
          ></iframe>
        </div>
        <div className="footer-info">
          <h3>د. هـمـس سـامـي</h3>
          <p>
            العنوان: 52 شارع أبو العتاهية، امتداد عباس العقاد، مدينة نصر، القاهرة.
          </p>
          <p>
            رقم الهاتف: 
            <a href="tel:+201065957501" style={{ direction: 'ltr', display: 'inline-block', marginLeft: '5px' }}>
              0106 595 7501
            </a>
          </p>
          <p>
            البريد الإلكتروني: <a href="mailto:info@drhamssamy.com">info@drhamssamy.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} د. همس سامي</p>
      </div>
    </footer>
  );
}

export default Footer;