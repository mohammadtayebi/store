import React from "react";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const cart_reducer = (state, action) => {
  // getting the value of the product
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = tempItem.map((cart) => {
        if (cart.id === id + color) {
          let newAmount = cart.amount + amount;
          if (newAmount > cart.max) {
            newAmount = cart.max;
          }
          return { ...cart, amount: newAmount };
        } else {
          return cart;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
        totalMoney: 0,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  // remove an item
  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  // clearing the cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  // increase and decrease the value
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
    });
    return { ...state, cart: tempCart };
  }
  // counting the total
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
