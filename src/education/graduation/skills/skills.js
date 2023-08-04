import React, { useState } from 'react';
import "./skills.css"

const SkillComponent = () => {
    const [skills, setSkills] = useState([
        { name: 'HTML', rating: 6},
        { name: 'CSS', rating: 5},
        { name: 'JavaScript', rating: 4 },
        { name: 'ReactJS', rating: 4 },
        { name: 'MongoDB', rating: 5 },
        { name: 'SQL', rating: 5 },
        { name: 'Python', rating: 5 },
        { name: 'C', rating: 6 },
        { name: 'C++', rating: 6},
        { name: 'Java', rating: 4 },
      ]);
    
      const handleRatingChange = (index, newRating) => {
        const updatedSkills = [...skills];
        updatedSkills[index].rating = newRating;
        setSkills(updatedSkills);
      };
    
      return (
        <div className="skill-container" id='skill'>
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">{skill.name}</div>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5, 6,7].map((rating) => (
                    <span
                      key={rating}
                      className={`star ${rating <= skill.rating ? 'active' : ''}`}
                      onClick={() => handleRatingChange(index, rating)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default SkillComponent;
