import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">logo</div>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">Link 1</a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">Link 2</a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">Link 3</a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">Link 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
