import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { images } from '../src/utils/GalleryData';
import './Gallery.css';

const GalleryComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goToNextImage();
    } else if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  };

  const handleHeadToWebsite = () => {
    const { websiteUrl } = images[currentImageIndex];
    if (websiteUrl !== '') {
      window.open(websiteUrl, '_blank');
    }
  };

  const handleViewSourceCode = () => {
    const { sourceCodeUrl } = images[currentImageIndex];
    if (sourceCodeUrl !== '') {
      window.open(sourceCodeUrl, '_blank');
    }
  };

  return (
    <div id="works" className="gallery-container">
      <h1 className="gallery-heading" data-aos="fade-left">
        Recent works
      </h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="image-div"
            data-aos="zoom-in"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={handleOverlayClick}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <FiX />
            </button>
            <button className="lightbox-prev" onClick={goToPreviousImage}>
              <FiChevronLeft />
            </button>
            <button className="lightbox-next" onClick={goToNextImage}>
              <FiChevronRight />
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="lightbox-image"
            />
            <div className="lightbox-buttons">
              <button
                className="lightbox-button"
                onClick={handleHeadToWebsite}
                disabled={images[currentImageIndex].websiteUrl === ''}
              >
                Head to Website
              </button>
              <button
                className="lightbox-button"
                onClick={handleViewSourceCode}
                disabled={images[currentImageIndex].sourceCodeUrl === ''}
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
