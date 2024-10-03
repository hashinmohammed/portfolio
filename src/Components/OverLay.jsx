import { useState } from "react";
import "./OverLay.css";
import myImage from "../../public/assets/my-image.png";
import { overlayData, buttonsData } from "../utils/OverlayDatas";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

import Tooltip from "@mui/material/Tooltip";

const Overlay = () => {
  const [tooltipText, setTooltipText] = useState("");

  const handleCallButtonClick = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleButtonMouseEnter = (text) => {
    setTooltipText(text);
  };

  const handleButtonMouseLeave = () => {
    setTooltipText("");
  };

  const handleButtonRedirect = (url) => {
    window.open(url, "_blank");
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
              <Tooltip
                key={button.id}
                title={tooltipText}
                arrow
              >
                <button
                  className="button button-round"
                  onMouseEnter={() => handleButtonMouseEnter(button.tooltip)}
                  onMouseLeave={handleButtonMouseLeave}
                  onClick={() => handleButtonRedirect(button.url)}
                >
                  {renderButtonIcon(button.icon)}
                </button>
              </Tooltip>
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

export default Overlay;