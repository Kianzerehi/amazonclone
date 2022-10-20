import React from "react";
import '../amazon-logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from "./searchbar";

export default function NavBar(){
    return(
        <div className="nav-bar">
            <img className="amazon-logo hovers" src={require("../amazon-logo.png")} />
            
        <SearchBar />

        <div className="nav-right hovers">
            <span className="nav-top">Hello, sign in </span>
            <span className="nav-bottom">Account & Lists</span>

        </div>

        <div className="nav-right hovers">
            <span className="nav-top">Returns</span>
            <span className="nav-bottom">& Orders</span>
        </div>

        <div className="hovers">
            <ShoppingCartIcon /> <div>(0)</div>
        </div>
        
       
        </div>
    )
}