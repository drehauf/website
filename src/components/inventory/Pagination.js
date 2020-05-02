import React from 'react';

const Pagination = ({ previous, current, next, handlePreviousPage, handleNextPage }) => {

  const handlePageChange = (direction) => {
    if (direction) {
      handleNextPage()
    } else {
      handlePreviousPage()
    }
    console.log(direction ? 'right' : 'left');
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
            <span>{previous}</span>
            <span className='pagination_arrow pagination_arrow-left'></span>
          </div>
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
            <span>{next}</span>
            <span className='pagination_arrow pagination_arrow-right'></span>
          </div>
        </li>
      </ul>
    </div>
  );

}

export default Pagination;