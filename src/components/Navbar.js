import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contex/cart-contex";
import "./Navbar.css";

const Navbar = () => {
  const { total_items } = useCartContext();
  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light container">
      {/* nav-image  */}
      <Link className="navbar-brand hi" to="/">
        <img
          className="nav-img"
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
        />
      </Link>
      {/* responsive button  */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* nav bar texts  */}
      <div className="collapse navbar-collapse w-100" id="collapsibleNavbar">
        {/* texts in middle  */}
        <ul className="navbar-nav m-auto nav-links">
          <li className="nav-item mx-3 w-100 border-md-0">
            <Link className="nav-link text-dark" href="#" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3 w-100">
            <Link className="nav-link text-dark" href="#" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mx-3 w-100">
            <Link className="nav-link text-dark" href="#" to="/products">
              Products
            </Link>
          </li>
        </ul>
        {/* cart and ogin icons  */}
        <div className="justify-content-right ml-auto nav-icons text-center">
          <Link className="pr-3" to="/cart">
            Cart{" "}
            <i className="fas fa-shopping-cart">
              {" "}
              <span className="cart-number"> {total_items}</span>
            </i>
          </Link>

          <span>
            {" "}
            Login <i className="fas fa-user-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
