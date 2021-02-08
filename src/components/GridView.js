import React from "react";
import { useFilterContex } from "../contex/filter-contex";
import "./GridView.css";
import { formatPrice } from "../utils/helper";
import { Link } from "react-router-dom";

const GridView = () => {
  const { filter_products: filter, all_products: all } = useFilterContex();
  return (
    <div className="list">
      {filter.map((item) => {
        const { id, name, price, image } = item;
        return (
          <div className="product" key={id}>
            <Link to={`/products/${id}`}>
              <img src={image} alt={name} />
            </Link>

            <div className="product-info align-items-center">
              <p className="font-weight-bolder">{name}</p>
              <span className="text-warning">{formatPrice(price)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
