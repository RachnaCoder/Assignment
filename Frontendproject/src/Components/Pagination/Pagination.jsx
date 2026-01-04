import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, maxPage, onNext, onPrev }) => {
  return (
    <div className="pagination-container">
      <button 
        className="pagination-btn"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      <span className="pagination-info">
        Page <strong>{currentPage}</strong> of <strong>{maxPage}</strong>
      </span>

      <button 
        className="pagination-btn primary"
        onClick={onNext}
        disabled={currentPage === maxPage}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
