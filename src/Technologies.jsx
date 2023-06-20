import React from 'react';
import './Technologies.css';
import { technologies } from './utils/TechnologiesDatas';
const Technologies = () => {
  

  return (
    <div className="technologies">
      {/* <h6 className="technologies-heading">Technologies I know</h6> */}
      <div className="logo-container">
        {technologies.map((tech, index) => (
          <div className="logo-item" key={index}>
            <img src={tech.logo} alt={`Logo ${index + 1}`} className="logo-image" />
            <h3 className="logo-heading">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
