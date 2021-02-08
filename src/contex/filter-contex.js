import React, { useEffect, useReducer, useContext } from "react";
import reducer from "../reducers/filter-reducer";
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
import { useProductsContext } from "./products_contex";

const initialState = {
  loading: true,
  filter_products: [],
  all_products: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
const FilterContex = React.createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  // getting the products
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  //rebotting for sort and filter
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.sort, products, state.filters]);
  // Grid View Function
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setLisrView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  // get the value of the filters
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  // clearing the filters
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS, payload: products });
  };
  return (
    <FilterContex.Provider
      value={{
        ...state,
        setGridView,
        setLisrView,
        updateSort,
        updateFilters,
        clearFilter,
      }}
    >
      {children}
    </FilterContex.Provider>
  );
};
export const useFilterContex = () => {
  return useContext(FilterContex);
};
export { FilterContex, FilterProvider };
