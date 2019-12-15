import React, { useState } from 'react';
import Button from 'components/essentials/Button';

const Pagination = ({ previous, current, next, previousPage, nextPage }) => {

  const handlePageChange = (direction) => {
    if (direction) {
      nextPage()
    } else {
      previousPage()
    }
  };

  return(
    <div className='pagination'>
      <ul>
        <li>
          <div
            className='button'
            role='button'
            onClick={
              () => handlePageChange(false)
            }
          >
            {previous}
          </div>
          <span className='pagination_arrow pagination_arrow-left'></span>
        </li>
        <li>
          <p>{current}</p>
        </li>
        <li>
          <div
            className='button'
            role='button'
            onClick={
              () => handlePageChange(true)
            }
          >
            {next}
          </div>
          <span className='pagination_arrow pagination_arrow-right'></span>
        </li>
      </ul>
    </div>
  );

}

export default Pagination;