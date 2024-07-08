import React, { useState, useEffect } from 'react';
import './WeddingAnnouncements.css';

import benImage from './ben-purie.png';

const WeddingAnnouncements = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-08-17") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const CountdownItem = ({ value, label }) => (
    <div className="countdown-item">
      <span className="countdown-value">{value}</span>
      <span className="countdown-label">{label}</span>
    </div>
  );

  return (
    
      <div className="app-container">
        <div className="circle">
          <div className="dotted-border"></div>
          <div className="content">
            <div className="date">Aug 17 2024</div>
            <div className="names">Ben & Purity</div>
            <div className="message">WE ARE GETTING MARRIED</div>
            <div className="countdown">
              <CountdownItem value={timeLeft.days} label="Days" />
              <CountdownItem value={timeLeft.hours} label="Hours" />
              <CountdownItem value={timeLeft.minutes} label="Minutes" />
              <CountdownItem value={timeLeft.seconds} label="Seconds" />
            </div>
            
          </div>
        </div>

        <div className="image-container">
          <img src={benImage} alt="Ben Purie" className="additional-image" />
        </div>
      </div>
    
  );
};

export default WeddingAnnouncements;
