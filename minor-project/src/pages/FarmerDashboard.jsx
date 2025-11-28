import React from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  const orders = [
    { id: '#1040', date: '04/23/2024', status: 'Completed' },
    { id: '#1039', date: '04/22/2024', status: 'Completed' },
    { id: '#1038', date: '04/21/2024', status: 'Pending' },
    { id: '#1037', date: '04/20/2024', status: 'Completed' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-title">Farmer Dashboard</h1>
        <nav className="sidebar-nav">
          <button className="nav-button active">Dashboard</button>
          <button className="nav-button">+ Products</button>
          <button className="nav-button">Orders</button>
          <button className="nav-button">Earnings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="summary-cards">
          <div className="card">
            <p className="card-label">Products</p>
            <p className="card-value">12</p>
          </div>
          <div className="card">
            <p className="card-label">Orders</p>
            <p className="card-value">5</p>
          </div>
          <div className="card">
            <p className="card-label">Earnings</p>
            <p className="card-value">$245.00</p>
          </div>
        </div>

        <div className="grid-section">
          {/* Add Product */}
          <div className="card">
            <h2 className="card-title">Add Product</h2>
            <button className="primary-button">Add New Product</button>
          </div>

          {/* Recent Orders */}
          <div className="card">
            <h2 className="card-title">Recent Orders</h2>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Earnings Graph Placeholder */}
        <div className="card earnings-graph">
          <h2 className="card-title">Earnings</h2>
          <div className="graph-placeholder">[Graph Placeholder]</div>
        </div>
      </main>
    </div>
  );
};

export default FarmerDashboard;