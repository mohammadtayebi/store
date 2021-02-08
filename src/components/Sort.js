import React from "react";
import { useFilterContex } from "../contex/filter-contex";
import "./Sort.css";
const Sort = () => {
  const {
    gridView,
    setGridView,
    setLisrView,
    sort,
    updateSort,
    filter_products,
  } = useFilterContex();
  return (
    <div className="sort">
      <div className="grid">
        <i
          className={
            gridView ? "fas fa-border-all pic active" : "fas fa-border-all pic"
          }
          onClick={setGridView}
        ></i>
        <i
          className={
            !gridView ? "fas fa-list-alt pic active" : "fas fa-list-alt pic"
          }
          onClick={setLisrView}
        ></i>
      </div>
      <p className="m-0">{filter_products.length} products found</p>
      <hr className="hr" />
      {/* sorting by masure  */}
      <form action="">
        <label htmlFor="sort">Sorted by </label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
