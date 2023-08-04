import React from 'react';
import './graduation.css';

const EducationSection = () => {
  return (
    <section className="education-section" id='educ'>
      <div className="education-container">
        <h2 className='ed-head'>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3 className='ed-h3'>University</h3>
            <p>Bachelor's Degree - Major in Information Technology</p>
            <p>MuffakhamJah College of Engineering & Technology affiliated to Osmania University - (2019-2023)</p>
            <p>CGPA- 8.82</p>
          </div>
          <div className="education-item">
            <h3 className='ed-h3'>Intermediate</h3>
            <p>TSBIE - MPC</p>
            <p>Sri Chaitanya Junior College - (2017-2019)</p>
            <p>Marks : 933/1000</p>
            <p>Percentage - 93%</p>
          </div>
          <div className="education-item">
            <h3 className='ed-h3'>Schooling</h3>
            <p>SSC - Regular</p>
            <p>Nagarjuna High School - (2005-2017)</p>
            <p>CGPA- 9.3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
