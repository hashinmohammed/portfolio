import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const socialMediaLinks = [
    { id: 1, name: 'Instagram', url: 'https://www.instagram.com', icon: <FaInstagram className="social-icon" /> },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com', icon: <FaFacebook className="social-icon" /> },
    { id: 3, name: 'LinkedIn', url: 'https://www.linkedin.com', icon: <FaLinkedin className="social-icon" /> },
  ];
  
  export const address = [
    { id: 1, line: '123 Address Street' },
    { id: 2, line: 'City, State ZIP' },
  ];
  
  export const contactDetails = [
    { id: 1, label: 'Email', value: 'info@example.com' },
    { id: 2, label: 'Phone', value: '123-456-7890' },
  ];