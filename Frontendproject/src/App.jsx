import React, { useState } from 'react';
import { ProductProvider } from './Context/ProductContext';
import Header from './Components/Layout/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import ViewToggle from './Components/ProductList/ViewToggle';
import ProductList from './Components/ProductList/ProductList';
import ProductForm from './Components/ProductForm/ProductForm'; 
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProductProvider>
      <div className="app-container">
        {/* Pass the opener function to Header so the "Add" button works */}
        <Header onAddClick={() => setIsModalOpen(true)} />
        
        <main className="content">
          <div className="toolbar">
            <SearchBar />
            <div className="actions">
              <ViewToggle />
              
            </div>
          </div>

          <ProductList />
        </main>

        {/* The Form is rendered conditionally as a Modal */}
        {isModalOpen && (
          <ProductForm onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </ProductProvider>
  );
}

export default App;