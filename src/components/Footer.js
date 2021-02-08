import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-4 footer">
      <p className="text-light text-center">
        <span>&copy; </span> 2021{" "}
        <span className="text-warning">ComfySloth</span> All rights reserved
      </p>
    </div>
  );
};

export default Footer;
