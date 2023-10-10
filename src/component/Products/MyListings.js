import React, { Fragment } from "react";
import MetaData from "../layout/Title/MetaData";
import Loader from "../layout/Loader/Loader";
import ListingCard from "../layout/Cards/ListingCard.js"
import { useGetMyListingsQuery } from "../../Product/productApi";
// import { toast } from "react-toastify";

const MyListings = () => {
  // User hardcoded because of cookie error
  const user = "651cfbf74b5b4f9e8ff285e0";

  const { data, error, isLoading } = useGetMyListingsQuery(user);
  //   toast.error(error.data.error);
  console.log(error);

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
      <MetaData title={"My Listings"} />
      <div className="containerProduct">
        {data.products.length === 0 ? (
          <div>
            <h1> Oops! No Product Found</h1>
          </div>
        ) : (
          data.products.map((pro) => (
            <ListingCard
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
  );
};

export default MyListings;
