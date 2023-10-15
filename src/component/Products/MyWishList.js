import React, { Fragment } from "react";
import ProductCard from "../layout/Cards/ProductCard";
import { useGetMyWishListQuery } from "../../Product/productApi";
import Loader from "../layout/Loader/Loader";

const MyWishList = () => {
  const { data, error, isLoading } = useGetMyWishListQuery();
  if (isLoading) {
    <div>
      <Loader />
    </div>;
  }
  if (error) {
    <div>
      <h1 style={{ fontSize: "3vmax", color: "gray" }}>{error.message}</h1>
    </div>;
  }
  return (
    <Fragment>
      <div className="containerProduct">
        {data.products.length === 0 ? (
          <div>
            <h1> Oops! No Product Found</h1>
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
