import React from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  
  const baseUrl = import.meta.env.BASE_URL;

  // قائمة صور المراجعات (السكرينات)
  const reviews = [
    { id: 1, img: `${baseUrl}images/review-1.jpg` },
    { id: 2, img: `${baseUrl}images/review-2.jpg` },
    { id: 2, img: `${baseUrl}images/review-3.jpg` },
    { id: 2, img: `${baseUrl}images/review-4.jpg` },
    { id: 2, img: `${baseUrl}images/review-5.jpg` },
    { id: 2, img: `${baseUrl}images/review-6.jpg` },
    { id: 2, img: `${baseUrl}images/review-7.jpg` }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="subtitle">آراء عملائنا</span>
        <h2 className="title">ماذا قال مرضانا؟</h2>
      </div>

      <div className="testimonials-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card-image">
            <img 
              src={review.img} 
              alt="رأي عميل" 
              className="review-img"
              onError={(e) => {
                e.target.style.display = 'none'; // إخفاء الصورة لو فيها مشكلة
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;