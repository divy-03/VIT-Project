import React, { Fragment } from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <Fragment>
      <Link to={props.url}>
        <div className="containerCat">
          <img className="catIMG" src={props.catIMG} alt="cat1" />
          <h2 className="catName">{props.catName}</h2>
        </div>
      </Link>
    </Fragment>
  );
};

export default CategoryCard;
