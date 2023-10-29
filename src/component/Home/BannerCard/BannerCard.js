import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./BannerCard.css";

const BannerCard = (props) => {
  return (
    <Fragment>
      <div className="containerBanner flex-col">
        <h3 className="bannerHead">{props.head}</h3>

        <p className="bannerDesc">
        Starting at &#8377;{props.desc}
        </p>

        <div className="bannerIMG flex-row">
          <img src="https://picsum.photos/317/300" alt="banner1" />
        </div>
        <div className="see">
          <Link className="more" to="/banner1">
            See more
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default BannerCard;
