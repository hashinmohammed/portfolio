import React from "react";
import "../src/Overlay.css";
import myImage from "../public/assets/my-image.png";
import { overlayData, buttonsData } from "./utils/OverlayDatas";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { nanoid } from "nanoid";

const Overlay = () => {
  
  const handleCallButtonClick = () => {
    const phoneNumber = "+919947418405"; // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`;
  };


  const handleButtonRedirect = (url) => {
    // Open the respective link in a new tab/window
    window.open(url, "_blank");
  };

  return (
    <div className="overlay">
      <div className="left-content">
        <div className="text-container">
          <h1 className="overlay-text" data-aos="zoom-in">
            {overlayData.heading}
          </h1>
          <p className="description" data-aos="fade-down-right">
            {overlayData.description}
          </p>
          <p className="about-me" data-aos="zoom-in">
            {overlayData.aboutMe}
          </p>
          <div className="buttons">
            <button className="contact-me" onClick={handleCallButtonClick}>
              <i className="fas fa-icon"></i> {buttonsData[0].text}
            </button>
            {buttonsData.slice(1).map((button) => (
              <button
                className="button button-round"
                key={button.id}
                onClick={() => handleButtonRedirect(button.url)}
              >
                {renderButtonIcon(button.icon)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          className="my-image"
          data-aos="fade-left"
          src={myImage}
          alt="Hashin Mohammed"
        />
      </div>
    </div>
  );
};

const renderButtonIcon = (icon) => {
  switch (icon) {
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedin />;
    case "github":
      return <FaGithub />;
    case "facebook":
      return <FaFacebook />;
    default:
      return null;
  }
};

export default Overlay;
