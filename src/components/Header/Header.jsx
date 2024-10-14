import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Logo from '/images/School-Radio.jpeg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
      <div className="logo-container">
          <Link to="/" onClick={handleLinkClick}>
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className="close">X</div>
            ) : (
              <>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </>
            )}
          </div>

          <ul className={isMenuOpen ? 'show' : ''}>
            <li><Link to="/" onClick={handleLinkClick}>الصفحة الرئيسية</Link></li>
            <li><Link to="/radio" onClick={handleLinkClick}>الإذاعة المدرسية</Link></li>
            <li><Link to="/press" onClick={handleLinkClick}>الصحافة المدرسية</Link></li>
            <li><Link to="/competitions" onClick={handleLinkClick}>المسابقات المدرسية</Link></li>
            <li><Link to="/interviews" onClick={handleLinkClick}>الحديث الصحفي</Link></li>
            <li><Link to="/videos" onClick={handleLinkClick}>فيديوهات</Link></li>
            <li><Link to="/team" onClick={handleLinkClick}>الفريق</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
