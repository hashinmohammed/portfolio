import React from 'react';
import './VideoContainer.css';
import video from './assets/video.mp4';
import { cardData } from './utils/CardData';



const VideoContainer = () => {
  return (
    <div className="video-container">
      <div className="blurred-overlay" />

      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="cards-container">

        {cardData.map((item, index) => (
            
          <div className="card" key={index}>
            <h2>{item.name}</h2>
            <div>{item.icon}</div>
            
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
