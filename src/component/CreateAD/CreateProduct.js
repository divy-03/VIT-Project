import React, { Fragment, useState } from "react";
import MetaData from "../layout/Title/MetaData";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../Product/productApi";
import "./createProduct.css";
import Loader from "../layout/Loader/Loader";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [priceType, setPriceType] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    fixedPrice: "",
  });

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const { name, description, category, fixedPrice } = product;

  const registerProduct = (e) => {
    if (e.target.name === "image") {
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await createProduct({
        name,
        description,
        category,
        priceType,
        fixedPrice,
        image1: {
          public_id: "This is sample image",
          url: "this is url",
        },
        // wishListed: true,
        images: [
          {
            public_id: "This is sample image",
            url: "https://www.brisbaneproductphotography.com.au/wp-content/uploads/2016/01/Black-Background-Product-Photography-18.jpg",
          },
          {
            public_id: "This is sample image",
            url: "https://img.freepik.com/free-photo/front-view-yellow-fragrance-bottle-with-golden-cap-white-wall_140725-11697.jpg",
          },
        ],
        user: "651cfbf74b5b4f9e8ff285e0",
        // images: [
        //   {
        //     public_id: "Bicycle",
        //     url: "https://img.ridewill.it/public/imgprod2021/big/fmoser-e-road-28-22v-250250wh-fsa-hm1-argento-nero-2022-b22mos-r3sa01-2-29d121.webp",
        //   },
        //   {
        //     public_id: "Bicycle",
        //     url: "https://img.ridewill.it/public/imgprod2021/big/fmoser-e-road-28-22v-250250wh-fsa-hm1-argento-nero-2022-b22mos-r3sa01-3-29d122.webp",
        //   },
        //   {
        //     public_id: "Bicycle",
        //     url: "https://img.ridewill.it/public/imgprod2021/big/fmoser-e-road-28-22v-250250wh-fsa-hm1-argento-nero-2022-b22mos-r3sa01-1-29d120.jpg",
        //   },
        // ],
        // images: [
        //   {
        //     public_id: "phone",
        //     url: "https://powermaccenter.com/cdn/shop/files/iPhone_13_Midnight_PDP_Image_Position-1A__en-US_823x.jpg?v=1692028841",
        //   },
        // ],
      });

      if (response.error) {
        toast.error(response.error.data.error);
      } else {
        if (response.data.success) {
          toast.success("Product created Successfully");
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
          <form className="sellForm" onSubmit={handleCreateProduct}>
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

export default CreateProduct;
