import React from "react";
import { Link } from "react-router-dom";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import "./CartContent.css";
import CartToltal from "./CartToltal";
import { useCartContext } from "../contex/cart-contex";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <div className="mt-5">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem {...item} key={item.id} />;
      })}
      {/* <CartItem /> */}
      <hr />
      <div className="d-flex justify-content-between my-4">
        <Link className="shopping" to="/products">
          Continue Shopping
        </Link>
        <button className="clear" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>
      <CartToltal />
    </div>
  );
};

export default CartContent;
