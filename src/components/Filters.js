import React from "react";
import "./Filters.css";
import { getUniqueValue } from "../utils/helper";
import { useFilterContex } from "../contex/filter-contex";
import { formatPrice } from "../utils/helper";
const Filters = () => {
  const {
    all_products,
    updateFilters,
    clearFilter,
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
  } = useFilterContex();
  const categories = getUniqueValue(all_products, "category");
  const companies = getUniqueValue(all_products, "company");
  const colores = getUniqueValue(all_products, "colors");
  return (
    <div className="form-filter">
      <form action="" className="pt-2" onSubmit={(e) => e.preventDefault()}>
        {/* Serach  */}
        <div className="form-controls my-3 border-0">
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={updateFilters}
            value={text}
            name="text"
          />
        </div>
        {/* Category  */}
        <div className="form-controls my-3">
          <h5 className="border-0 font-weight-bold">Catogory</h5>
          {categories.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className={
                    item === category
                      ? "category-button active-border"
                      : "category-button"
                  }
                  type="button"
                  name="category"
                  onClick={updateFilters}
                  value={category}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
        {/* Company  */}
        <div className="form-controls my-3">
          <h5 className="font-weight-bold">Company</h5>
          <select
            name="company"
            className="company"
            id="company"
            onChange={updateFilters}
            value={company}
          >
            {companies.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/* Colors  */}
        <div className="form-controls my-3">
          <h5 className="font-weight-bold">Color</h5>
          <div className="d-flex align-items-center">
            {colores.map((item, index) => {
              if (item === "all") {
                return (
                  <button
                    key={index}
                    className="all-btn"
                    onClick={updateFilters}
                    name="color"
                    data-color="all"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    className={`${
                      color === "all" ? "all-btn actives" : "all-btn"
                    }`}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  className="color-filter"
                  style={{ background: item }}
                  name="color"
                  onClick={updateFilters}
                  data-color={item}
                >
                  <i
                    className={
                      item === color ? "fas fa-check  text-white check" : null
                    }
                  ></i>
                </button>
              );
            })}
          </div>
        </div>
        {/* Price  */}
        <div className="form-controls my-3">
          <h5 className="font-weight-bold">Price</h5>
          <p>{formatPrice(price)}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            name="price"
            onChange={updateFilters}
            value={price}
          />
        </div>
        {/* Shipping  */}
        <div className="form-controls my-3 d-flex">
          <label htmlFor="shipping">Shipping</label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            className="ml-4"
            onChange={updateFilters}
            checked={shipping}
          />
        </div>
      </form>
      <button className="alert alert-danger" onClick={clearFilter}>
        clear filters
      </button>
    </div>
  );
};

export default Filters;
