import React, { useState } from "react";
import AmountButtons from "./AmountButtons";
import "./AddToCart.css";
import "../index.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../contex/cart-contex";

const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const { addToCart } = useCartContext();
  const [main, setMain] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const decrease = () => {
    setAmount(amount - 1);
    if (amount <= 1) {
      setAmount(1);
    }
  };
  const increase = () => {
    setAmount(amount + 1);
    if (amount >= stock) {
      setAmount(stock);
    }
  };
  return (
    <div className=" mt-4">
      <div className="color-container">
        <p className="font-weight-bolder">colors: </p>
        <div className="d-flex ml-2">
          {colors.map((color, index) => {
            return (
              <button
                className={color === main ? "color-btn active" : "color-btn"}
                type="button"
                key={index}
                style={{ background: color }}
                onClick={() => setMain(color)}
              >
                <i
                  className={color === main ? "fas fa-check text-white" : null}
                ></i>
              </button>
            );
          })}
        </div>
      </div>
      <AmountButtons
        stock={stock}
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
      <Link
        className="hero-btn"
        to="/cart"
        onClick={() => addToCart(id, main, amount, product)}
      >
        Add To Cart
      </Link>
    </div>
  );
};

export default AddToCart;
