import React from "react";
import "./Header.css";

const Header = ({ onAddClick }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-circle">PM</div>
        <div>
          <h2 className="title">Product Management System</h2>
          <p className="subtitle">Manage your products efficiently</p>
        </div>
      </div>

      <button className="header-add-btn" onClick={onAddClick}>
        + Add Product
      </button>
    </header>
  );
};

export default Header;
