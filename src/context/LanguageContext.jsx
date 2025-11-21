import React, { createContext, useState, useContext, useEffect } from 'react';
import { content } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar'); // اللغة الافتراضية عربي

  useEffect(() => {
    // تغيير اتجاه الصفحة تلقائياً
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';
    
    // تغيير الخط لو حبيت (اختياري)
    document.body.style.fontFamily = lang === 'ar' 
      ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      : "'Roboto', sans-serif";
      
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // دالة لاسترجاع النص المترجم
  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);