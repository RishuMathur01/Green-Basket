import { useEffect, useRef, useState} from "react";

import HeroSection from '../componets/HeroSection';
import FeaturesSection from '../componets/FeacturesSection';
import { FaListAlt, FaShoppingCart, FaTruck } from 'react-icons/fa';
import Login from '../componets/Login';
import ProductCard from '../componets/ProductCard';
import FarmerCard from '../componets/FarmerCard';
import './Home.css';

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
    name: 'Rai Kumar',
    location: 'Punjab, India',
    crops: ['Wheat', 'Rice', 'Corn'],
    contact: '+91-9876543210',
    photo: 'https://media.istockphoto.com/id/498281885/photo/indian-farmer.jpg?s=612x612&w=0&k=20&c=ulJBzW-hy_738vv580iU5DCA-xOa7dh-bWyjERlQJrs=',
  }
];

const products = [
  {
    name: 'Fresh Apples',
    description: 'Delicious organic apples straight from the farm.',
    price: "90/kg",
    imageUrl: '/Apple.jpeg',
    category: 'Fruits',
  },
  {
    name: 'Organic Carrots',
    description: 'Crisp and fresh carrots packed with nutrients.',
    price: "30/kg",
    imageUrl: '/Carrot.jpeg',
    category: 'Vegetables',
  },
  {
    name: 'Bananas',
    description: 'Ripe and sweet bananas, perfect for snacks.',
    price: '40/kg',
    imageUrl: '/banana.jpeg',
    category: 'Fruits',
  },
  {
    name: 'Tomatoes',
    description: 'Fresh, juicy tomatoes for salads and cooking.',
    price: "30/kg",
    imageUrl: '/Tomatoes.jpeg',
    category: 'Vegetables',
  },
  {
    name: 'Spinach',
    description: 'Organic spinach, rich in iron and vitamins.',
    price: "20/kg",
    imageUrl: '/Spinach.jpeg',
    category: 'Vegetables',
  },
  {
    name: 'Cheddar Cheese',
    description: 'Freshly made cheddar from local farms.',
    price: "80/kg",
    imageUrl: '/Cheddar_Cheese.jpeg',
    category: 'Dairy',
  },
  {
    name: 'Brown Rice',
    description: 'Healthy whole-grain rice for your meals.',
    price: "50/kg",
    imageUrl: '/Brown_Rice.jpeg',
    category: 'Grains',
  },
];

export default function Home() {
  const [showLogin,setShowLogin]=useState(true);

  const marqueeRef = useRef(null);
  const timeoutRef = useRef(null);




  // if user is already logged in 
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      setShowLogin(true) // show login if no token
    }
  },[])
  
  const stopScroll = () => {
    const el = marqueeRef.current;
    if (!el) return;

    el.style.animationPlayState = "paused";

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      el.style.animationPlayState = "running";
    }, 30000);
  };

  return (
    <>
      <HeroSection />
      <FeaturesSection />

      <div className="home-products-section">
        <h2>Our Fresh Products from Green Basket</h2>
        <div className="marquee-wrapper">
          <div className="marquee-content" ref={marqueeRef}>
            {/* Track 1 */}
            {products.map((product) => (
              <div key={product.name} onClick={stopScroll}>
                <ProductCard product={product} />
              </div>
            ))}

            {/* Track 2 (duplicate) */}
            {products.map((product) => (
              <div key={product.name + "-copy"} onClick={stopScroll}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home-farmer-oprofile">
        <h1>Our Trusted Farmers</h1>
        <div className="farmer-cards-container">
          {farmers.map((farm) => (
            <FarmerCard key={farm.name} farmer={farm} />
          ))}
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <FaListAlt className="icon" />
            <p>Farmers List<br />Products</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <FaShoppingCart className="icon" />
            <p>Buyers Order</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <FaTruck className="icon" />
            <p>Delivery / Pickup</p>
          </div>
        </div>
      </div>
{showLogin && <Login setShowLogin={setShowLogin} />}
      {/* <Login /> */}
    </>
  );
}
