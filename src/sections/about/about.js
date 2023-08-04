// src/components/AboutSection.js
import React from 'react';
import './about.css';
// import aboutImage from '../images/about-image.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          urna id velit sodales, at feugiat magna scelerisque. Nulla facilisi.
        </p>
      </div>
      <div className="about-image">
        {/* <img src={aboutImage} alt="About Us" /> */}
      </div>
    </section>
  );
};

export default AboutSection;
