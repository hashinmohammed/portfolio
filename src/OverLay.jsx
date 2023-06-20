import React from 'react';
import '../src/Overlay.css';
import myImage from '../src/assets/dfddf.png';
import { overlayData,buttonsData } from './utils/OverlayDatas';
const Overlay = () => {
  
  return (
    <div className="overlay">
      <div className="left-content">
        <div className="text-container">
          <h1 className="overlay-text">{overlayData.heading}</h1>
          <p className="description">{overlayData.description}</p>
          <p className="about-me">{overlayData.aboutMe}</p>
          <div className="buttons">
            {buttonsData.map((button) => (
              <button className="button" key={button.id}>
                <i className={button.icon}></i> {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="image-container">
        <img className="my-image" src={myImage} alt="Hashin Mohammed" />
      </div>
    </div>
  );
};

export default Overlay;
