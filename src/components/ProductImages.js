import React, { useState } from "react";
import "./ProductImages.css";
const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(0);

  return (
    <div>
      <div>
        <img src={images[main].url} alt="" className="main-image" />
      </div>
      <div className="small-image">
        {images.map((image, index) => {
          const { filename, url, id } = image;
          return (
            <img
              src={url}
              alt={filename}
              className={index === main ? "pics active" : "pics"}
              key={id}
              onClick={() => setMain(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
