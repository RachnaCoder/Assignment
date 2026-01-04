
import { useState } from 'react';

export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() { setCurrentPage((page) => Math.min(page + 1, maxPage)); }
  function prev() { setCurrentPage((page) => Math.max(page - 1, 1)); }

  return { next, prev, currentData, currentPage, maxPage };
}