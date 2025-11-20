import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', lineHeight: '1.2' }}>
      {/* أيقونة العين الفنية - SVG */}
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* دائرة خلفية خفيفة */}
        <circle cx="50" cy="50" r="48" stroke="#007bff" strokeWidth="2" fill="#f0f8ff" opacity="0.3" />
        
        {/* رسمة العين */}
        <path d="M15 50C15 50 30 25 50 25C70 25 85 50 85 50C85 50 70 75 50 75C30 75 15 50 15 50Z" stroke="#002a5c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
        <circle cx="50" cy="50" r="12" fill="#007bff" />
        <circle cx="54" cy="46" r="4" fill="white" />
        
        {/* حرف H منمق داخل العين أو فوقها (اختياري) */}
        <path d="M50 20V10M50 90V80" stroke="#007bff" strokeWidth="2" />
      </svg>

      {/* النصوص تحت اللوجو */}
      <div style={{ marginTop: '6px' }}>
        <span style={{ 
          display: 'block', 
          fontSize: '1.2rem', 
          fontWeight: '800', 
          color: '#002a5c',
          fontFamily: "'Segoe UI', sans-serif"
        }}>
          د. هـمـس سـامـي
        </span>
        <span style={{ 
          display: 'block', 
          fontSize: '0.75rem', 
          color: '#555',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          طب وجراحة العيون
        </span>
      </div>
    </div>
  );
};

export default Logo;