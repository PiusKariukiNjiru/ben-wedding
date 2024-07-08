import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WatchLive.css'; // Import CSS for styling

const WatchLive = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="watch-live">
      <p>Coming Soon</p>
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
    </div>
  );
};

export default WatchLive;
