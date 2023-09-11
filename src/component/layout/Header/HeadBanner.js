import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./HeadBanner.css";

const HeadBanner = () => {
  return (
    <Fragment>
      <div className="headBanner">
        {/* <h1>Buy and Sell Used Products within our VIT Bhopal Campus</h1> */}
        <div>
          <span>Find out your college needs and start buying and selling on VIT</span>
          <Link to="/" className="X">X</Link>
          <span>change </span>
          <Link to="/sell">Now!</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default HeadBanner;
