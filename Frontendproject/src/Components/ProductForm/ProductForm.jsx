import React, { useState } from "react";
import { useProducts } from "../../Context/ProductContext";
import "./ProductForm.css";

const ProductForm = ({ existingProduct, onClose }) => {
  const { addProduct, updateProduct } = useProducts();

  const [formData, setFormData] = useState(
    existingProduct || {
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    }
  );

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};

    if (!formData.name.trim()) errs.name = "Product name is required";
    if (!formData.price || formData.price <= 0)
      errs.price = "Price must be greater than 0";
    if (!formData.category) errs.category = "Please select a category";
    if (!formData.stock || formData.stock < 0)
      errs.stock = "Stock must be 0 or more";
    if (!formData.description.trim())
      errs.description = "Description is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (existingProduct) {
      updateProduct(existingProduct.id, formData);
    } else {
      addProduct(formData);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>{existingProduct ? "Edit Product" : "Add New Product"}</h2>

        <form onSubmit={handleSubmit} className="product-form">
          {/* Name */}
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter product name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Price */}
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => handleChange("price", e.target.value)}
              placeholder="Enter price"
            />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Electronics">Electronics</option>
              <option value="Home">Home</option>
              <option value="Fashion">Fashion</option>
            </select>
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>

          {/* Stock */}
          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) => handleChange("stock", e.target.value)}
              placeholder="Available stock"
            />
            {errors.stock && <span className="error">{errors.stock}</span>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Product description"
            />
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
