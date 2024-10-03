import './Technologies.css';
import { technologies } from '../utils/TechnologiesDatas';
import Tooltip from '@mui/material/Tooltip';

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="logo-container">
        {technologies.map((tech, index) => (
          <Tooltip
            key={index}
            title={
              <>
                <img src={tech.logo} alt={`Logo ${index + 1}`} className="tooltip-image" style={{ width: '100px', height: '100px' }} />
                <p>{tech.description}</p>
              </>
            }
            arrow
          >
            <div className="logo-item" data-aos="flip-down">
              <img src={tech.logo} alt={`Logo ${index + 1}`} className="logo-image" />
              <h3 className="logo-heading">{tech.name}</h3>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
