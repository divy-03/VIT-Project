import React, { Fragment } from "react";
import ProductCard from "../layout/Cards/ProductCard";
import { useGetMyWishListQuery } from "../../Product/productApi";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";

const MyWishList = () => {
  const { data, error, isLoading } = useGetMyWishListQuery();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 style={{ fontSize: "3vmax", color: "gray" }}>{error.message}</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="containerProduct">
        {data && data.products && data.products.length === 0 ? (
          <div className="flex-col" style={{ height: "90vh" }}>
            <h3 className="oops mb-1">
              Oops! Products not found in your Wish List
            </h3>
            <span>Browse products and wish list your favourites</span>
            <Link to={`/products`} className="btn mt-1">
              Browse Products!
            </Link>
          </div>
        ) : (
          data.products.map((pro) => (
            <ProductCard
              key={pro._id}
              id={pro._id}
              name={pro.name}
              desc={pro.description}
              img={pro.images[0].url}
              fixedPrice={pro.fixedPrice}
              priceType={pro.priceType}
              wishListed={pro.wishListed}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default MyWishList;
