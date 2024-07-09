import React, { useState } from 'react';
import './WeddingGallery.css';
import memories1 from './images/memories1.jpeg';
import memories2 from './images/memories2.jpeg';
import memories3 from './images/memories3.jpeg';
import memories4 from './images/memories4.jpeg';
import memories5 from './images/memories5.jpeg';
import memories6 from './images/memories6.jpeg';
import memories7 from './images/memories7.jpeg';
import memories8 from './images/memories8.jpeg';
import memories9 from './images/memories9.jpeg';
import memories10 from './images/memories10.jpeg';
import memories11 from './images/memories11.jpeg';
import memories12 from './images/memories12.jpeg';
import memories13 from './images/memories13.jpeg';
import memories14 from './images/memories14.jpeg';
import memories15 from './images/memories15.png';
import memories16 from './images/memories16.jpeg';
import memories17 from './images/memories17.jpeg';
import memories18 from './images/memories18.jpeg';

import flower from './section_tittle_flowre.webp';

const images = [
  { src: memories1, alt: 'Image 1' },
  { src: memories2, alt: 'Image 2' },
  { src: memories3, alt: 'Image 3' },
  { src: memories4, alt: 'Image 4' },
  { src: memories5, alt: 'Image 5' },
  { src: memories6, alt: 'Image 6' },
  { src: memories7, alt: 'Image 7' },
  { src: memories8, alt: 'Image 8' },
  { src: memories9, alt: 'Image 9' },
  { src: memories10, alt: 'Image 10' },
  { src: memories11, alt: 'Image 11' },
  { src: memories12, alt: 'Image 12' },
  { src: memories13, alt: 'Image 13' },
  { src: memories14, alt: 'Image 14' },
  { src: memories15, alt: 'Image 15' },
  { src: memories16, alt: 'Image 16' },
  { src: memories17, alt: 'Image 17' },
  { src: memories18, alt: 'Image 18' },
];

const WeddingGallery = () => {
  const [zoomImage, setZoomImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const handleImageClick = (src) => {
    setZoomImage(src);
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(images.length / imagesPerPage)));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="simple-gallery" id="simple-gallery">
      <img src={flower} alt="Flower" className="gallery-flower" />
      <h2>Our Memories</h2>
      <div className="gallery-grid">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image.src)}
            className="gallery-image"
            loading="lazy"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="pagination-button">
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(images.length / imagesPerPage)}
          className="pagination-button"
        >
          Next
        </button>
        
      </div>
      <p className="gallery-update-message">
          📢 We will update this gallery with our wedding photos, so be sure to check back after the wedding. 🥰
      </p>
      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom} role="dialog" aria-modal="true">
          <img src={zoomImage} alt="Zoomed" className="zoom-image" />
        </div>
      )}
    </div>
  );
};

export default WeddingGallery;
