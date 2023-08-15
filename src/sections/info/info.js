// src/components/InfoSection.js
import React from 'react';
import './info.css';
import { Link } from 'react-router-dom';
// import resumeImage from '../images/resume-image.jpg';
import infoImage from "./images/info-removebg-preview.jpg"
import arImg from "./images/arsalan-pr.png"


const InfoSection = () => {
  return (
    <section className="info-section" id='about'>
      <div className="info-content">
        <h2>Welcome to My Portfolio</h2>
        <p>
        This is Mohammed Mudassir Arsalan, a recent graduate with a Bachelor's of Engineering in Information Technology. I am proficient in web development and in data analysis, and eager to apply my skills to real-world projects. I am highly motivated and results-oriented individual who is always looking for ways to improve my skills and knowledge. I am also a team player who is able to work effectively with others to achieve common goals.
        </p>

       
        <a href="tel:+91 8106602691"  className="download-button">
        {/* <i class="fas fa-phone-volume"> Download Resume */}Call On
        </a>
      </div>
      <div className="info-image">
        <img src={arImg} alt="Resume" />
      </div>
    </section>
  );
};

export default InfoSection;
