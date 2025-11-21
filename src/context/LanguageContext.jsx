import React, { createContext, useState, useContext, useEffect } from 'react';
import { content } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    // تغيير اتجاه الصفحة
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';
    
    // تغيير كلاس الخط في الـ body
    document.body.classList.remove('font-ar', 'font-en');
    document.body.classList.add(lang === 'ar' ? 'font-ar' : 'font-en');
      
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);