import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Green Basket Logo" />
      </div>

      <nav className="navbar__links">

        <Link to="/home">HOME</Link>
        <Link to="/product">PRODUCTS</Link>
        <Link to="/farmer">FARMERS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to='/abUs'>ABOUT US</Link>

      </nav>

      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      <div className="navbar_profile">
        <img src="https://imgs.search.brave.com/3XPXZAARvj9HLVB_4rtjyNLqNLKUjYyOm7CjboPBWQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/ODY5LzU4My9zbWFs/bC9wcm9maWxlLWlt/YWdlLW9mLW1hbi1h/dmF0YXItZm9yLXNv/Y2lhbC1uZXR3b3Jr/cy13aXRoLWhhbGYt/Y2lyY2xlLWZhc2hp/b24tYnJpZ2h0LWls/bHVzdHJhdGlvbi1p/bi10cmVuZHktc3R5/bGUtdmVjdG9yLmpw/Zw"
         alt="profileImage" />
         
          
      </div>
    </header>
  );
};

export default Navbar;

