import React, { useEffect, useState } from 'react';
import './ConsumerDashboard.css';
import { Link } from "react-router-dom";

const ConsumerDashboard = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([
    { id: '#2051', product: 'Tomatoes', date: '04/24/2024', status: 'Delivered' },
    { id: '#2050', product: 'Carrots', date: '04/23/2024', status: 'In Transit' },
    { id: '#2049', product: 'Apples', date: '04/22/2024', status: 'Delivered' },
    { id: '#2048', product: 'Potatoes', date: '04/21/2024', status: 'Cancelled' },
  ]);

  useEffect(() => {
    // Load user
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);

    // Load cart
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    // If Buy Now was clicked
    const buyNowItem = JSON.parse(localStorage.getItem("buy_now_item"));
    if (buyNowItem) {
      setCart([buyNowItem]);
      localStorage.removeItem("buy_now_item");
    }
  }, []);

  const handleDelete = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePayment = () => {
    alert('Payment successful!');
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1 className="sidebar-title">Welcome, {user?.name || 'User'}</h1>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-button active">Home</Link>
          <Link to="/Product" className="nav-button">Browse Products</Link>
          <Link to="/orders" className="nav-button">My Orders</Link>
          <Link to="/profile" className="nav-button">Profile</Link>
        </nav>
      </aside>

      <main className="main-content">
        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card">
            <p className="card-label">Total Orders</p>
            <p className="card-value">{orders.length}</p>
          </div>
          <div className="card">
            <p className="card-label">Delivered</p>
            <p className="card-value">{orders.filter(o => o.status === 'Delivered').length}</p>
          </div>
          <div className="card">
            <p className="card-label">In Transit</p>
            <p className="card-value">{orders.filter(o => o.status === 'In Transit').length}</p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="card">
          <h2 className="card-title">Cart Items</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.name} className="cart-item">
                  <img 
                    src={item.imageUrl || "/no-image.png"} 
                    alt={item.name} 
                    onError={e => e.target.src = "/no-image.png"}
                  />

                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>

                  <button 
                    onClick={() => handleDelete(item.name)} 
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <button className="pay-btn" onClick={handlePayment}>
              Proceed to Payment
            </button>
          )}
        </div>

        {/* Orders */}
        <div className="card">
          <h2 className="card-title">Recent Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase().replace(/\s/g, '-')}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default ConsumerDashboard;
