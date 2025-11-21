import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VideoSection.css';

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL;

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-text-content">
          <span className="video-subtitle">{t.video.subtitle}</span>
          <h2 className="video-title">{t.video.title}</h2>
          <p className="video-description">
            {t.video.desc}
          </p>
          
          <div className="video-features">
            <div className="feature-item">
              <span className="check-icon">✔</span> {t.video.f1}
            </div>
            <div className="feature-item">
              <span className="check-icon">✔</span> {t.video.f2}
            </div>
            <div className="feature-item">
              <span className="check-icon">✔</span> {t.video.f3}
            </div>
          </div>
        </div>

        <div className="video-wrapper">
          <video 
            ref={videoRef}
            className="main-video"
            poster={`${baseUrl}images/video-poster.jpg`} 
            controls
            onClick={handlePlay}
          >
            <source src={`${baseUrl}images/cataract-surgery.mp4`} type="video/mp4" />
          </video>
          {!isPlaying && (
            <button className="play-button-overlay" onClick={handlePlay}>
              <div className="play-icon">▶</div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;