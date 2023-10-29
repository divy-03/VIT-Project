import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import MetaData from "../layout/Title/MetaData";
import "./BuyNow.css";

const BuyNow = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <MetaData title={"Buy Item"} />
      <div className="buyCont">
        <h3>Contact Seller</h3>
        <h1>Seller Name</h1>
        <span>Tanmay Verma</span>
        <h2>Hostel</h2>
        <p>Boys Hostel Block 2</p>
        <p>Room No: A402</p>
        <p>Phone No: 9896048684</p>
      </div>
    </Fragment>
  );
};

export default BuyNow;
