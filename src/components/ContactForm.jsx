import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form slide-in-up">
      <div className="form-group">
        <label htmlFor="name">الاسم بالكامل</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">رقم الهاتف</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="message">الرسالة</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">إرسال الرسالة</button>
      </div>
    </form>
  );
}

export default ContactForm;
