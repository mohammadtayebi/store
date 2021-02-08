import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero-bcg-2.jpeg";
import hero2 from "../assets/hero-bcg.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      {/* left side the Texts  */}
      <div className="row hero-container">
        <div className="col-lg-5 my-auto">
          <h1 className="font-weight-bolder display-4">
            Design Your <br /> Comfort Zone
          </h1>
          <p className="text-justify text-secondary font-weight-bold mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            maxime distinctio consequuntur molestiae temporibus corrupti!
            Facilis amet recusandae voluptate vero, sequi earum unde fuga
            deleniti minima voluptatum beatae qui deserunt?
          </p>
          <Link to="/products" className="hero-btn mt-4">
            Shop Now
          </Link>
          {/* right side the images  */}
        </div>
        <div className="col-lg-7">
          <div className="pl-5 img-container">
            <img src={hero2} alt="hero2" className="hero-img-main" />
            <img src={hero1} alt="hero1" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
