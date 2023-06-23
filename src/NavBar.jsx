import React from 'react';
import './Navbar.css';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ha<span style={{color:"yellowgreen",fontSize:'2rem'}}>sh</span>in</div>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <Tooltip title="Go to Home Page" arrow>
            <a href="#home" className="navbar-link">Home</a>
          </Tooltip>
        </li>
        <li className="navbar-link-item">
          <Tooltip title="View My Projects" arrow>
            <a href="#works" className="navbar-link">Projects</a>
          </Tooltip>
        </li>
        <li className="navbar-link-item">
          <Tooltip title="Read Client Testimonials" arrow>
            <a href="#testimonials" className="navbar-link">Testimonials</a>
          </Tooltip>
        </li>
        <li className="navbar-link-item">
          <Tooltip title="Contact Me" arrow>
            <a href="#contact" className="navbar-link">Contact</a>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
