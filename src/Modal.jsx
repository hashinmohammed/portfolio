import React, { useEffect, useRef, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isClickOutside, setIsClickOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsClickOutside(true);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isClickOutside) {
      onClose();
      setIsClickOutside(false);
    }
  }, [isClickOutside, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="icon-container">
          <FaThumbsUp className="thumbs-up-icon" />
        </div>
        <p className="modal-text">Thank you for connecting with me.
I will get back to you soon.</p>
        <button className="ok-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
