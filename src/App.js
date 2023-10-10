import { Fragment } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components imports
import Home from "./component/Home/Home";
import Sell from "./component/CreateAD/Sell.js";
import Header from "./component/layout/Header/Header.js";
import Products from "./component/Products/Products";
import ProductDetails from "./component/Products/ProductDetails";
import LoginSignUp from "./component/User/LoginSignUp";
import ForgotPassword from "./component/User/ForgotPassword";
// import Footer from "./component/layout/Footer/Footer";
import Loader from "./component/layout/Loader/Loader";
import createProduct from "./component/CreateAD/CreateProduct";
import UpdateProduct from "./component/CreateAD/UpdateProduct.js";
import ProductCreated from "./component/CreateAD/ProductCreated";
import MyListings from "./component/Products/MyListings.js";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/sell" Component={Sell} />
          <Route exact path="/product/new" Component={createProduct} />
          <Route exact path="/products" Component={Products} />
          <Route exact path="/products/search/:keyword" Component={Products} />
          <Route exact path="/product/:id" Component={ProductDetails} />
          <Route exact path="/account" Component={LoginSignUp} />
          <Route exact path="/password/forgot" Component={ForgotPassword} />
          <Route exact path="/loader" Component={Loader} />
          <Route exact path="/product/created" Component={ProductCreated} />
          {/* Hardcoded user otherwise user only /my/listings */}
          <Route exact path="/my/listings/" Component={MyListings} />
          <Route exact path="/product/update/:id" Component={UpdateProduct} />
        </Routes>
        {/* <Footer /> */}
        <div className="toastContainer">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
