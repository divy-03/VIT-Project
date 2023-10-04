import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { name, desc, fixedPrice, id, img } = props;

  let slicedDesc = desc;

  if (desc && desc.length > 25) {
    slicedDesc = desc.slice(0, 25) + "...";
  }

  return (
    <Fragment>
      <Link to={`/product/${id}`} className="proCardContainer">
        <img src={img} alt="HeroImg" />
        <div className="details">
          <h2 className="name">{name}</h2>
          <p>{slicedDesc}</p>
          <p className="price">₹{fixedPrice}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
