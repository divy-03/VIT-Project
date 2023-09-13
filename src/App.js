import { Fragment } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components imports
import Home from "./component/Home/Home";
import Sell from "./component/CreateAD/Sell.js"
import Header from "./component/layout/Header/Header.js";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/sell" Component={Sell} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
