import React from "react";
import { useProducts } from "../../Context/ProductContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
