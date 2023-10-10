import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./ProductCard.css";
import { toast } from "react-toastify";
import "./ListingCard.css";
import { useDeleteProductMutation } from "../../../Product/productApi";

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { name, desc, fixedPrice, id, img } = props;

  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async (id) => {
    const response = await deleteProduct(id);
    console.log(response);

    if (response.error) {
      toast.error(response.error.data.error);
    } else {
      if (response.data.success) {
        toast.success("Product deleted Successfully");
        // TODO : try not to use reload instead call all listings again
        window.location.reload();
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/product/update/${id}`);
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
      <div className="listCardContainer flex-row">
        <img src={img} alt="HeroImg" />
        <div className="listDetails">
          <h2 className="listName">{name}</h2>
          <p>{desc}</p>
        </div>
        <div className="flex-col">
          <h2 className="listName">Price</h2>
          <p className="price">₹{fixedPrice}</p>
        </div>
        <div className="flex-col">
          <Link to={`/product/${id}`} className="listBtn">
            Go to Product
          </Link>
          <button className="listBtn" onClick={handleUpdate}>
            Update Product
          </button>
          <button className="listBtn" onClick={() => handleDelete(id)}>
            Delete Product
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
