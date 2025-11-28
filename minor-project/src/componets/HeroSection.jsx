import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const images = [
  '/farmer1.jpg',
  '/farmer2.jpg',
  '/farmer3.jpg',
  '/farmer4.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate('/product');
  };

  return (
    <div
      className="container-hero"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <h1>Green Basket</h1>
      <h3>
        Direct Farmer-to-Consumer <br />
        Marketplace
      </h3>
      <p>
        Connecting you directly with local farmers for <br />
        fresh produce at fair prices.
      </p>
      <button onClick={handleShopNow}>Shop Now</button>
    </div>
  );
};

export default HeroSection;



// import React, { useEffect, useState } from 'react';
// import './HeroSection.css'

// const images = [
//   '../../public/farmer1.jpg',
//   '../../public/farmer2.jpg',
//   '../../public/farmer3.jpg',
//   '../../public/farmer4.jpg'
// ];

// const HeroSection = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {

//       setCurrentImageIndex(prev => (prev + 1) % images.length);
      
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="container-hero"
//       style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
//     >
//       <h1>Green Basket</h1>
//       <h3>
//         Direct Farmer-to-Consumer <br />
//         Marketplace
//       </h3>
//       <p>
//         Connecting you directly with local farmers for <br />
//         fresh produce at fair prices.
//       </p>
//       <button>Shop Now</button>
//     </div>
//   );
// };

// export default HeroSection;
