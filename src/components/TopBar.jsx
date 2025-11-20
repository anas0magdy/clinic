import React from 'react';
import './TopBar.css';
import { Phone, Mail } from './Icons';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-info">
        {/* عدل رقم التليفون هنا */}
        <a href="tel:+201xxxxxxxxx">
          <Phone />
          <span>+20 1xx xxx xxxx</span>
        </a>
        {/* عدل الإيميل هنا */}
        <a href="mailto:your-email@example.com">
          <Mail />
          <span>your-email@example.com</span>
        </a>
      </div>
      <div className="top-bar-socials">
      </div>
    </div>
  );
}

export default TopBar;