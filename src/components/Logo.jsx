import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* الأيقونة الجديدة: تصميم تجريدي للعين (Abstract Eye) */}
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* القوس العلوي (الجفن/القرنية) بلون أزرق داكن */}
        <path 
          d="M10 50C10 50 30 20 90 20" 
          stroke="#002a5c" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        
        {/* القوس السفلي بلون أزرق فاتح ليعطي تداخل وانسيابية */}
        <path 
          d="M10 50C10 50 40 80 90 50" 
          stroke="#007bff" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        
        {/* البؤبؤ (نقطة التركيز) */}
        <circle cx="65" cy="45" r="8" fill="#002a5c" />
        
        {/* لمعة صغيرة في العين للحيوية */}
        <circle cx="68" cy="42" r="2.5" fill="white" />
      </svg>

      {/* النصوص (بجانب اللوجو ليكون العرض متناسقاً، أو تحته حسب الرغبة) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
        <span style={{ 
          fontSize: '1.4rem', 
          fontWeight: '800', 
          color: '#002a5c',
          fontFamily: "'Segoe UI', sans-serif",
          letterSpacing: '-0.5px'
        }}>
          د. هـمـس سـامـي
        </span>
        <span style={{ 
          fontSize: '0.85rem', 
          color: '#007bff',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          استشاري طب وجراحة العيون
        </span>
      </div>
    </div>
  );
};

export default Logo;