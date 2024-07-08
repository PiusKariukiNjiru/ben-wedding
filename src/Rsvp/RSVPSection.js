import React from 'react';
import './RSVPSection.css';
import heart from './A_golden_heart_1-removebg-preview.png'; // Update the path as necessary

const RSVPSection = () => {
  return (
    <div className="rsvp-section" id='rsvp'>
      <div className="background-overlay"></div>
      <div className="rsvp-content">
        <h1 className="title">The Best Gift</h1>
        <p className="subtitle">Will be your presence</p>
        <img src={heart} alt="heart" className="heart-image" />
        <button className="rsvp-button">
          <a href="#guest-book">R.S.V.P</a>
        </button>
        
      </div>
    </div>
  );
};

export default RSVPSection;
