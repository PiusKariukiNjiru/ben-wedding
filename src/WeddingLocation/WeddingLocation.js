import React from 'react';
import './WeddingLocation.css';

const WeddingLocation = () => {
  return (
    <div className="map-container" id="wedding-location">
      <h2 className="map-title">Wedding Location</h2>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510666.9363086302!2d36.97142286475648!3d-0.6190556356555987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827cb625fdcba01%3A0xb745725af4f8144!2sFull%20Gospel%20Churches%20Of%20Kenya%20Runyenjes!5e0!3m2!1sen!2ske!4v1720433902421!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Location"
        ></iframe>
      </div>
    </div>
  );
};

export default WeddingLocation;
