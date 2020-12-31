import React, {
  FC as Component, useState, useEffect,
} from 'react';
import TableActions from './table-actions.component';
import Table from './table.component';
import Pagination from './pagination.component';
import InventoryItem from '../../models/inventory-item.model';
import InventoryPage from '../../models/inventory-page.model';
import InventoryPageTitle from '../../models/inventory-page-title.model';

interface Props {
  isCartSet: boolean;
  items: InventoryPage[];
  selected: InventoryItem[];
}

const TableContainer: Component<Props> = ({ isCartSet, items, selected }: Props) => {
  const [pages, setPages] = useState<InventoryPageTitle | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);

  const getIndex = (direction: boolean): number => {
    if (direction) {
      return pageIndex === 0 ? items.length - 1 : pageIndex - 1;
    }
    return pageIndex === items.length - 1 ? 0 : pageIndex + 1;
  };

  useEffect(() => {
    if (items[pageIndex]) {
      setPages({
        previous: items[getIndex(false)].title,
        current: items[pageIndex].title,
        next: items[getIndex(true)].title,
      });
    }
  }, [items, pageIndex]);

  const handlePageChange = (direction: boolean) => {
    setPageIndex(getIndex(direction));
  };

  const [showSelected, setShowSelected] = useState<boolean>(false);
  const onToggleAction = () => setShowSelected(!showSelected);

  const tableActions = () => (
    isCartSet ? (
      <TableActions
        show={showSelected}
        onClick={onToggleAction}
      />
    ) : null
  );

  const pagination = () => <Pagination page={pages} handlePageChange={handlePageChange} />;

  const renderPagination = pages ? pagination() : null;

  const table = () => {
    if (showSelected && isCartSet) { // TODO: OR nothing checked
      return <Table data={selected} />;
    } if (items[pageIndex]) {
      return <Table data={items[pageIndex].data} pagination={renderPagination} />;
    }
    return null;
  };

  return (
    <>
      {table()}
      {tableActions()}
    </>
  );
};

export default TableContainer;
