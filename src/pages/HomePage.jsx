import React from 'react';

// استيراد جميع الأقسام
import NewHero from '../components/NewHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection'; // 1. إضافة قسم التواصل

function HomePage() {
  return (
    <>
      {/* 2. هذه هي أقسام صفحتك بالترتيب */}
      <NewHero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

export default HomePage;