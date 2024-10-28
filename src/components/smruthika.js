import React, { useEffect, useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import './GallerySlideShow.css';

// Dynamically import images from a folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../components/resources/smruthika', false, /\.(png|jpe?g|svg)$/));

const MyGallery = () => {
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const dimensions = await Promise.all(
        images.map((image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              resolve({ width: img.naturalWidth, height: img.naturalHeight });
            };
          });
        })
      );
      setImageDimensions(dimensions);
    };

    loadImages();
  }, []);

  return (
    <div className="gallery-container">
      <p className="display-3 text-center">Smruthika Birthday</p>
      <Gallery>
        <div className="grid-layout">
          {images.map((image, index) => (
            <Item
              key={index}
              original={image}
              thumbnail={image}
              width={imageDimensions[index]?.width || 1875}  // Use dynamic width or fallback
              height={imageDimensions[index]?.height || 2500} // Use dynamic height or fallback
            >
              {({ ref, open }) => (
                <div className="image-wrapper">
                  <img
                    ref={ref}
                    onClick={open}
                    src={image}
                    alt={`Photo ${index + 1}`}
                    className="grid-image"
                  />
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </div>
  );
};

export default MyGallery;
