import React from "react";
import { useProductsContext } from "../contex/products_contex";
import "./FeaturedProducts.css";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    featured_products: feature,
    product_loading,
    product_error,
  } = useProductsContext();

  if (product_loading) {
    return <div className="loader text-center my-5"></div>;
  }
  if (product_error) {
    return (
      <div>
        <h1 className="display-1">Error</h1>
      </div>
    );
  }
  return (
    <div className="home-products">
      <div className="containers">
        <h1 className="text-center font-weight-bolder">Featured Products</h1>
        <hr className="underline" />
        {/* card */}
        <div className="feature-gallary">
          {feature.slice(0, 3).map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
