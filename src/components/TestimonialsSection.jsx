import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL;

  // قائمة الـ 7 صور
  const reviews = [
    { id: 1, img: `${baseUrl}images/review-1.jpg` },
    { id: 2, img: `${baseUrl}images/review-2.jpg` },
    { id: 3, img: `${baseUrl}images/review-3.jpg` },
    { id: 4, img: `${baseUrl}images/review-4.jpg` },
    { id: 5, img: `${baseUrl}images/review-5.jpg` },
    { id: 6, img: `${baseUrl}images/review-6.jpg` },
    { id: 7, img: `${baseUrl}images/review-7.jpg` }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="subtitle">{t.reviews.subtitle}</span>
        <h2 className="title">{t.reviews.title}</h2>
      </div>

      <div className="testimonials-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card-image">
            <img 
              src={review.img} 
              alt="Client Review" 
              className="review-img"
              // إخفاء الصورة لو مش موجودة عشان ماتبوظش الشكل
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;