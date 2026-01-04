import React from "react";
import { useProducts } from "../../Context/ProductContext";
import "./ViewToggle.css";

const ViewToggle = () => {
  const { viewMode, setViewMode } = useProducts();

  const toggleView = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <div className="view-toggle-wrapper">
      <span className="view-text">
        {viewMode === "grid" ? "Grid View" : "List View"}
      </span>

      <div
        className={`view-toggle ${viewMode === "list" ? "active" : ""}`}
        onClick={toggleView}
        role="button"
        aria-label="Toggle View"
      >
        <div className="toggle-icon grid-icon">
          ▦
        </div>

        <div className="toggle-thumb" />

        <div className="toggle-icon list-icon">
          ☰
        </div>
      </div>
    </div>
  );
};

export default ViewToggle;
