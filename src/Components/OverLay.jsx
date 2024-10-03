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
  const [tooltipText, setTooltipText] = useState(""); // State to store the tooltip text

  const handleCallButtonClick = () => {
    const phoneNumber = "+919947418405"; // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleButtonMouseEnter = (text) => {
    setTooltipText(text); // Update the tooltip text on button mouse enter
  };

  const handleButtonMouseLeave = () => {
    setTooltipText(""); // Clear the tooltip text on button mouse leave
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
              <Tooltip
                key={button.id}
                title={tooltipText} // Set the tooltip text from state
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
