import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css"

function Product(props) {
  return (
    <div className="card card-body bg-light border-light">
      <NavLink className="nav-link active" to={props.productObj.direct}>
        <img
          src={props.productObj.productImage0}
          className="product-image"
          alt={props.productObj.productName}
        />
        <p>{props.productObj.productName}</p>
      </NavLink>
    </div>
  );
}

export default Product;

