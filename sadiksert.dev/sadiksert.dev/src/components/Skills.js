import React from 'react';
import './Skills.css';
import javascriptImage from '../assets/js.png';
import reactImage from '../assets/react.png';
import nodejsImage from '../assets/nodejs.png';
import phpImage from '../assets/php.png';
import reactnativeImage from '../assets/ractnative.png';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import sqlImage from '../assets/sql.png';

const skillsData = [
  {
    name: 'JavaScript',
    level: '80%',
    image: javascriptImage,
    
  },
  {
    name: 'React',
    level: '75%',
    image: reactImage,
  },
  {
    name: 'Node.js',
    level: '70%',
    image: nodejsImage,
  },
  {
    name: 'Php',
    level: '90%',
    image: phpImage,
    
  },
  {
    name: 'React Native',
    level: '65%',
    image: reactnativeImage,
    
  },
  {
    name: 'Html',
    level: '90%',
    image: htmlImage,
    
  },
  {
    name: 'CSS',
    level: '90%',
    image: cssImage,
    
  },
  {
    name: 'SQL',
    level: '80%',
    image:sqlImage,
    
  }
 
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Becerilerim</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <div className="skill-details">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: skill.level }}>{skill.level}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
  



