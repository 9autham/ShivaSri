import React from "react";
import './Portfolio.css'

// Dynamically import images from the folder
function importAll(r) {
  return r.keys().map(r);
}

// Assuming all images are in the 'src/assets/images' folder
const images = importAll(require.context('../components/resources/gallery', false, /\.(png|jpe?g|svg)$/));

function Portfolio() {
  return (
    <>
    <p className="display-4 text-center">A FEW OF OUR FAVORITES</p>
    <div className="portfolio-grid">
      {images.map((image, index) => (
        <div key={index} className="portfolio-item">
          <img src={image} alt={`Portfolio image ${index + 1}`} className="portfolio-image" />
        </div>
      ))}
    </div>
    </>
  );
}

export default Portfolio;
