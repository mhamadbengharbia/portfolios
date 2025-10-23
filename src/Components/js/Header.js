import React, { useState } from 'react';
import './style.css';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="Header">
      
      <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
         <li><a href="#about">About Me /></a></li>
        <li><a href="#diplomas">Diplomas and Certifications /></a></li>
        <li><a href="#projects">Projects /></a></li>
        <li><a href="#skills">Skills /></a></li>
        <li><a href="#contact">Contact Me /></a></li>
 
      </ul>

      {/* Burger icon */}
      <div className="burger" onClick={toggleMenu}>
        <div className={`burger-icon ${isMenuActive ? 'active' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Close icon (X) */}
      <div className={`x ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="x-line"></div>
        <div className="x-line"></div>
      </div>
    </div>
  );
}

export default Header;
