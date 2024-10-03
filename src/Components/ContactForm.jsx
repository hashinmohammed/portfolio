import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import EmojiPicker from 'emoji-picker-react';
import Modal from './Modal';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phoneNumber: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const messageTextareaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { firstName, lastName, email, message, phoneNumber } = formValues;
    const templateParams = {
      firstName,
      lastName,
      email,
      message,
      phoneNumber,
    };
    const serviceID = 'service_xcm3lgd';
    const templateID = 'template_ou6g9ms';
    const userID = 'eVIUg7_nF02cvicMe';

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setIsLoading(false);
        console.log('Email sent successfully!', response);
        setIsModalOpen(!isModalOpen);
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          phoneNumber: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
        setIsLoading(false);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmojiSelect = (emoji) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      message: prevValues.message + emoji.emoji,
    }));
    setShowEmojiPicker(false);
    if (messageTextareaRef.current) {
      messageTextareaRef.current.focus();
    }
  };

  // Array of field configurations
  const formFields = [
    { id: 'firstName', label: 'First Name', type: 'text', name: 'firstName' },
    { id: 'lastName', label: 'Last Name', type: 'text', name: 'lastName' },
    { id: 'email', label: 'Email', type: 'email', name: 'email' },
    { id: 'phoneNumber', label: 'Phone Number', type: 'tel', name: 'phoneNumber' },
  ];

  return (
    <section id="contact" className="contact-section">
      <h1 data-aos="zoom-out-right">Connect with me</h1>
      <div className="contact-form-container" data-aos="fade-left">
        <div className="form-image">
          <img
            src="https://t4.ftcdn.net/jpg/06/00/82/29/360_F_600822946_7sDOl003Oo4gzJqG3pHxLkCNnzQBqdsu.jpg"
            alt="Form"
          />
        </div>
        <div className="form-content">
          <form className="form-last" onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div className="form-field" key={field.id}>
                <label htmlFor={field.id}>{field.label}:</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  value={formValues[field.name]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <div className="emoji-input-container">
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  required
                  ref={messageTextareaRef}
                />
                {showEmojiPicker && (
                  <div className="emoji-picker-container">
                    <EmojiPicker onEmojiClick={handleEmojiSelect} disableSearchBar />
                  </div>
                )}
                <button
                  type="button"
                  className="emoji-button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <span className='emoji' role="img" aria-label="Emoji Icon">
                    😀
                  </span>
                </button>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      {isLoading && <div className="spinner-container"><div className="lds-hourglass" /></div>}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </section>
  );
};

export default ContactForm;