import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { name, desc, fixedPrice, id, img } = props;
  return (
    <Fragment>
      <Link to={`product/${id}`} className="proCardContainer">
        <img src={img} alt="HeroImg" />
        <div className="details">
          <h2 className="name">{name}</h2>
          <p>{desc}</p>
          <p className="price">₹{fixedPrice}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
