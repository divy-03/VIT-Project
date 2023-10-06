import { Fragment } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components imports
import Home from "./component/Home/Home";
import Sell from "./component/CreateAD/Sell.js";
import Header from "./component/layout/Header/Header.js";
import Products from "./component/Products/Products";
import ProductDetails from "./component/Products/ProductDetails";
import LoginSignUp from "./component/User/LoginSignUp";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/sell" Component={Sell} />
          <Route exact path="/products" Component={Products} />
          <Route exact path="/products/search/:keyword" Component={Products} />
          <Route exact path="/product/:id" Component={ProductDetails} />
          <Route exact path="/account" Component={LoginSignUp} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
