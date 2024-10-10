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
        if (event.clientX > window.innerWidth / 2) {
          caclMaxHeadAngle(event, 3)
        } else if (event.clientX > window.innerWidth / 2.5) {
          caclMaxHeadAngle(event, 2.5)
        } else if (event.clientX > window.innerWidth / 3) {
          caclMaxHeadAngle(event, 2)
        } else {
          caclMaxHeadAngle(event, 1)
        }
      }
    };

    const caclMaxHeadAngle = (event, multiplier) => {
      const head = headRef.current.getBoundingClientRect();
      const headCenterX = head.left + head.width / 2;
      const headCenterY = head.top + head.height / 2;
      const deltaX = event.clientX - headCenterX;
      const deltaY = event.clientY - headCenterY;
      const angleDeg = Math.atan2(deltaY, deltaX) * (5 * multiplier / Math.PI);
      setAngle(angleDeg);
    }

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
