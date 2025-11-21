import React from 'react';
import { LanguageProvider } from './context/LanguageContext'; // استيراد المزود

// المكونات
import TopBar from './components/TopBar'; 
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import HomePage from './pages/HomePage';

function App() {
  return (
    // تغليف التطبيق ليعمل تعدد اللغات
    <LanguageProvider>
      <div>
        <TopBar />
        <Header /> 
        <HomePage /> 
        <Footer />
        <FloatingSocials />
      </div>
    </LanguageProvider>
  );
}

export default App;