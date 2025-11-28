import React from 'react';
import './ProductCard.css';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();


  const handleBuyNow = () => {
   
    localStorage.setItem("buy_now_item", JSON.stringify(product));

    
    navigate("/ConsumerDashboard");
  };


  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl || "",
      date: new Date().toLocaleDateString(),
      status: 'In Transit',
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  // ---------------- RATING STARS ----------------
  const renderStars = () => {
    const stars = [];
    const filled = Math.floor(product.rating || 0);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= filled ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="prduct-card">
      <div className="img-wrapper">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <h3>{product.name}</h3>
      <p className="description">{product.description}</p>

      <div className="rating">{renderStars()}</div>

      <p className="price"><strong>{"₹" + product.price}</strong></p>

      <div className="btn-group">
        <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
        <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
