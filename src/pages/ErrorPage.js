import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="display-1">404</h1>
      <h1 className="font-weight-bolder my-3">
        Sorry, the page you tried cannot be found
      </h1>
      <Link className="btn btn-warning mt-2" to="/">
        back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
