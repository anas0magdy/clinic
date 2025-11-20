import React from 'react';

// استيراد جميع الأقسام
import NewHero from '../components/NewHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection'; // 1. استيراد القسم الجديد
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <NewHero />
      <AboutSection />
      <ServicesSection />
      
      {/* 2. إضافة القسم هنا */}
      <TestimonialsSection />
      
      <ContactSection />
    </>
  );
}

export default HomePage;