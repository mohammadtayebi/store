import React from "react";
import { useCartContext } from "../contex/cart-contex";
import "./CartToltal.css";
import { formatPrice } from "../utils/helper";

const CartToltal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div className="cart text-right my-5">
      <div className="cart-total ">
        <div className="d-flex justify-content-between">
          <h5>subtotal :</h5>
          <span>{formatPrice(total_amount)}</span>
        </div>
        <div className="d-flex justify-content-between">
          <h5>shipping fee :</h5>
          <span>{formatPrice(shipping_fee)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h2>order total :</h2>
          <span>{formatPrice(shipping_fee + total_amount)}</span>
        </div>
      </div>
      <button className="login">Login</button>
    </div>
  );
};

export default CartToltal;
