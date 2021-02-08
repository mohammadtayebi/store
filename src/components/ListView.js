import React from "react";
import { useFilterContex } from "../contex/filter-contex";
import "./ListView.css";
import { formatPrice } from "../utils/helper";
import { Link } from "react-router-dom";

const ListView = () => {
  const { filter_products: filter, all_products: all } = useFilterContex();
  return (
    <div className="all-list">
      {filter.map((item) => {
        const { id, image, name, price, description } = item;
        return (
          <div className="list-view " key={id}>
            <img src={image} alt={name} className="left" />

            <div className="right ">
              <h4>{name}</h4>
              <span className="text-warning">{formatPrice(price)}</span>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn btn-success">
                details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
