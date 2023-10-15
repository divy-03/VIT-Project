import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGetProDetailsQuery } from "../../Product/productApi";
import MetaData from "../layout/Title/MetaData";
// import ReactStars from "react-rating-stars-component";
import Loader from "../layout/Loader/Loader";
import ProductCarousel from "../layout/Carousel/ProductCarousel";
import "./ProDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetProDetailsQuery(id);

  // const options = {
  //   edit: false,
  //   size: window.innerWidth < 700 ? 15 : 20,
  //   color: "rgb(20, 20, 20, 0.1)",
  //   activeColor: "yellow",
  //   value: data.product === null ? 0 : data.product.rating,
  //   isHalf: true,
  // };

  if (error) {
    return <div>{error};</div>;
  }
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Fragment>
      <MetaData title={`VitXchange-${data.product.name}`} />

      <div className="ProductDetails">
        <div className="detail-left">
          <ProductCarousel product={data.product} />
        </div>
        <div className="detail-right">
          <div className="detailName">
            <h2>{data.product.name}</h2>
            <p>Product # {id}</p>
            <div className="detailDesc">
              {/* <ReactStars {...options} />
              <span> ({data.product.numOfReviews} Reviews) </span> */}
              <p>Description: </p>
              <p>{data.product.description}</p>
            </div>
          </div>

          <div className="detailPrice">
            <span style={{ marginTop: "5px" }}>
              Price: {data.product.priceType}
            </span>
            <h1> {`₹${data.product.fixedPrice}/-`} </h1>
          </div>

          <div className="toCart">
            <button className="btn-pink ATC-btn">Add to Cart</button>
            <button className="btn-pink BN-btn">Buy Now</button>
          </div>

          {/* <button className="submitReviews">Submit Review</button>   */}
        </div>

        <div className="responsive-btn-container">
          <button className="btn-pink ATC-btn-resp">Add to Cart</button>
          <button className="btn-pink BN-btn-resp">Buy Now</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
