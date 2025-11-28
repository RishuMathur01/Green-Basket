import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa'; 
import ProductCard from '../componets/ProductCard';
import MenuCard from '../componets/ManuCard';
import './Products.css'


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
  {
    name: 'Fresh Mangoes',
    description: 'Juicy and ripe mangoes full of tropical flavor.',
    price: '100/kg',
    imageUrl: 'https://m.media-amazon.com/images/I/31cXlUcvRVL._AC_UF894,1000_QL80_.jpg',
    category: 'Fruits',
  },
  {
    name: 'Cucumbers',
    description: 'Crisp cucumbers perfect for salads and hydration.',
    price: '25/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQAFdsO5WyVl1nZ1bysTAnzjjvKTn4eOaLg&s',
    category: 'Vegetables',
  },
  {
    name: 'Broccoli',
    description: 'Fresh and green broccoli packed with fiber and vitamins.',
    price: '45/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIlJ4YMCTemRZamCzBUoLWp9ZVfW7ap80wA&s',
    category: 'Vegetables',
  },
  {
    name: 'Strawberries',
    description: 'Sweet and juicy strawberries, freshly picked.',
    price: '150/kg',
    imageUrl: 'https://im.pluckk.in/unsafe/1200x0/uploads/29784-4.png',
    category: 'Fruits',
  },
  {
    name: 'Lettuce',
    description: 'Crisp iceberg lettuce, great for sandwiches and salads.',
    price: '30/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHFewWYSxGGrAEpP-_GgQEPWaeEA-OoZl8g&s',
    category: 'Vegetables',
  },
  {
    name: 'Milk',
    description: 'Fresh cow milk, directly from dairy farms.',
    price: '50/litre',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmpUkdlPD8aRdktQql6s2-sXkVi2ZeK3u-Q&s',
    category: 'Dairy',
  },
  {
    name: 'Yogurt',
    description: 'Creamy homemade yogurt.',
    price: '40/500g',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL-Vo7nJJcIKcVlKERW9U1tfLHxeO6_aTAw&s',
    category: 'Dairy',
  },
  {
    name: 'Onions',
    description: 'Pungent red onions, a kitchen staple.',
    price: '20/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcuW-RfQeYTbaAz_K8jbyjfaedVN0ai0M1Q&s',
    category: 'Vegetables',
  },
  {
    name: 'Garlic',
    description: 'Fresh garlic bulbs, full of aroma.',
    price: '120/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08PTvsZHEvyrUYp7RzRKxdl3OzXWv7tfEYQ&s',
    category: 'Vegetables',
  },
  {
    name: 'Grapes',
    description: 'Seedless green grapes, sweet and crunchy.',
    price: '80/kg',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtR5M2NEcZAGkMWQPbysDSOAERgsRhMyjJQ&s',
    category: 'Fruits',
  },
  {
    name: 'Potatoes',
    description: 'Farm fresh potatoes, ideal for all cooking.',
    price: '25/kg',
    imageUrl: 'https://images.unsplash.com/photo-1590080877043-3a32152cba9e?auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
  },
  {
    name: 'Cauliflower',
    description: 'White cauliflower, crunchy and healthy.',
    price: '35/kg',
    imageUrl: 'https://images.unsplash.com/photo-1584308970909-b33ccf6d1d6e?auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
  },
  {
    name: 'Wheat Flour',
    description: 'Whole wheat flour for soft chapatis.',
    price: '40/kg',
    imageUrl: 'https://images.unsplash.com/photo-1623083191652-f2983a3b8303?auto=format&fit=crop&w=600&q=80',
    category: 'Grains',
  },
  {
    name: 'Green Peas',
    description: 'Frozen green peas full of taste and nutrition.',
    price: '60/kg',
    imageUrl: 'https://images.unsplash.com/photo-1604916281445-d733b92a9da1?auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
  },
  {
    name: 'Oranges',
    description: 'Vitamin-C rich juicy oranges.',
    price: '60/kg',
    imageUrl: 'https://images.unsplash.com/photo-1581887474964-3122b083f49b?auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
  },
  {
    name: 'Eggs',
    description: 'Farm fresh eggs from healthy hens.',
    price: '60/dozen',
    imageUrl: 'https://images.unsplash.com/photo-1589927986089-35812388d1ba?auto=format&fit=crop&w=600&q=80',
    category: 'Dairy',
  },
  {
    name: 'Honey',
    description: 'Raw, organic honey from forest bees.',
    price: '250/kg',
    imageUrl: 'https://images.unsplash.com/photo-1574226516831-e1dff420e39e?auto=format&fit=crop&w=600&q=80',
    category: 'Grocery',
  },
  {
    name: 'Green Chilies',
    description: 'Hot and spicy green chilies.',
    price: '40/kg',
    imageUrl: 'https://images.unsplash.com/photo-1630595634012-22b2f3e3fbc1?auto=format&fit=crop&w=600&q=80',
    category: 'Vegetables',
  },
  {
    name: 'Pineapple',
    description: 'Tropical, tangy-sweet pineapple.',
    price: '80/kg',
    imageUrl: 'https://images.unsplash.com/photo-1603133872879-431e3c93e2a7?auto=format&fit=crop&w=600&q=80',
    category: 'Fruits',
  },
  {
    name: 'Lentils',
    description: 'Protein-rich masoor dal for everyday cooking.',
    price: '70/kg',
    imageUrl: 'https://images.unsplash.com/photo-1607698061213-048de561f2d6?auto=format&fit=crop&w=600&q=80',
    category: 'Grains',
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const goToDashboard = () => {
    navigate('/consumerdashboard'); 
  };

  return (
    <div className="products-page">
      <div className="header">
        <h2 className="title">Shop by Category</h2>
        <button className="bag-button" onClick={goToDashboard}>
          <FaShoppingBag size={24} />
        </button>
      </div>

      <MenuCard selectedCategory={selectedCategory} onSelect={setSelectedCategory} />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;



