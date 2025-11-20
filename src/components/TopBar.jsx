import React from 'react';
import './TopBar.css';
import { Phone, Mail } from './Icons';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-info">
        <a href="tel:+201065957501">
          <Phone />
          {/* ضبط اتجاه الرقم ليظهر بشكل صحيح */}
          <span style={{ direction: 'ltr', display: 'inline-block' }}>0106 595 7501</span>
        </a>
        <a href="mailto:info@drhamssamy.com">
          <Mail />
          <span>info@drhamssamy.com</span>
        </a>
      </div>
      <div className="top-bar-socials">
      </div>
    </div>
  );
}

export default TopBar;