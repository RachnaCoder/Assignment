import React from "react";
import "./CardView.css";

const CardView = ({ products }) => {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="card-header">
            <h3 className="product-title">{product.name}</h3>
            <span className="category-tag">{product.category}</span>
          </div>

          <div className="card-body">
            <p className="price">₹ {product.price}</p>
            <p className="description">{product.description}</p>
          </div>

          <div className="card-footer">
            <span className="stock-count">Stock: {product.stock}</span>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
