import React from 'react';
import './TopBar.css';
// استخدم أيقونات SVG خفيفة
import { Phone, Mail } from './Icons'; // سننشئ هذا الملف

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-info">
        <a href="tel:+201000000000">
          <Phone />
          <span>+20 100 000 0000</span>
        </a>
        <a href="mailto:info@drnour.com">
          <Mail />
          <span>info@drnour.com</span>
        </a>
      </div>
      <div className="top-bar-socials">
        {/* يمكنك إضافة روابط السوشيال هنا أيضاً إذا أردت */}
      </div>
    </div>
  );
}

export default TopBar;