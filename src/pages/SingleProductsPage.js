import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductsContext } from "../contex/products_contex";
import { single_product_url as url } from "../utils/help";
import "./SingleProducts.css";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import { formatPrice } from "../utils/helper";

const SingleProductsPage = () => {
  // functionality
  const { id } = useParams();
  const { getSingleProduct, single_product: product } = useProductsContext();
  // console.log(product);
  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  // html codes
  return (
    <div className="container my-5 all">
      <Link to="/" type="button" className="hero-btn">
        back to home
      </Link>
      <div className="row mt-5">
        <div className="col-lg-6">
          {/* images */}
          <ProductImages images={images} />
        </div>
        <div className="col-lg-6">
          <h1 className="font-weight-bolder">{name}</h1>
          <div>
            {/* Stars  */}
            <Stars stars={stars} /> ({reviews} cutomers reviews)
          </div>
          <p className="text-warning font-weight-bolder mt-2">
            {formatPrice(price)}
          </p>
          <p className="text-justify font-weight-bolde">{description}</p>
          <p>
            <span className="font-weight-bolder">Avaibale:</span>{" "}
            {stock > 0 ? "in Stock" : "out of Stock"}
          </p>
          <p>
            <span className="font-weight-bolder"> SKU:</span> {sku}
          </p>
          <p>
            <span className="font-weight-bolder">Brand:</span> {company}
          </p>
          <hr />
          {/* Add to cart  */}
          {stock > 1 && <AddToCart product={product} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProductsPage;
