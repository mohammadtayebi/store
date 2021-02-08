import React from "react";
import AmountButtons from "./AmountButtons";
import "./CartItem.css";
import { formatPrice } from "../utils/helper";
import { useCartContext } from "../contex/cart-contex";

const CartItem = ({ id, color, image, amount, max, name, price }) => {
  const { removeCartItem, toogleAmount } = useCartContext();
  const increase = () => {
    toogleAmount(id, "inc");
  };
  const decrease = () => {
    toogleAmount(id, "dec");
  };
  return (
    <div className="cart-item">
      {/* item  */}
      <div className="item-cart">
        <img src={image} alt={name} />
        <div className="name-color mt-2">
          <span className="font-weight-bolder">{name}</span>
          <p className="item-info font-font-weight-bolder">
            color:
            <span
              className="item-color"
              style={{ background: { color } }}
            ></span>
          </p>
        </div>
      </div>
      {/* price  */}
      <p>{formatPrice(price)}</p>
      {/* quantity  */}
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      {/* subtotal  */}
      <p>{formatPrice(price * amount)}</p>
      {/* remove  */}
      <button className="remove-button" onClick={() => removeCartItem(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
