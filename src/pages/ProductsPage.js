import React from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const ProductsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        {/* Filter part */}
        <div className="col-lg-3 ">
          <Filters />
        </div>
        {/* Products part */}
        <div className="col-lg-9">
          {/* Sort part  */}
          <Sort />
          {/* Product List part  */}
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
