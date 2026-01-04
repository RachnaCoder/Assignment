
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Neural Link Processor", price: 2500, category: "Electronics", stock: 12, description: "Advanced AI chip" },
    { id: 2, name: "Bio-Sensor Watch", price: 199, category: "Gadgets", stock: 45, description: "Tracks vitals in real-time" },
    { id: 2, name: "Bio-Sensor Watch", price: 199, category: "Gadgets", stock: 45, description: "Tracks vitals in real-time" },
    { id: 2, name: "Bio-Sensor Watch", price: 199, category: "Gadgets", stock: 45, description: "Tracks vitals in real-time" },
    { id: 2, name: "Bio-Sensor Watch", price: 199, category: "Gadgets", stock: 45, description: "Tracks vitals in real-time" },

  ]);
  const [viewMode, setViewMode] = useState('grid'); 
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ 
      products, viewMode, setViewMode, 
      searchTerm, setSearchTerm, addProduct, updateProduct, deleteProduct 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);