import React from 'react';
import './FarmerCard.css';

const FarmerCard = ({ farmer }) => {
    return (
      <div className="farmer-card">
        <div className="farmer-image-wrapper">
          <img src={farmer.photo} alt={farmer.name} className="farmer-photo" />
        </div>
        <h2 className="farmer-name">{farmer.name}</h2>
        <p className="farmer-location">📍 {farmer.location}</p>
        <div className="farmer-details">
          <p><strong>Crops:</strong> {farmer.crops.join(', ')}</p>
          <p><strong>Contact:</strong> {farmer.contact}</p>
        </div>
        <button className="chat-btn">💬 Chat Now</button>
      </div>
    );
  };

export default FarmerCard;
