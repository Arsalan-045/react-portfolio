import React, { useState } from 'react';
import './navbar.css';
import imgIcon from "./img-assets/arsalan-logo-removebg-preview.png"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
          <a href="https://www.linkedin.com/in/mohammed-muddasir-arsalan-a762b9224/" target="_blank" rel="noopener noreferrer">
            <img style={{width:'100px', height:'45px', marginRight:'25px'}} src={imgIcon} alt="LinkedIn" />
          </a>
        <ul className={`navbar__menu ${showMenu ? 'active' : ''}`}>
          <li><a style={{textDecoration:'none', color:'white'}} href='#about'>About</a></li>
          <li><a style={{textDecoration:'none', color:'white'}} href='#educ'>Education</a></li>
          <li><a style={{textDecoration:'none', color:'white'}} href='#proj'>Projects</a></li>
          <li><a style={{textDecoration:'none', color:'white'}} href='#skill'>Skills</a></li>
          <li><a style={{textDecoration:'none', color:'white'}} href='#cert'>Certificate</a></li>
          <li><a style={{textDecoration:'none', color:'white'}} href='#cont'>Contact</a></li>
        </ul>
      </div>
      <div className={`navbar__right ${showMenu ? 'active' : ''}`}>
        <div className="navbar__search-button">
          <input type="text" placeholder="Search here ..." />
          <button>Search</button>
        </div>
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
