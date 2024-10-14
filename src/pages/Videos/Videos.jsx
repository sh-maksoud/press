import './Videos.css';

const Videos = () => {
  return (
    <div className="videos-container">
      <h2>فيديوهات</h2>
      <p>استعرض الفيديوهات التعليمية والمشاركات الخاصة بالإذاعة والصحافة المدرسية.</p>
      
      <div className="video-list">
        {/* Local video */}
        <div className="video-item">
          <h3>لقاء صحفي</h3>  
          <video controls className="video-frame">
            <source src="/videos/1.mp4" type="video/mp4" />
            المتصفح الخاص بك لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* YouTube videos */}
        <div className="video-item">
          <h3>عنوان الفيديو 1</h3>
          <iframe 
            src="https://www.youtube.com/embed/example1" 
            title="فيديو 1" 
            allowFullScreen 
            className="video-frame"
          ></iframe>
        </div>

        <div className="video-item">
          <h3>عنوان الفيديو 2</h3>
          <iframe 
            src="https://www.youtube.com/embed/example2" 
            title="فيديو 2" 
            allowFullScreen 
            className="video-frame"
          ></iframe>
        </div>

        {/* Add more video items as needed */}
      </div>
    </div>
  );
};

export default Videos;
