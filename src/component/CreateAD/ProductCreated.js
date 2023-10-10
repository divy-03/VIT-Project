import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductCreated = () => {
  return (
    <Fragment>
      <div className="sellBody flex-col">
        <p className="sellHead">"Product Created Successfully"</p>
        <div className="flex-row">
          <div className="flex-col">
            <p>Create Another Product</p>
            <Link to={"/product/new"}>Create</Link>
          </div>
          <div className="flex-col">
            <p>Go to All Your Listings</p>
            <Link to={"/my/listings"}>Listings</Link>
          </div>
        </div>
        <Link to={"/products"}>Go to All Products</Link>
      </div>
    </Fragment>
  );
};

export default ProductCreated;
