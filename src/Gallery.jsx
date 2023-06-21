import React from 'react';
import {images} from '../src/utils/GalleryData'

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Gallery.css'
const GalleryComponent = () => {
  

  return (
    <div id='works' className="gallery-container">
    <h1 className="gallery-heading" data-aos="fade-left">Recent works</h1>
    <div className="image-grid" >
      {images.map((image) => (
        <Link key={image.id} to={image.link} target="_blank">
            <div className='image-div' data-aos="zoom-in">
            <img
            src={image.src}
            alt={image.alt}
            className="gallery-image"
          />
            </div>
         
        </Link>
      ))}
    </div>
  </div>
);

  
};

export default GalleryComponent;
