
import React from 'react';
import { useProducts } from '../../Context/ProductContext';
import { useDebounce } from '../../hooks/useDebounce';
import { usePagination } from '../../hooks/usePagination';
import ListView from './ListView';
import CardView from './CardView';
import Pagination from '../Pagination/Pagination';

const ProductList = () => {
  const { products, searchTerm, viewMode } = useProducts();
  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const { next, prev, currentData, currentPage, maxPage } = usePagination(filteredProducts, 6);

  return (
    <div className="product-list-container">
      {viewMode === 'grid' ? (
        <CardView products={currentData()} />
      ) : (
        <ListView products={currentData()} />
      )}
      
      <Pagination 
        currentPage={currentPage} 
        maxPage={maxPage} 
        onNext={next} 
        onPrev={prev} 
      />
    </div>
  );
};

export default ProductList;