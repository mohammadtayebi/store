import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
// getting the local storage
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const CartContext = React.createContext();
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // getting the value of the product
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  // remove cart item
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // clearing the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  // increase and decrease the value
  const toogleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  // putting the product in local storage
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCartItem, clearCart, toogleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
