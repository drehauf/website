import React from 'react';

const Pagination = ({ pages, handlePageChange }) => {

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
            <span>{pages.previous}</span>
            <span className='pagination_arrow pagination_arrow-left'></span>
          </div>
        </li>
        <li>
          <p>{pages.current}</p>
        </li>
        <li>
          <div
            className='button'
            role='button'
            onClick={
              () => handlePageChange(true)
            }
          >
            <span>{pages.next}</span>
            <span className='pagination_arrow pagination_arrow-right'></span>
          </div>
        </li>
      </ul>
    </div>
  );

}

export default Pagination;