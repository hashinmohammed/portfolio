import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { socialMediaLinks, address, contactDetails } from '../utils/FooterDatas';
import { nanoid } from 'nanoid';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        {/* <img src="../src/assets/hashin-logo.svg" alt="Logo" className="logo" /> */}
        {address.map((line) => (
          <div key={nanoid()}> {/* Assigning a unique key to the div */}
            <p>{line.line}</p>
          </div>
        ))}
        <p>{`Copyright © ${new Date().getFullYear()}`}</p>
      </div>
      <div className="column">
        <h3>Get in Touch</h3>
        {contactDetails.map((detail) => (
          <p className='not-needed-in-media' key={nanoid()}>
            {detail.label}: {detail.value}
          </p>
        ))}
      </div>
      <div className="column">
        <h3>Follow Me</h3>
        <div className="social-icons">
          {socialMediaLinks.map((link) => (
            <Link to={link.url} key={nanoid()}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
