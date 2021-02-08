import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./contex/products_contex";
import { FilterProvider } from "./contex/filter-contex";
import { CartProvider } from "./contex/cart-contex";

ReactDOM.render(
  <ProductProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductProvider>,

  document.getElementById("root")
);
