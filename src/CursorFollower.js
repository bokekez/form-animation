import React, { useState, useEffect, useRef } from 'react';
import './CursorFollower.css';
import portraitImage from './image.png'; 

const CursorFollower = () => {
  const [angle, setAngle] = useState(0);
  const [isOnRight, setIsOnRight] = useState(false); 
  const headRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (headRef.current) {
        const head = headRef.current.getBoundingClientRect();
        const portrait = headRef.current.parentNode.getBoundingClientRect();

        const headCenterX = head.left + head.width / 2;
        const headCenterY = head.top + head.height / 2;

        const isRight = event.clientX > window.innerWidth / 2;
        const isInPortraitVerticalBounds = 
          event.clientY >= portrait.top && event.clientY <= portrait.bottom;

        if (isRight && isInPortraitVerticalBounds) {
          setIsOnRight(true);
          const deltaX = event.clientX - headCenterX;
          const deltaY = event.clientY - headCenterY;
          const angleDeg = Math.atan2(deltaY, deltaX) * (20 / Math.PI);
          setAngle(angleDeg);
        } else {
          setIsOnRight(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main-container">
    <div className="portrait-container">
      <img src={portraitImage} alt="portrait" className="portrait" />

      <div
        ref={headRef}
        className="head"
        style={{
          transform: `rotate(${isOnRight ? angle : 0}deg)`, 
        }}
      >
        <img src={portraitImage} alt="head" className="head-image" />
      </div>
    </div>
    <div className="input-form">
      <label>Usename:</label>
      <input type='text'></input>
      <label>Password:</label>
      <input type='text'></input>
    </div>
    </div>
  );
};

export default CursorFollower;
