import { Fragment } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components imports
import Home from "./component/Home/Home";
import Header from "./component/layout/Header/Header.js"

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
