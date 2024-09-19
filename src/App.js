import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Gallery />
            <About />
            
            {/* Flex Container with Image and Quote */}
            <div className="flex-container">
                <div className="image-container">
                <img
    src="https://play.google.com/store/apps/details?id=com.highfivestudio.cutecatwallpaperhd&hl=en_US" // Replace with your actual image link
    alt="Beautiful Girl"
    className="flex-image"
/>

                </div>
                <div className="quote-container">
                    <p className="quote-text">
                        "Everyone should experience a beautiful and cute girl as you in their life."
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
