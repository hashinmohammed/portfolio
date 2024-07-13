import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import './NavBar.css';

const Navbar = () => {
  const navbarLinks = [
    { title: 'Home', href: '#home', tooltip: 'Go to Home Page' },
    { title: 'Projects', href: '#works', tooltip: 'View My Projects' },
    { title: 'Testimonials', href: '#testimonials', tooltip: 'Read Client Testimonials' },
    { title: 'Contact', href: '#contact', tooltip: 'Contact Me' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ha<span style={{ color: '#bfce3793', fontSize: '2rem' }}>sh</span>in
      </div>
      <ul className="navbar-links">
        {navbarLinks.map((link, index) => (
          <li className="navbar-link-item" key={index}>
            <Tooltip title={link.tooltip} arrow>
              <a href={link.href} className="navbar-link">
                {link.title}
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
