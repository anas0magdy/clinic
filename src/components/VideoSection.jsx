import React, { useRef, useState } from 'react';
import './VideoSection.css';

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-text-content">
          <span className="video-subtitle">جولة داخل غرفة العمليات</span>
          <h2 className="video-title">رؤية جديدة للحياة... في دقائق معدودة</h2>
          <p className="video-description">
            شاهدي د. همس سامي أثناء إجراء عملية إزالة المياه البيضاء وزراعة العدسات بأحدث تقنيات الفاكو (Phaco).
            <br />
            دقة متناهية، تعقيم بأعلى المعايير، وبدون ألم، لتعود لكي نعمة الإبصار بوضوح.
          </p>
          
          <div className="video-features">
            <div className="feature-item">
              <span className="check-icon">✔</span> تخدير موضعي (بدون ألم)
            </div>
            <div className="feature-item">
              <span className="check-icon">✔</span> تستغرق دقائق معدودة
            </div>
            <div className="feature-item">
              <span className="check-icon">✔</span> تعافي سريع جداً
            </div>
          </div>
        </div>

        <div className="video-wrapper">
          {/* الفيديو */}
          <video 
            ref={videoRef}
            className="main-video"
            // بوستر يظهر قبل التشغيل (يفضل تحط صورة هنا)
            poster={`${baseUrl}images/video-poster.jpg`} 
            controls
            onClick={handlePlay}
          >
            <source src={`${baseUrl}images/cataract-surgery.mp4`} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          
          {/* زر تشغيل مخصص يختفي لما الفيديو يشتغل */}
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