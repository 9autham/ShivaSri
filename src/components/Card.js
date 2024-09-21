import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
function Product(props) {
  return (
    <div className="card card-body bg-light border-light">
      <NavLink className="nav-link active" to={props.productObj.direct}>
        <img
      src={props.productObj.productImage0}
      style={{ width: 300, height: 300, justifyContent: "center" }}
      alt="/"
    />
        <p className="">{props.productObj.productName}</p>
      </NavLink>
    </div>
  );
}

export default Product;