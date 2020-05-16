import React, { useState, useEffect } from 'react';
import Pagination from "components/inventory/Pagination";

const Table = ({ children, data }) => {

  const [pages, setPages] = useState();
  const [pageIndex, setPageIndex] = useState(0);
  
  useEffect(() => {
    if (data) {
      setPages({
        previous: data[getIndex(false)].title,
        current: data[pageIndex].title,
        next: data[getIndex(true)].title
      });
      console.log(pages);
    }
  }, [data, pageIndex]);

  const getIndex = (direction) => {
    if (direction) {
      return pageIndex == 0 ? data.length - 1 : pageIndex - 1;
    } else {
      return pageIndex == data.length - 1 ? 0 : pageIndex + 1;
    }
  }

  const handlePageChange = (direction) => {
    setPageIndex(getIndex(direction));
  };

  const pagination = () => {    
    return (
      <Pagination
        pages={pages}
        handlePageChange={handlePageChange}
      />
    );
  };

  const renderPagination = pages ? pagination() : null;

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead className="table_head">
          <tr>
            <th colSpan="2">Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <tr>
            <td colSpan="3">{renderPagination}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;