import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import "./ListingCard.css";

const ProductCard = (props) => {
  const { name, desc, fixedPrice, id, img } = props;

  return (
    <Fragment>
      <div className="listCardContainer flex-row">
        <img src={img} alt="HeroImg" />
        <div className="listDetails">
          <h2 className="listName">{name}</h2>
          <p>{desc}</p>
        </div>
        <div className="flex-col">
          <h2 className="listName">Price</h2>
          <p className="price">₹{fixedPrice}</p>
        </div>
        <div className="flex-col">
          <Link to={`/product/${id}`} className="listBtn">
            Go to Product
          </Link>
          <button className="listBtn">Edit Product</button>
          <button className="listBtn">Delete Product</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
