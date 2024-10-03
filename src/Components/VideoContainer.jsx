import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './VideoContainer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../../public/assets/video.mp4';
import { cardData } from '../utils/CardData';
import Aos from 'aos';
import 'aos/dist/aos.css';

const VideoContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init();
    
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      }
    };

    playVideo();
    document.addEventListener('touchstart', playVideo, { once: true });

    return () => {
      document.removeEventListener('touchstart', playVideo);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderCard = (item, index) => (
    <div className={`card card-${index + 1}`}>
      <h2>{item.name}</h2>
      <div className="icon-container">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          width="48px"
          height="48px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d={item.iconPath} />
        </svg>
      </div>
      <p>{item.description}</p>
    </div>
  );

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
        <div className="desktop-cards">
          {cardData.map((item, index) => (
            <div key={index} data-aos={item.aos}>
              {renderCard(item, index)}
            </div>
          ))}
        </div>
        <div className="mobile-slider">
          <Slider {...settings}>
            {cardData.map((item, index) => (
              <div key={index}>
                {renderCard(item, index)}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;