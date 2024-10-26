import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, imageSrc, altText, images, currentIndex }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset after closing
    }, 300); // Match with animation duration
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      // Show previous image
      if (currentIndex > 0) {
        onClose(images[currentIndex - 1]); // Change to the previous image
      }
    } else if (direction === "right") {
      // Show next image
      if (currentIndex < images.length - 1) {
        onClose(images[currentIndex + 1]); // Change to the next image
      }
    }
  };

  // Touch event handlers
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX; // Get the initial touch position
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX; // Get the final touch position
    handleGesture();
  };

  const handleGesture = () => {
    if (touchEndX < touchStartX - 50) {
      handleSwipe("left"); // Swipe left
    } else if (touchEndX > touchStartX + 50) {
      handleSwipe("right"); // Swipe right
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling

      // Attach touch event listeners
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
        document.body.style.overflow = ""; // Reset overflow when modal closes
      };
    } else {
      document.body.style.overflow = ""; // Reset overflow when modal is closed
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? 'slide-out' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <img src={imageSrc} alt={altText} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
