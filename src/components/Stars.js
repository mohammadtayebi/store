import React from "react";

const Starts = ({ stars }) => {
  return (
    <div>
      <span>
        <i
          className={
            stars >= 1
              ? "fas fa-star text-warning"
              : stars >= 0.5
              ? "fas fa-star-half-alt text-warning"
              : "far fa-star text-warning"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 2
              ? "fas fa-star text-warning"
              : stars >= 1.5
              ? "fas fa-star-half-alt text-warning"
              : "far fa-star text-warning"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 3
              ? "fas fa-star text-warning"
              : stars >= 2.5
              ? "fas fa-star-half-alt text-warning"
              : "far fa-star text-warning"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 4
              ? "fas fa-star text-warning"
              : stars >= 3.5
              ? "fas fa-star-half-alt text-warning"
              : "far fa-star text-warning"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 5
              ? "fas fa-star text-warning"
              : stars >= 4.5
              ? "fas fa-star-half-alt text-warning"
              : "far fa-star text-warning"
          }
        ></i>
      </span>
    </div>
  );
};

export default Starts;
