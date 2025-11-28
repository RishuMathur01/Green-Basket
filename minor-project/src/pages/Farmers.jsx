import React from 'react';
import FarmerCard from '../componets/FarmerCard';
import './Farmers.css'; 

function Farmers() {
  const farmers = [
    {
      name: 'Ravi Kumar',
      location: 'Punjab, India',
      crops: ['Wheat', 'Rice', 'Corn'],
      contact: '+91-9876543210',
      photo: 'https://i.pinimg.com/236x/7d/7c/4a/7d7c4aa7089687935320b48473b119f1.jpg',
    },
    {
      name: 'Sunita Devi',
      location: 'Bihar, India',
      crops: ['Maize', 'Mustard'],
      contact: '+91-9823456789',
      photo: 'https://c8.alamy.com/zooms/9/8c0a857c0d1f45eeb1a787f35de6007a/2g5cykn.jpg',
    },
    {
      name: 'Amit Patel',
      location: 'Gujarat, India',
      crops: ['Cotton', 'Groundnut'],
      contact: '+91-9712345678',
      photo: 'https://st2.depositphotos.com/27472836/50769/i/450/depositphotos_507695324-stock-photo-low-angle-shot-close-face.jpg',
    },
    {
      name: 'Lakshmi Narayan',
      location: 'Andhra Pradesh, India',
      crops: ['Rice', 'Sugarcane'],
      contact: '+91-9001234567',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
        name: 'Ravi Kumar',
        location: 'Punjab, India',
        crops: ['Wheat', 'Rice', 'Corn'],
        contact: '+91-9876543210',
        photo: 'https://media.istockphoto.com/id/498281885/photo/indian-farmer.jpg?s=612x612&w=0&k=20&c=ulJBzW-hy_738vv580iU5DCA-xOa7dh-bWyjERlQJrs=',
      },
      {
        name: 'Shailesh Yadav',
        location: 'Bihar, India',
        crops: ['Wheat', 'Rice', 'Corn'],
        contact: '+91-9876234320',
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMxjBhxqzkpC-qOQFCFgFfETnMvHlvhovGg&s",
      }
  ];

  return (
    <div className="app-container">
    <h1 className="section-title">🌾 Our Trusted Farmers</h1>
    <div className="card-container">
      {farmers.map((farmer, index) => (
        <FarmerCard key={index} farmer={farmer} />
      ))}
    </div>
  </div>
  );
}

export default Farmers;

