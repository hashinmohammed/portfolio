import  { useEffect, useState, useCallback } from 'react';
import '../index.css';
import Overlay from './OverLay';


const BubbleScreensaver = () => {
  const [bubbles, setBubbles] = useState([]);

  const createBubble = useCallback(() => {
    const bubble = {
      id: Math.random().toString(36).substring(2),
      position: {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
      },
      animation: {
        translateX: Math.random() < 0.5 ? '-' : '',
        translateY: Math.random() < 0.5 ? '-' : '',
        duration: Math.random() * 1 + 10,
      },
      color: getRandomColor(),
    };

    bubble.size = Math.floor(Math.random() * 400) + 50; // Assign the 'size' property

    return bubble;
  }, []);

  const getRandomColor = useCallback(() => {
    const colors = [
        '#FF4136', // Red
        '#FF851B', // Orange
        '#FFDC00', // Yellow
        '#2ECC40', // Green
        '#0074D9', // Blue
        '#B10DC9', // Purple
        '#85144b', // Dark Red
        '#3D9970', // Dark Green
        '#F012BE', // Magenta
        '#39CCCC', // Turquoise
        '#E55934', // Coral
        '#FF5A5F', // Salmon
        '#FFCC00', // Gold
        '#42A5F5', // Sky Blue
        '#8E24AA', // Indigo
        '#FF6F00', // Amber
        '#388E3C', // Forest Green
        '#8D6E63', // Brown
        '#AA00FF', // Violet
        '#00BCD4', // Cyan
      ];
      
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }, createBubble);
    setBubbles(newBubbles);
  }, [createBubble]);

  return (
    <div id='home' className="container">
      <div className="bubbles-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.position.left,
              top: bubble.position.top,
              '--translate-x': `${bubble.animation.translateX}${Math.random() * 800}px`,
              '--translate-y': `${bubble.animation.translateY}${Math.random() * 800}px`,
              animationDuration: `${bubble.animation.duration}s`,
              backgroundColor: bubble.color,
            }}
          ></div>
        ))}
      </div>
     <Overlay />
    </div>
  );
};

export default BubbleScreensaver;
