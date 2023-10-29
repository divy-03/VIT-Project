import React, { Fragment } from "react";
import "./Home.css";
import HeadBanner from "../layout/Header/HeadBanner";
import Footer from "../layout/Footer/Footer";
import Carousel from "./carousel/Carousel";
import CategoryCard from "./CategoryCard/CategoryCard";
import BannerCard from "./BannerCard/BannerCard.js"

const Home = () => {
  return (
    <Fragment>
      <HeadBanner />
      <div className="mbt-2">
        <Carousel />
      </div>
      <div className="Landing-main">
        <pre> Hello </pre>
        <p className="XL">X</p>
        <pre>changers</pre>
      </div>
      <div className="containerBan">
        <BannerCard head="Kitchen" desc="149/-" />
        <BannerCard head="RC Cars" desc="349/-" />
        <BannerCard head="Stationaries" desc="49/-" />
        <BannerCard head="Shoes" desc="449/-" />
      </div>
      <h1
        style={{
          margin: "20px",
          marginBottom: "0",
          textAlign: "start",
          fontSize: "26px",
        }}
      >
        Categories
      </h1>

      <div className="containerBan" id="category">
        <CategoryCard
          catName="Hand Bag"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"
          url="/handbag"
        />
        <CategoryCard
          catName="Furniture"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
          url="/furniture"
        />
        <CategoryCard
          catName="Books"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"
          url="/books"
        />
        <CategoryCard
          catName="Tech"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"
          url="/tech"
        />
        <CategoryCard
          catName="Sneakers"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"
          url="/sneakers"
        />
        <CategoryCard
          catName="Travel"
          catIMG="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"
          url="/travel"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
