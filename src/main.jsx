import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// استيراد ملف التحريكات
import './animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ملاحظة: لقد أزلنا <BrowserRouter>