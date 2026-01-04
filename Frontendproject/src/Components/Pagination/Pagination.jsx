
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, maxPage, onNext, onPrev }) => {
  if (maxPage <= 1) return null; 

  return (
    <div className="pagination-container">
      <button 
        onClick={onPrev} 
        disabled={currentPage === 1}
        className="pag-btn"
      >
        Previous
      </button>
      
      <span className="page-info">
        Page <strong>{currentPage}</strong> of {maxPage}
      </span>

      <button 
        onClick={onNext} 
        disabled={currentPage === maxPage}
        className="pag-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;