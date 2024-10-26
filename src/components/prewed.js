import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Modal from "./Modal";
import "react-photo-album/masonry.css";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../components/resources/prewed", false, /\.(png|jpe?g|svg)$/));

const photos = images.map((image, index) => ({
  src: image,
  width: 1080,
  height: 1080,
  alt: `Image ${index + 1}`
}));

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (photo) => {
    if (photo) {
      setSelectedImage(photo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
    <p className="display-3 text-center">PreWedding</p>
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ photo }) => openModal(photo)}
        columns={(containerWidth) => {
          if (containerWidth < 300) return 1;
          if (containerWidth < 500) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage?.src}
        altText={selectedImage?.alt}
      />
    </div>
  );
};

export default Gallery;
