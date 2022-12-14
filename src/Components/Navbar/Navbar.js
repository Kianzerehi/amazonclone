import React, { useState } from "react";
import "../../amazon-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "../Search-Bar/Searchbar";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img
          className="amazon-logo hovers"
          src={require("../../amazon-logo.png")}
        />
      </Link>

      <SearchBar />
      <Link to="signin">
        <div className="nav-right hovers">
          <span className="nav-top">Hello, sign in </span>
          <span className="nav-bottom">Account & Lists</span>
        </div>
      </Link>
      <Link to="returns">
        <div className="nav-right hovers">
          <span className="nav-top">Returns</span>
          <span className="nav-bottom">& Orders</span>
        </div>
      </Link>
      <div className="hovers">
        <Link to="/checkout">
          <ShoppingCartIcon className="shopping-icon" />

          <div className="item-quantity white">(0)</div>
        </Link>
      </div>
    </div>
  );
}
