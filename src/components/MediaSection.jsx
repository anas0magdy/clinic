import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './MediaSection.css';

function MediaSection() {
  const { t } = useLanguage();

  const videos = [
    { id: "NujjnCYnSY0", title: "أضرار المكياج وجفاف العين وكيفية الوقاية" },
    { id: "e1AUG4nORW8", title: "الفرق بين الليزك والفيمتو سمايل وتصحيح الإبصار" },
    { id: "lI_hTsFN18Y", title: "نصائح هامة للحفاظ على صحة العين" }
  ];

  return (
    <section className="media-section">
      <div className="media-header">
        <span className="subtitle">{t.media.subtitle}</span>
        <h2 className="title">{t.media.title}</h2>
        <p className="description">{t.media.desc}</p>
      </div>

      <div className="media-container">
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={index} className="media-card">
              <div className="youtube-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* هذا هو الجزء الذي كان ناقصاً: عرض العنوان (الكوت) */}
              <div className="media-info">
                <p>{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="podcast-container">
          <h3 className="podcast-title">🎙️ {t.media.listenBtn}</h3>
          <iframe 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/show/5oH6VYGkeWDT7ils5P8xSo?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default MediaSection;