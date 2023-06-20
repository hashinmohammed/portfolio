import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { socialMediaLinks,address,contactDetails } from './utils/FooterDatas';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        {address.map((line) => (
          <p key={line.id}>{line.line}</p>
        ))}
      </div>
      <div className="column">
        <h3>Get in Touch</h3>
        {contactDetails.map((detail) => (
          <p key={detail.id}>
            {detail.label}: {detail.value}
          </p>
        ))}
      </div>
      <div className="column">
        <h3>Follow Me</h3>
        <div className="social-icons">
          {socialMediaLinks.map((link) => (
            <Link to={link.url} key={link.id}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
