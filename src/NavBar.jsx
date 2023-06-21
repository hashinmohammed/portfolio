import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ha<span style={{color:"yellowgreen",fontSize:'2rem'}}>sh</span>in</div>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <a href="#home" className="navbar-link">Home</a>
        </li>
        <li className="navbar-link-item">
          <a href="#works" className="navbar-link">Works</a>
        </li>
        <li className="navbar-link-item">
          <a href="#testimonials" className="navbar-link">Testimonials</a>
        </li>
        <li className="navbar-link-item">
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
