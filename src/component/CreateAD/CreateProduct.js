import React, { Fragment, useState } from "react";
import MetaData from "../layout/Title/MetaData";
import { useCreateProductMutation } from "../../Product/productApi";
import "./createProduct.css";

const CreateProduct = () => {
  const [prodName, setProdName] = useState("");
  const [prodCat, setProdCat] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [priceType, setPriceType] = useState("");
  const [prodPrice, setProdPrice] = useState("");

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    console.log("Product created");
    console.log(prodName, prodCat, prodDesc, priceType, prodPrice);

    const result = await createProduct({
      name: prodName,
      description: prodDesc,
      category: prodCat,
      priceType: priceType,
      fixedPrice: prodPrice,
      id: "65201920871221b021b5f456",
      images: [
        {
          public_id: "This is sample image",
          url: "https://picsum.photos/250/250",
        },
        {
          public_id: "This is sample image",
          url: "https://picsum.photos/250/249",
        },
      ],
    });

    console.log(result.data);
  };

  return (
    <Fragment>
      <MetaData title={"Create Ad-Sell your products online"} />
      <div className="sellBody flex-col">
        <p className="sellHead">SELL YOUR PRODUCTS ONLINE</p>
        {/* <p className="bgSellTxt">Sell Rent Exchange Buy</p> */}
        <div className="sellBox">
          <form className="sellForm" onSubmit={handleCreateProduct}>
            <div className="prodName">
              <p className="label">Name</p>
              <input
                type="text"
                placeholder="Product Name"
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
              />
            </div>
            <div className="prodCat">
              <p className="label">Category</p>
              <input
                type="text"
                placeholder="Product Category"
                value={prodCat}
                onChange={(e) => setProdCat(e.target.value)}
              />
            </div>
            <div className="prodDesc">
              <p className="label">Description</p>
              <input
                type="text"
                placeholder="Product Description"
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
              />
            </div>
            <div className="prodPriceType">
              <p className="label">PriceType</p>
              <input
                type="radio"
                value={"fixed"}
                checked={priceType === "fixed"}
                onChange={(e) => setPriceType("fixed")}
              />
              <input
                type="radio"
                value={"negotiable"}
                checked={priceType === "negotiable"}
                onChange={(e) => setPriceType("negotiable")}
              />
            </div>
            <div className="prodPrice">
              <p className="label">
                <input
                  type="text"
                  value={prodPrice}
                  placeholder="Product Price"
                  onChange={(e) => setProdPrice(e.target.value)}
                />
              </p>
            </div>
            <input
              type="submit"
              value={"Create Ad"}
              className="adBtn"
              disabled={isLoading ? true : false}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateProduct;
