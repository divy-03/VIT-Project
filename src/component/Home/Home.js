import React, { Fragment } from "react";
import "./Home.css";
import HeadBanner from "../layout/Header/HeadBanner";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <HeadBanner />
      <div className="Landing-main">
        <pre> Hello </pre>
        <p className="XL">X</p>
        <pre>changers</pre>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
