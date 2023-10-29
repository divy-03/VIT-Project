import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { useUpdateProductMutation } from "../../../Product/productApi";

const ProductCard = (props) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { name, desc, fixedPrice, id, img, priceType, wishListed } = props;
  const [isWishListed, setIsWishListed] = useState(wishListed);

  const handleWishList = async (e) => {
    e.preventDefault();
    console.log(isWishListed);

    setIsWishListed(!isWishListed);
    console.log(!isWishListed);

    try {
      const response = await updateProduct({
        id,
        product: {
          wishListed: !isWishListed,
        },
      });

      if (response.error) {
        toast.error(response.error.data.error);
      } else {
        if (response.data.success) {
          // toast.success("Item wishlisted");
          if (wishListed === false) {
            toast.success(`Item added to Wishlist`);
          } else {
            toast.success(`Item removed from Wishlist`);
          }
          setTimeout(() => {
            window.location.reload();
          }, 1000); // 1000 milliseconds = 2 seconds
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  let slicedDesc = desc;

  if (desc && desc.length > 25) {
    slicedDesc = desc.slice(0, 25) + "...";
  }

  if (isLoading) {
    return (
      <Fragment>
        <Loader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="proCardContainer">
        <img src={img} alt="HeroImg" />
        <button onClick={handleWishList}>
          <i
            className="fa fa-solid fa-heart"
            style={{ color: wishListed ? "red" : "gray" }}
          ></i>
        </button>

        <Link to={`/product/${id}`} className="details">
          <h2 className="name">{name}</h2>
          <p>{slicedDesc}</p>
          <span>Price:</span>
          <span style={{ color: "grey" }}>{priceType}</span>
          <p className="price">₹{fixedPrice}</p>
        </Link>
      </div>
    </Fragment>
  );
};

export default ProductCard;
