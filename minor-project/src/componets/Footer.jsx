import React from 'react';
import './Footer.css';
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}

        <div className="footer-section">
          <Link to='/home'><img src="../../public/logo.png" alt="logo image"  className='gb_logo'/></Link>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Green Basket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

