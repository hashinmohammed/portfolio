import React from 'react';
import '../src/Overlay.css';
import myImage from '../src/assets/myImage.png'; // Replace "myImage.png" with the actual filename and path of your image

const Overlay = () => {
  return (
    <div className="overlay">
      <div className="left-content">
        <div className="text-container">
          <h1 className="overlay-text">Hey, I'm Hashin Mohammed</h1>
          <p className="description">I am a full stack developer.</p>
          <p className="about-me">
            I'm a passionate full stack developer experienced in building innovative web applications. My expertise includes HTML, CSS, JavaScript, React, Node.js, and more. Let's collaborate and bring your ideas to life!
          </p>
          <div className="buttons">
            <button className="button">
              <i className="fas fa-icon"></i> Button 1
            </button>
            <button className="button">
              <i className="fas fa-icon"></i> Button 2
            </button>
            <button className="button">
              <i className="fas fa-icon"></i> Button 3
            </button>
            <button className="button">
              <i className="fas fa-icon"></i> Button 4
            </button>
            <button className="button">
              <i className="fas fa-icon"></i> Button 5
            </button>
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
