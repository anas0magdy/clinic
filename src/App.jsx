import React from 'react';

// المكونات
import TopBar from './components/TopBar'; // 1. الشريط العلوي الجديد
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import HomePage from './pages/HomePage'; // 2. سنضع كل شيء هنا

function App() {
  return (
    <div>
      <TopBar /> {/* 3. إضافة الشريط العلوي */}
      <Header /> 
      
      {/* 4. عرض الصفحة الرئيسية مباشرة */}
      <HomePage /> 

      <Footer />
      <FloatingSocials />
    </div>
  );
}

export default App;
// ملاحظة: لقد أزلنا <Routes> و <Route>