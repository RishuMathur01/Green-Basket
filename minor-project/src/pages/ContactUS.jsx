import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Whether you have a question about products, pricing, or anything else, our team is ready to help.
      </p>

      <div className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email address" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>Green Basket Pvt. Ltd.</p>
          <p>123 Farm Lane, AgriTech Park</p>
          <p>New Delhi, India - 110037</p>

          <h3>Email Us</h3>
          <p>support@greenbasket.in</p>

          <h3>Call Us</h3>
          <p>+91 7428853903</p>

          <h3>Business Hours</h3>
          <p>Monday - Saturday: 9:00 AM – 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
