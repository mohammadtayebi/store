// import React from "react";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((max) => max.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filter_products: action.payload,
      all_products: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  // setting the display view
  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  // sorting the products
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { filter_products, sort } = state;
    let tempProduct = [...filter_products];
    if (sort === "price-lowest") {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price);
    }
    if (sort === "price-highest") {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price);
    }
    if (sort === "name-a") {
      tempProduct = tempProduct.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProduct = tempProduct.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filter_products: tempProduct };
  }
  // getting the value of the filters
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  // Filtering the products
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company;
      });
    }
    // color
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }
    return { ...state, filter_products: tempProducts };
  }
  // clearing the filters
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
