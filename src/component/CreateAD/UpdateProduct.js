import React, { useState, Fragment } from "react";
import MetaData from "../layout/Title/MetaData";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../layout/Loader/Loader";
import { useUpdateProductMutation } from "../../Product/productApi";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [priceType, setPriceType] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    fixedPrice: "",
  });

  const { id } = useParams();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { name, description, category, fixedPrice } = product;

  const registerProduct = (e) => {
    if (e.target.name === "image") {
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await updateProduct({
        id, // Pass the id directly
        product: {
          name,
          description,
          category,
          priceType,
          fixedPrice,
          user: "651cfbf74b5b4f9e8ff285e0",
          images: [
            {
              public_id: "This is a sample image",
              url: "https://picsum.photos/250/250",
            },
            {
              public_id: "This is a sample image",
              url: "https://picsum.photos/250/249",
            },
          ],
        },
      });

      if (response.error) {
        toast.error(response.error.data.error);
      } else {
        if (response.data.success) {
          toast.success("Product updated Successfully");
          navigate("/product/created");
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (isLoading) {
    return (
      <Fragment>
        <Loader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MetaData title={"Create Ad-Sell your products online"} />
      <div className="sellBody flex-col">
        <p className="sellHead">SELL YOUR PRODUCTS ONLINE</p>
        {/* <p className="bgSellTxt">Sell Rent Exchange Buy</p> */}
        <div className="sellBox">
          <form className="sellForm" onSubmit={handleUpdateProduct}>
            <div className="prodName">
              <p className="label">Name</p>
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                name="name"
                onChange={registerProduct}
              />
            </div>
            <div className="prodCat">
              <p className="label">Category</p>
              <input
                type="text"
                placeholder="Product Category"
                value={category}
                name="category"
                onChange={registerProduct}
              />
            </div>
            <div className="prodDesc">
              <p className="label">Description</p>
              <input
                type="text"
                placeholder="Product Description"
                value={description}
                name="description"
                onChange={registerProduct}
              />
            </div>
            <div className="prodPriceType">
              <p className="label">PriceType</p>
              <input
                type="radio"
                value={"fixed"}
                name="priceType"
                checked={priceType === "fixed"}
                onChange={(e) => setPriceType("fixed")}
              />{" "}
              <span>Fixed</span>
              <input
                type="radio"
                value={"negotiable"}
                name="priceType"
                checked={priceType === "negotiable"}
                onChange={(e) => setPriceType("negotiable")}
              />
              <span>Negotiable</span>
            </div>
            <div className="prodPrice">
              <p className="label">Product Price</p>
              <input
                type="number"
                value={fixedPrice}
                name="fixedPrice"
                placeholder="Product Price"
                onChange={registerProduct}
              />
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

export default UpdateProduct;
