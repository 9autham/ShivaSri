import React from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

// Define breakpoints for responsive images
const importAll = (r) => {
    return r.keys().map(r);
  };
  
const images = importAll(require.context('../components/resources/pravalika', false, /\.(png|jpe?g|svg)$/));

const photos = images.map((image, index) => ({
    src: image,
    width: 1080,  // adjust width
    height: 1080,  // adjust height
    alt: `Image ${index + 1}`
  }));

const Gallery = () => {
  return (
    <div className="gallery-container">
    <p className="display-3 text-center">Pravalika PhotoShoot</p>
      <MasonryPhotoAlbum photos={photos}
      columns={(containerWidth) => {
        if (containerWidth < 300) return 1;
        if (containerWidth < 400) return 2;
        if (containerWidth < 800) return 3;
        return 4;
      }}/>
    </div>
  );
}

export default Gallery;
