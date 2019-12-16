import React, { Fragment, useState } from 'react';
import InventoryWrapper from 'components/web/inventory/InventoryWrapper';
import ToggleButton from 'components/web/inventory/toggleButton';
import { ShoppingCartContext } from "components/Datamanagement/ShoppingCart";
import Table from "components/web/inventory/Table";
import InventoryBody from "components/web/inventory/InventoryBody";

const TableContainer = ({ isCartSet, cart }) => {

  const [showSelected, setShowSelected] = useState(false);
  const onClickHandler = () => setShowSelected(!showSelected);

  const table = (data) => {
    console.log('data ', data);
    
    return <Table><InventoryBody tableData={data}/></Table>
  }

  const toggleButton = isCartSet ? <ToggleButton show={showSelected} toggleFunction={onClickHandler}/> : null

  return (
    <Fragment>
      {showSelected ? table(cart) : <InventoryWrapper /> }
      {toggleButton}
    </Fragment>
  );
};

const TableWrapper = () => {
  return (
    <ShoppingCartContext.Consumer>
      { value => (
        <TableContainer isCartSet={value.isCartSet} cart={value.cart} />
      )}
    </ShoppingCartContext.Consumer>
  )
}

export default TableWrapper;