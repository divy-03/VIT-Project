import React, { Fragment, useState } from "react";
// import React, { Fragment } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useGetMeQuery, useLogoutUserMutation } from "../../../User/userApi";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();
  // const [display, setDisplay] = useState("none");
  // const [catHeight, setCatHeight] = useState(0);
  // const [catOpacity, setCatOpacity] = useState(0);
  const toggleCat = () => {
    // if (visibility === "show") {
    // //   setVisibility("hidden");
    // //   setCatHeight("calc(100vh - 55px)");
    // //   setCatOpacity("1");
    // //   setDisplay("block");
    // // } else {
    // //   setDisplay("none");
    // //   setVisibility("show");
    // //   setCatHeight("0");
    // //   setCatOpacity("0");
    // // }
  };

  // const [data] = useGetMeQuery();
  useGetMeQuery();

  const toggleSearch = () => {
    if (visibility === "hidden") {
      setVisibility("show");
    } else {
      setVisibility("hidden");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products?keyword=${keyword}`);
    } else {
      navigate(`/products`);
    }
  };

  const handleLogOut = async () => {
    try {
      const response = await logoutUser({});

      console.log("Password reset request successful:", response);

      if (response.error) {
        toast.error(response.error.data.error);
      } else {
        if (response.data.success) {
          toast.success(response.data.message);
        }
      }
    } catch (error) {
      // Handle any errors (e.g., display an error message)
      toast.error(error);
    }
  };
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navLeft">
          {/* <img src="/logoX.png" alt="X" /> */}
          <Link to="/" className="logo">
            <span className="V">VIT</span>
            <span className="X">rade</span>
          </Link>
          <Link to="/" className="logoTxt">
            VIT
          </Link>
          {/* <Link to="/" className="X">
            X
          </Link> */}
          <Link to="/" className="logoTxt">
            rade
          </Link>
        </div>
        <div className="navCenter">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <button onClick={toggleCat} className="toggleCat">
                Categories
              </button>
              {/* <div
                className={`cat-sec`}
                style={{ height: `${catHeight}`, opacity: `${catOpacity}` }}
              >
                <h1 className="catHead">Browse through different Categories</h1>
                <ul className="catList">
                  <li>
                    <div>
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    Mobile
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i className="fa-solid fa-laptop"></i>
                    </div>
                    Laptop
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i className="fa-solid fa-headphones"></i>
                    </div>
                    Music
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i className="fa-solid fa-book"></i>
                    </div>
                    Books
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i className="fa-solid fa-suitcase-rolling"></i>
                    </div>
                    Luggage
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i className="fa-solid fa-bicycle"></i>
                    </div>
                    Bicycle
                  </li>
                  <div className="subCat">
                    <ul>
                      <li>
                        <Link to="/cat1">iPhones</Link>
                      </li>
                      <li>
                        <Link to="/cat2">Androids</Link>
                      </li>
                      <li>
                        <Link to="/cat3">Nothing</Link>
                      </li>
                    </ul>
                  </div>
                  <button
                    className="closeCat"
                    onClick={toggleCat}
                    style={{ display: `${display}` }}
                  >
                    X
                  </button>
                </ul>
              </div> */}
            </li>
            <li>
              <Link to="/account">
                <i className="fa fa-solid fa-user"></i>
              </Link>
            </li>
            <li>
              <div className="searchContainer flex-row">
                <button className="searchBtn" onClick={toggleSearch}>
                  <i className="fa fa-solid fa-magnifying-glass"></i>
                </button>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    className={`searchBar-${visibility}`}
                    placeholder="Search Here..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <input
                    // className="search-btn"
                    type="submit"
                    value={"Search"}
                    className={`searchBar-${visibility}`}
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <Link to={"/my/wishlist"}>
            <i
              className="fa fa-solid fa-heart"
              style={{ fontSize: "20px", margin: "0 20px" }}
            ></i>{" "}
          </Link>
          <Link to="/product/new" className="button-87">
            Sell
          </Link>
          {/* <button onClick={handleProfile}>Profile</button> */}
          <button className="button-86" onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
