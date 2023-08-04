import React from 'react';
import './footer.css';
import linkedinIcon from "./img-footer/linkedin.png";
import githubIcon from "./img-footer/gihub.png";
import instaIcon from "./img-footer/insta.jpg";
import tellIcon from "./img-footer/tel.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Arsalan-045" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-muddasir-arsalan-a762b9224/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/arsalan._.mudassir/" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="tel:+91 8247388060" target="_blank" rel="noopener noreferrer">
            <img src={tellIcon} alt="Instagram" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; <span style={{color:'white'}}>2023 <b style={{color:'c0392b'}}>All rights reserved </b>| </span>Created by <span style={{color:'white'}}><b>Mohammed Mudassir Arsalan</b></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
