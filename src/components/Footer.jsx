import React from 'react';
import './Footer.css'; // سنعدل هذا الملف

function Footer() {
  return (
    <footer className="site-footer-main">
      <div className="footer-content">
        <div className="footer-map">
          {/* هذا كود Google Map Embed (استبدل src بالرابط الصحيح) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.666017300306!2d31.23340831511527!3d30.04646798188182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c8f1036c0d%3A0x60a87a8f1e6f4a3e!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1677777777777!5m2!1sen!2seg" 
            width="100%" 
            height="300" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع العيادة"
          ></iframe>
        </div>
        <div className="footer-info">
          <h3>د. نـور سـلـيـم</h3>
          <p>
            العنوان: 123 شارع المثال، ميدان التحرير، القاهرة (العنوان التجريبي).
          </p>
          <p>
            رقم الهاتف: <a href="tel:+201000000000">+20 100 000 0000</a>
          </p>
          <p>
            البريد الإلكتروني: <a href="mailto:info@drnour.com">info@drnour.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} - تطوير: (اسمك أو شركتك)</p>
      </div>
    </footer>
  );
}

export default Footer;
