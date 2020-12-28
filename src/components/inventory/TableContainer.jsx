import React, { Fragment, useState, useEffect } from 'react';
import TableActions from './TableActions';
import Table from './Table';
import Pagination from './Pagination';
import { useShoppingContext } from './ShoppingCart';

const TableContainer = ({ isCartSet, items, selected }) => {
  const { uncheckAll } = useShoppingContext();

  const [pages, setPages] = useState();
  const [pageIndex, setPageIndex] = useState(0);

  const getIndex = (direction) => {
    if (direction) {
      return pageIndex === 0 ? items.length - 1 : pageIndex - 1;
    }
    return pageIndex === items.length - 1 ? 0 : pageIndex + 1;
  };

  useEffect(() => {
    if (items) {
      setPages({
        previous: items[getIndex(false)].title,
        current: items[pageIndex].title,
        next: items[getIndex(true)].title,
      });
    }
  }, [items, pageIndex]);

  const handlePageChange = (direction) => {
    setPageIndex(getIndex(direction));
  };

  const [showSelected, setShowSelected] = useState(false);
  const onToggleAction = () => setShowSelected(!showSelected);

  const tableActions = () => (
    isCartSet ? (
      <TableActions
        show={showSelected}
        onClick={onToggleAction}
        onUnselect={uncheckAll}
      />
    ) : null
  );

  const pagination = () => (
    <Pagination
      pages={pages}
      handlePageChange={handlePageChange}
    />
  );

  const renderPagination = pages ? pagination() : null;

  const table = () => {
    if (showSelected && isCartSet) { // TODO: OR nothing checked
      return <Table data={selected} />;
    } if (items) {
      return <Table data={items[pageIndex].data} pagination={renderPagination} />;
    }
    return <p>Daten werden geladen...</p>;
  };

  return (
    <>
      {table()}
      {tableActions()}
    </>
  );
};

export default TableContainer;
