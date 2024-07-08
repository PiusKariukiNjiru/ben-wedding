import React, { useState } from 'react';
import './WeddingGallery.css';
import memories1 from './memories1.webp';
import memories2 from './memories2.webp';
import memories3 from './memories3.webp';
import memories4 from './memories4.webp';
import memories5 from './memories5.webp';
import memories6 from './memories6.jpeg';
import flower from './section_tittle_flowre.webp'

const images = [
{
    src: memories1,
    alt: 'Image 1'
},
{
    src: memories2,
    alt: 'Image 2'
},
{
    src: memories3,
    alt: 'Image 3'
},
{
    src: memories4,
    alt: 'Image 4'
},
{
    src: memories5,
    alt: 'Image 5'
},
{
    src: memories6,
    alt: 'Image 6'
},
{
    src: memories4,
    alt: 'Image 4'
},
{
    src: memories5,
    alt: 'Image 5'
},
{
    src: memories6,
    alt: 'Image 6'
},
{
    src: memories4,
    alt: 'Image 4'
},

];

const SimpleGallery = () => {
const [zoomImage, setZoomImage] = useState(null);

const handleImageClick = (src) => {
    setZoomImage(src);
};

const closeZoom = () => {
    setZoomImage(null);
};

return (
    <div className="simple-gallery" id='simple-gallery'>
        <img src={flower} alt="flower" className='gallery-flower' />
        <h2>Our Memories</h2>
    <div className="gallery-grid">
        {images.map((image, index) => (
        <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image.src)}
            className="gallery-image"
        />
        ))}
    </div>
    {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
        <img src={zoomImage} alt="Zoomed" className="zoom-image" />
        </div>
    )}
    </div>
);
};

export default SimpleGallery;