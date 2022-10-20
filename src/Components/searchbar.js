import React from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar(){
    return(
        <div className="search-section">
            
            <div >
                <input className="search-bar" type='search' />
            </div>
               
               
               
        <button className="search-icon"> <SearchIcon /> </button>
               
           
            
            
            <div className="search-results"></div>



        </div>
    )
}