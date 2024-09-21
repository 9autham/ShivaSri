import React from 'react';
import Card from "./Card";
import Pravalika from './resources/pravalika/feild-man.jpg';
import Smruthika from './resources/smruthika/mom.jpg';
import PreWedding from './resources/prewed/DSC02858.jpg'

function Gallery() {
    let prouctsList = [
        {
          productName: "Pravalika Photo Shoot",
          productImage0: Pravalika,
          direct: "../pravalika"
        },
        {
          productName: "Smruthika's Birthday",
          productImage0:Smruthika,
          direct: "../smruthika"
        },
        {
          productName: "Pre-Wedding",
          productImage0: PreWedding,
          direct: "../prewedding"
        },
      ];
  return (
    <div className="text-center">
      <div className="d-flex flex-wrap">
        <hr />
        {prouctsList.map((productObj) => (
          <Card productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
