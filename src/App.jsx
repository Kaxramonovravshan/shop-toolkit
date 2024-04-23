import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Cart from "./Pages/Cart";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        test
      </button>
      <div className="navbar bg-dark p-4  text-white">
        <Link className="text-2xl" to={"/"}>
          Logo
        </Link>

        <div className="flex gap-3">
          <Link className="btn btn-primary" to={"/admin"}>
            Admin
          </Link>
          <Link to={"/cart"} className="btn btn-primary">
            Cart
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default connect((state) => ({ ...state }))(App);
