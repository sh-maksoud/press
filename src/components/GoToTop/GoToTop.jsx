import React, { useEffect, useState } from 'react';
import './GoToTop.css'; // Create a CSS file for styles

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className="go-to-top" onClick={scrollToTop}>
          اذهب إلى الأعلى
        </button>
      )}
    </>
  );
};

export default GoToTop;
