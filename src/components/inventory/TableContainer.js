import React, { Fragment, useState } from 'react';
import Inventory from 'components/inventory/Inventory';
import ToggleButton from 'components/inventory/ToggleButton';
import { ShoppingCartContext } from "components/shopping/ShoppingCart";
import Table from "components/inventory/Table";
import InventoryBody from "components/inventory/InventoryBody";

const TableContainer = ({ isCartSet, cart, selected }) => {

  const [showSelected, setShowSelected] = useState(false);
  const onClickHandler = () => setShowSelected(!showSelected);

  const table = (data) => {
    return <Table><InventoryBody tableData={data}/></Table>
  }

  const toggleButton = isCartSet ? <ToggleButton show={showSelected} toggleFunction={onClickHandler}/> : null

  return (
    <Fragment>
      {showSelected && isCartSet ? table(selected) : <Inventory pages={cart} /> }
      {toggleButton}
    </Fragment>
  );
};

const TableWrapper = () => {
  return (
    <ShoppingCartContext.Consumer>
      { value => (
        <TableContainer isCartSet={value.isCartSet} cart={value.cart} selected={value.selected} />
      )}
    </ShoppingCartContext.Consumer>
  )
}

export default TableWrapper;