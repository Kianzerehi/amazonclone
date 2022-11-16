import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "../../fakeshop";

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const [filteredMerch, setFilteredMerch] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
    const filterMethod = data.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMerch(filterMethod);
  };

  console.log(filteredMerch, "filter");
  console.log(searchField, "search");
  return (
    <div className="search-section">
      <div className="search-bar-and-button">
        <input className="search-bar" type="search" onChange={onSearchChange} />
        <button className="search-icon">
          <SearchIcon />
        </button>
        <div></div>
        <div className="search-group">
          {filteredMerch.slice(0, 5).map((value) => {
            return <p className="search-result">{value.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

/*{filteredMerch.length != 0 && (
        <div className="search-group">
          {filteredMerch.slice(0, 5).map((value) => {
            return <p className="search-result">{value.title} </p>;
          })}
        </div>
      )}*/
