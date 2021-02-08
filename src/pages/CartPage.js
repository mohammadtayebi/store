import React from "react";
import CartContent from "../components/CartContent";
import { useCartContex } from "../contex/cart-contex";

const CartPage = () => {
  return (
    <div className="container">
      <div className="footers">
        <CartContent />
      </div>
    </div>
  );
};

export default CartPage;
