import React from 'react';
import '../src/Overlay.css';
import myImage from '../src/assets/my-image.png';
import { overlayData,buttonsData } from './utils/OverlayDatas';

const Overlay = () => {
  
  return (
    <div className="overlay">
      <div className="left-content">
        <div className="text-container">
          <h1 className="overlay-text" data-aos="zoom-in">{overlayData.heading}</h1>
          <p className="description" data-aos="fade-down-right">{overlayData.description}</p>
          <p className="about-me" data-aos="zoom-in">{overlayData.aboutMe}</p>
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
        <img className="my-image" data-aos="fade-left" src={myImage} alt="Hashin Mohammed" />
      </div>
    </div>
  );
};

export default Overlay;
