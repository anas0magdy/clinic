import React from 'react';

import NewHero from '../components/NewHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection'; // 1. استيراد الفيديو
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <NewHero />
      <AboutSection />
      <ServicesSection />
      
      {/* 2. وضع الفيديو بعد الخدمات مباشرة */}
      <VideoSection />
      
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;