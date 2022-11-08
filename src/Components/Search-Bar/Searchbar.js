import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "../../fakeshop";

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMerch = data.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchField);
  });

  console.log(filteredMerch);

  return (
    <div className="search-section">
      <div>
        <input className="search-bar" type="search" onChange={onSearchChange} />
      </div>
      <button className="search-icon">
        {" "}
        <SearchIcon />{" "}
      </button>
    </div>
  );
}
