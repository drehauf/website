import React, { Fragment, useState, useEffect } from 'react';
import TableActions from 'components/inventory/TableActions';
import Table from "components/inventory/Table";
import Pagination from "components/inventory/Pagination";

const TableContainer = ({ isCartSet, items, selected }) => {

  const [pages, setPages] = useState();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (items) {
      setPages({
        previous: items[getIndex(false)].title,
        current: items[pageIndex].title,
        next: items[getIndex(true)].title
      });
    }
  }, [items, pageIndex]);

  const getIndex = (direction) => {
    if (direction) {
      return pageIndex == 0 ? items.length - 1 : pageIndex - 1;
    } else {
      return pageIndex == items.length - 1 ? 0 : pageIndex + 1;
    }
  }

  const handlePageChange = (direction) => {
    setPageIndex(getIndex(direction));
  };

  const [showSelected, setShowSelected] = useState(false);
  const onToggleAction = () => setShowSelected(!showSelected);
  
  const tableActions = () => (isCartSet ? 
    <TableActions
      show={showSelected}
      onClick={onToggleAction}
    /> : null
  );

  const pagination = () => {    
    return (
      <Pagination
        pages={pages}
        handlePageChange={handlePageChange}
      />
    );
  };

  const renderPagination = pages ? pagination() : null;

  const table = () => {    
    if (showSelected && isCartSet) {
      return <Table data={selected} />
    } else if (items) {
      return <Table data={items[pageIndex].data} pagination={renderPagination}/>
    } else {
      return <p>Daten werden geladen...</p>
    }
  }

  return (
    <Fragment>
      {table()}
      {tableActions()}
    </Fragment>
  );

};

export default TableContainer;