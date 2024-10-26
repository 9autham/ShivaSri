import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt={altText} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
