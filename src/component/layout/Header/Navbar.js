import React, { Fragment, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visibility, setVisibility] = useState("hidden");
  const toggleCat = () => {
    if (visibility === "show") {
      setVisibility("hidden");
    } else {
      setVisibility("show");
    }
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navLeft">
          {/* <img src="/logoX.png" alt="X" /> */}
          <div className="logo">
            <span className="V">V</span>
            <span className="X">X</span>
          </div>
          <span className="logoTxt">VIT</span>
          <span className="X">X</span>
          <span className="logoTxt">change</span>
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
              <button onClick={toggleCat} className="toggleCat">Categories</button>
              <div className="cat-sec">
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
                        <Link to="cat1">Cat1</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i class="fa-solid fa-laptop"></i>
                    </div>
                    Laptop
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-headphones"></i>
                    </div>
                    Music
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-book"></i>
                    </div>
                    Books
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-suitcase-rolling"></i>
                    </div>
                    Luggage
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-bicycle"></i>
                    </div>
                    Bicycle
                  </li>
                  <div class="subCat">
                    <ul>
                      <li>
                        <Link to="cat1">Cat1</Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </li>
            {/* <li className={`cat-sec`}> */}
              {/* <div>
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
                        <Link to="cat1">Cat1</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <div>
                      <i class="fa-solid fa-laptop"></i>
                    </div>
                    Laptop
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-headphones"></i>
                    </div>
                    Music
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-book"></i>
                    </div>
                    Books
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-suitcase-rolling"></i>
                    </div>
                    Luggage
                  </li>
                  <li>
                    <div>
                      <i class="fa-solid fa-bicycle"></i>
                    </div>
                    Bicycle
                  </li>
                  <div class="subCat">
                    <ul>
                      <li>
                        <Link to="cat1">Cat1</Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div> */}
            {/* </li> */}
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
              <button className="searchBtn">
                <i className="fa fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="navRight">
          <button class="button-86">Sell</button>
          <button class="button-87">Rent</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
