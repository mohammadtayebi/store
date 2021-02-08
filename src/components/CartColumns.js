import React from "react";
import "./CartColumns.css";

const CartColumns = () => {
  return (
    <div>
      <div className="cart-column">
        <h6>Item</h6>
        <h6>Price</h6>
        <h6>Quantity</h6>
        <h6>Subtotal</h6>
        <span className="span"> </span>
      </div>
      <hr />
    </div>
  );
};

export default CartColumns;
