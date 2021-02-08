import React from "react";
import { useFilterContex } from "../contex/filter-contex";
import "./ProductList.css";
import { formatPrice } from "../utils/helper";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const {
    filter_products: filter,
    all_products: all,
    gridView,
  } = useFilterContex();

  if (filter.length < 1) {
    return <h1 className="text-danger text-center">No Products found</h1>;
  }
  if (gridView === false) {
    return <ListView />;
  }
  return <GridView />;
};

export default ProductList;
