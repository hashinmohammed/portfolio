import React, { useEffect } from 'react';
import './VideoContainer.css';
import video from '../src/assets/video.mp4';
import { cardData } from './utils/CardData';

import Aos from 'aos';
import 'aos/dist/aos.css'

const VideoContainer = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className="video-container">
      <div className="blurred-overlay" />

      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="cards-container">

        {cardData.map((item, index) => (
            
          <div className="card" data-aos={item.aos} key={index}>
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

