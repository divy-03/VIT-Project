import React, { Fragment, useState } from "react";
import "./Products.css";
import MetaData from "../layout/Title/MetaData";
// import { useParams } from "react-router-dom";
import { useGetSortedProductsQuery } from "../../Product/productApi";
import Loader from "../layout/Loader/Loader.js";
import ProductCard from "../layout/Cards/ProductCard.js";

const Products = () => {
  const [sortBy, setSortBy] = useState("time");
  const toggleSort = () => {
    console.log("Hello");
    if (sortBy === "time") {
      setSortBy("asc");
    } else if (sortBy === "asc") {
      setSortBy("desc");
    } else {
      setSortBy("time");
    }
  };

  const { data, error, isLoading } = useGetSortedProductsQuery({
    sortBy: sortBy,
  });

  return (
    <Fragment>
      <MetaData title="vitXchange-Products" />

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : error ? (
        <div>
          <h1 style={{ fontSize: "3vmax", color: "gray" }}>{error.message}</h1>
        </div>
      ) : (
        <Fragment>
          <button className="sort-btn" onClick={toggleSort}>
            Sort By {sortBy === "time" ? "Time" : "Price"}{" "}
            {sortBy !== "time" ? (sortBy === "asc" ? "↑" : "↓") : null}
          </button>

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
                />
              ))
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
