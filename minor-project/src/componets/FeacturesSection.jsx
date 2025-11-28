import "./FeacturesSection.css"
import { FaUsers, FaShoppingBasket, FaCreditCard, FaTruck } from 'react-icons/fa';

 function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-item">
          <FaUsers className="feature-icon" />
          <h3>For Farmers & Consumers</h3>
          <p>Register and connect with ease</p>
        </div>

        <div className="feature-item">
          <FaShoppingBasket className="feature-icon" />
          <h3>Browse Produce</h3>
          <p>Fruits, vegetables, dairy, grains and more</p>
        </div>

        <div className="feature-item">
          <FaCreditCard className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>UPI, Stripe, and COD payment options</p>
        </div>

        <div className="feature-item">
          <FaTruck className="feature-icon" />
          <h3>Delivery or Pickup</h3>
          <p>Choose home delivery or farm pickup</p>
        </div>
      </div>
    </section>
  );
}


export default FeaturesSection;