import React from 'react';

import NewHero from '../components/NewHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection';
import MediaSection from '../components/MediaSection'; // 1. استيراد
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <NewHero />
      <AboutSection />
      <ServicesSection />
      
      <VideoSection />
      
      {/* 2. وضع القسم الجديد هنا */}
      <MediaSection />
      
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;