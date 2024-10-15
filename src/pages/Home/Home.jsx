import { Link } from 'react-router-dom';
import './Home.css';
import SchoolRadio from '/images/School-Radio.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>مرحباً بكم في موقع الإذاعة والصحافة المدرسية</h1>
        <p>نحن هنا لنقدم لكم تجربة إعلامية متكاملة تجمع بين الإذاعة المدرسية، الصحافة المدرسية، وأحدث الأخبار والأنشطة. اكتشف الأنشطة الصحفية المميزة، استمع إلى برامج الإذاعة المدرسية، وشارك في مسابقاتنا المثيرة.</p>
      </section>

      <div className="rotating-container">
        <div className="center-image">
          <img src={SchoolRadio} alt="School Radio" />
        </div>

        <div className="cards-container">
          <Link to="/radio" className="rotating-card">
            <h2>الإذاعة المدرسية</h2>
            <p className='description'>تابع بث إذاعي مباشر يشمل برامج متنوعة تهدف إلى تعزيز مهارات التواصل لدى الطلاب وتنمية القيم الأخلاقية.</p>
          </Link>

          <Link to="/press" className="rotating-card">
            <h2>الصحافة المدرسية</h2>
            <p className='description'>استعرض أحدث المقالات والأنشطة التي يشارك فيها الطلاب، وتعرف على طرق إعداد وإنتاج المحتوى الصحفي المدرسي.</p>
          </Link>

          <Link to="/competitions" className="rotating-card">
            <h2>المسابقات</h2>
            <p className='description'>شارك في مسابقاتنا المدرسية المتعلقة بالصحافة والإذاعة، واربح جوائز قيمة تساهم في تعزيز مهاراتك الإبداعية.</p>
          </Link>

          <Link to="/interviews" className="rotating-card">
            <h2>الحديث الصحفي</h2>
            <p className='description'>استمع إلى مقابلات مع الطلاب والمعلمين المشاركين في أنشطة الصحافة المدرسية وبرامج الإذاعة، وتعرف على قصص نجاحهم.</p>
          </Link>

          <Link to="/videos" className="rotating-card">
            <h2>فيديوهات</h2>
            <p className='description'>استعرض الفيديوهات التعليمية والمشاركات الخاصة بالإذاعة والصحافة المدرسية.</p>
          </Link>

          {/* New Team Card */}
          <Link to="/team" className="rotating-card">
            <h2>الفريق</h2>
            <p className='description'>تعرف على أعضاء الفريق الذين يعملون بجد لتقديم محتوى إذاعي وصحفي مميز.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
