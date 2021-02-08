import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";
const Product = ({ image, name, price, id }) => {
  return (
    <div className="feature-product mt-2">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="feature-image" />
      </Link>

      <div className="feature-info mt-2">
        <p>{name}</p>
        <span>{formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default Product;
