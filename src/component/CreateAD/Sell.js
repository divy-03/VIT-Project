import React, { Fragment, useState, useRef } from "react";
import "./Sell.css";
import MetaData from "../layout/Title/MetaData";

const Sell = () => {
  const [sellName, setSellName] = useState("");
  const [sellDesc, setSellDesc] = useState("");
  const [sellStock, setSellStock] = useState("1");
  const [sellPrice, setSellPrice] = useState("");
  const sell1Tab = useRef(null);
  const sell2Tab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab, switcherTabRef) => {
    if (tab === "sell1") {
      switcherTabRef.current.classList.add("shiftToNeutral");
      switcherTabRef.current.classList.remove("shiftToRight");

      sell2Tab.current.classList.remove("shiftToNeutralForm");
      sell1Tab.current.classList.remove("shiftToLeft");
    }
    if (tab === "sell2") {
      switcherTabRef.current.classList.add("shiftToRight");
      switcherTabRef.current.classList.remove("shiftToNeutral");

      sell2Tab.current.classList.add("shiftToNeutralForm");
      sell1Tab.current.classList.add("shiftToLeft");
    }
  };

  const sellSubmit = () => {};
  return (
    <Fragment>
      <MetaData title={"vitXchange-Sell your products online"} />
      <div className="sellBody flex-col">
        <p className="sellHead">SELL YOUR PRODUCTS ONLINE</p>
        <p className="bgSellTxt">Sell Rent Exchange Buy</p>
        <div className="sellBox">
          <div className="sell_toggle">
            <i
              class="fa-solid fa-arrow-left"
              onClick={(e) => switchTabs(e, "sell1", switcherTab)}
            ></i>
            <i
              class="fa-solid fa-arrow-right"
              onClick={(e) => switchTabs(e, "sell2", switcherTab)}
            ></i>
          </div>
          <form className="sell1Form" ref={sell1Tab}>
            <div className="sellName">
              <input
                type="text"
                placeholder="Product Title"
                required
                value={sellName}
                onChange={(e) => setSellName(e.target.value)}
              />
            </div>
            <div className="sellDesc">
              <input
                type="text"
                placeholder="Product Description"
                value={sellDesc}
                autoComplete="current-desc"
                onChange={(e) => setSellDesc(e.target.value)}
              />
            </div>
          </form>
          <form
            className="sell2Form"
            ref={sell2Tab}
            encType="multipart/form-data"
            onSubmit={sellSubmit}
          >
            <div className="sellStock">
              <input
                type="number"
                placeholder="Enter Stock"
                required
                value={sellStock}
                onChange={(e) => setSellStock(e.target.value)}
              />
            </div>
            <div className="sellPrice">
              <input
                type="text"
                placeholder="Enter Price"
                required
                value={sellPrice}
                onChange={(e) => setSellPrice(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value={"Create Ad"}
              className="adBtn"
              // disabled={isLoading ? true : false}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Sell;
