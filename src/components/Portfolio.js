import React, { useState } from "react";
import './Portfolio.css';
import Modal from './Modal'; // Import the Modal component

// Dynamically import images from the folder
function importAll(r) {
  return r.keys().map(r);
}

// Assuming all images are in the 'src/assets/images' folder
const images = importAll(require.context('../components/resources/gallery', false, /\.(png|jpe?g|svg)$/));

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    setCurrentIndex(null);
  };

  const updateCurrentImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <p className="display-4 text-center">A FEW OF OUR FAVORITES</p>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item" onClick={() => openModal(image, index)}>
            <img src={image} alt={`Portfolio image ${index + 1}`} className="portfolio-image" />
          </div>
        ))}
      </div>

      {/* Modal to display the currently selected image */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
        altText={`Portfolio image`}
        images={images} // Pass the array of images
        currentIndex={currentIndex} // Pass the current index
      />
    </>
  );
}

export default Portfolio;
