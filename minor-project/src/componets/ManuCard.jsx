import React from 'react';
import './manuCard.css';
import { FaAppleAlt, FaCarrot, FaCheese, FaSeedling, FaAllergies } from 'react-icons/fa';

const categories = [
  { label: 'All', icon: <FaAllergies /> },
  { label: 'Fruits', icon: <FaAppleAlt /> },
  { label: 'Vegetables', icon: <FaCarrot /> },
  { label: 'Dairy', icon: <FaCheese /> },
  { label: 'Grains', icon: <FaSeedling /> },
];

const MenuCard = ({ selectedCategory, onSelect }) => {
  return (
    <div className="menu-container">
      {categories.map((item) => (
        <button
          key={item.label}
          className={`menu-card ${selectedCategory === item.label ? 'active' : ''}`}
          onClick={() => onSelect(item.label)}
        >
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
        </button>
      ))}
    </div>
  );
};

export default MenuCard;
