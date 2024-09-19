import React, { useState } from 'react';
import './Gallery.css';

const images = [
    '/images/noor.jpg'
];

const Gallery = () => {
    const [showImage, setShowImage] = useState(false);

    const handleRevealClick = () => {
        setShowImage(true);
    };

    return (
        <div className="gallery-container">
            <h1 className="animated-text">Hello, Visitor...</h1>
            <h3>Have a good day</h3>
            {!showImage && (
                <button className="reveal-button" onClick={handleRevealClick}>
                    Tap to reveal the cutest existing child
                </button>
            )}
            <div className={`gallery ${showImage ? 'show' : ''}`}>
                {showImage && images.map((img, index) => (
                    <img key={index} src={img} alt={`Noor ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
