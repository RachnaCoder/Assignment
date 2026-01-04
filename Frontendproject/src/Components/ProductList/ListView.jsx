import React from "react";
import "./ListView.css";

const ListView = ({ products }) => {
  return (
    <div className="list-view-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="product-name">{product.name}</td>
              <td>
                <span className="category-pill">{product.category}</span>
              </td>
              <td className="price">₹ {product.price}</td>
              <td>
                <span
                  className={`stock-badge ${
                    product.stock < 5 ? "low" : "normal"
                  }`}
                >
                  {product.stock}
                </span>
              </td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
