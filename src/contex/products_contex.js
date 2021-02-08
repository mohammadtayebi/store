import React, { useEffect, useContext, useReducer } from "react";
import {
  products_url as url,
  single_product_url as single_url,
} from "../utils/help";
import reducer from "../reducers/products_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const ProductContex = React.createContext();
const initialState = {
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetching the Products api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await fetch(url);
      const product = await response.json();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: product });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  //   finish fetching product
  const getSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const single = await fetch(url);
      const response = await single.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  return (
    <ProductContex.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContex.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductContex);
};
export { ProductContex, ProductProvider };
