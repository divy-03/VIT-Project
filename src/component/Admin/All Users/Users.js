import React, { Fragment } from "react";
import "./Users.css";
import MetaData from "../../layout/Title/MetaData";
import Loader from "../../layout/Loader/Loader";
import UserCard from "../../layout/Cards/UserCard.js";
import { useGetAllUsersQuery } from "../../../User/userApi";

const Users = () => {
  const { data, error, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <h1 style={{ fontSize: "3vmax", color: "gray" }}>{error.message}</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <MetaData title={"Users"} />

      <div className="containerProduct">
        {data && data.products && data.products.length === 0 ? (
          <div className="flex-row" style={{ height: "90vh" }}>
            <h1 style={{ fontSize: "24px" }}> Oops! No Product Found</h1>
          </div>
        ) : (
          data.products.map((pro) => (
            <UserCard
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

export default Users;
