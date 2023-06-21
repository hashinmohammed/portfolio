import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import the updated CSS file for styling
// import formImage from './form-image.jpg'; // Import the image

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
      phoneNumber
    };

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_xcm3lgd'
    const templateID = 'template_ou6g9ms';
    const userID = 'eVIUg7_nF02cvicMe';

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <section className="contact-section">
      <h1 data-aos="zoom-out-right">Connect with me</h1>
      <div className="contact-form-container" data-aos="flip-left">
        <div className="form-image">
          <img src='https://t4.ftcdn.net/jpg/06/00/82/29/360_F_600822946_7sDOl003Oo4gzJqG3pHxLkCNnzQBqdsu.jpg' />
        </div>
        <div className="form-content" >
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;