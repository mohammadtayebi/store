import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const product_reducer = (state, action) => {
  // Products Reducers
  // start the loading
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, product_loading: true };
  }
  //   getting the apis
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      product_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  //show the Error
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, product_error: true, product_loading: false };
  }
  // End of Products reducer

  // Single product reducer
  // loading single product
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, single_product_loading: true };
  }
  //fetching the single products
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default product_reducer;
