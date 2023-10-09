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
  const [prodPreview, setProdPreview] = useState(
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
  );
  const [prodImage, setProdImage] = useState("");
  const [product, setProduct] = useState({
    name: "",
    description:"",
    priceType: "",
    category: "",
    fixedPrice: "",
  })

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const registerDataChange = (e) => {
    if (e.target.name === "prodImage") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setProdPreview(reader.result);
          setProdImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleCreateProduct = async (e) => {
    const {name, description, category, priceType, fixedPrice} = product;

    e.preventDefault();

    const result = await createProduct({
      name,
      description,
      category,
      priceType,
      fixedPrice,
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
          <form
            className="sellForm"
            onSubmit={handleCreateProduct}
            encType="multipart/form-data"
          >
            <div id="prodImage">
              <img src={prodPreview} alt="Product Preview" />
              <input
                type="file"
                name="prodImage"
                accept="image/jpeg, image/png, image/gif"
                onChange={registerDataChange}
              />
            </div>
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
