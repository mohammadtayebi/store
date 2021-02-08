import React, { useState } from "react";
import "./AmountButtons.css";
import "../index.css";
const AmountButtons = ({ stock, increase, decrease, amount }) => {
  return (
    <div className="d-flex mt-3 ml-4 mb-4">
      <button className="mr-2 add-button bg-white border-0" onClick={decrease}>
        <i className="fas fa-minus"></i>
      </button>
      <h2>{amount}</h2>
      <button className="ml-2 add-button bg-white border-0" onClick={increase}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default AmountButtons;
