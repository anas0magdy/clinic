import React from 'react';

const Logo = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      {/* الصورة بحجم كبير وواضح */}
      <img 
        src={`${baseUrl}images/logo.jpg`} 
        alt="Dr. Hams Samy" 
        style={{ 
          height: '50px',       /* كبرنا الارتفاع جداً عشان التفاصيل تبان */
          width: 'auto',        /* العرض يتظبط براحته */
          maxWidth: '250px',    /* حد أقصى للعرض عشان ميبوظش الموبايل */
          objectFit: 'contain', 
          display: 'block'
        }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* فاصل رأسي صغير (اختياري) */}
      <div style={{ width: '1px', height: '40px', background: '#eee' }}></div>

      {/* النص العربي بجانب اللوجو */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.4' }}>
        <span style={{ 
          fontSize: '1.1rem', /* تصغير الخط العربي قليلاً للتناسق */
          fontWeight: '800', 
          color: '#002a5c',
          fontFamily: "'Cairo', sans-serif",
          whiteSpace: 'nowrap'
        }}>
          د. هـمـس سـامـي
        </span>
        <span style={{ 
          fontSize: '0.75rem', 
          color: '#007bff',
          fontWeight: '700',
          fontFamily: "'Cairo', sans-serif",
          whiteSpace: 'nowrap'
        }}>
          طب وجراحة العيون
        </span>
      </div>
    </div>
  );
};

export default Logo;