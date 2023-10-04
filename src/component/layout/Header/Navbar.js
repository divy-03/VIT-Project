import React, { Fragment, useState } from "react";
// import React, { Fragment } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
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

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navLeft">
          {/* <img src="/logoX.png" alt="X" /> */}
          <Link  to="/" className="logo">
            <span className="V">V</span>
            <span className="X">X</span>
          </Link>
          <Link to="/" className="logoTxt">VIT</Link>
          <Link to="/" className="X">X</Link>
          <Link to="/" className="logoTxt">change</Link>
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
                <ul class="catList">
                  <li>
                    <div>
                      <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    Mobile
                  </li>
                  <div class="subCat">
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
                      <i class="fa-solid fa-laptop"></i>
                    </div>
                    Laptop
                  </li>
                  <div class="subCat">
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
                      <i class="fa-solid fa-headphones"></i>
                    </div>
                    Music
                  </li>
                  <div class="subCat">
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
                      <i class="fa-solid fa-book"></i>
                    </div>
                    Books
                  </li>
                  <div class="subCat">
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
                      <i class="fa-solid fa-suitcase-rolling"></i>
                    </div>
                    Luggage
                  </li>
                  <div class="subCat">
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
                      <i class="fa-solid fa-bicycle"></i>
                    </div>
                    Bicycle
                  </li>
                  <div class="subCat">
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
              <Link to="/new">What's new</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
                <input
                  type="text"
                  className={`searchBar-${visibility}`}
                  placeholder="Search Here..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  // className="search-btn"
                  onClick={handleSearch}
                  className={`searchBar-${visibility}`}
                >
                  Search
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <Link to="/sell" class="button-86">
            Sell
          </Link>
          <Link to="/rent" class="button-87">
            Rent
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
