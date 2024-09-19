import React from 'react';
import './Gallery.css';

const images = [
    '/images/noor.jpg'
];


const Gallery = () => {
    return (
        <div className="gallery">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Noor ${index + 1}`} />
            ))}
        </div>
    );
};

export default Gallery;
