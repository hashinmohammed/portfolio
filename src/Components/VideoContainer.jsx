import React, { useEffect, useRef } from 'react';
import './VideoContainer.css';
import video from '../../public/assets/video.mp4';
import { cardData } from '../utils/CardData';
import Aos from 'aos';
import 'aos/dist/aos.css'

const VideoContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init();
    
    // Function to handle autoplay
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      }
    };

    // Play video when component mounts
    playVideo();

    // Add event listener for playing video on user interaction
    document.addEventListener('touchstart', playVideo, { once: true });

    return () => {
      document.removeEventListener('touchstart', playVideo);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="blurred-overlay" />
      
      <video 
        ref={videoRef}
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="path/to/poster-image.jpg"
      >
        <source src={video} type="video/mp4" />
        <source src="path/to/video.webm" type="video/webm" />
        Your browser does not support the video tag.
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