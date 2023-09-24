import React, { Fragment } from "react";
import "./Sell.css";

const Sell = () => {
  return (
    <Fragment>
      <div className="sellBody flex-col">
        <p className="sellHead">SELL YOUR PRODUCTS ONLINE</p>
        <p className="bgSellTxt">Sell Rent Exchange Buy</p>
        <div className="logoBig">VIT LOGO</div>
        <div className="sellContainer">
          <form className="flex-col">
            <p>Please select a category</p>
            <select name="" id="">
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Sell;
