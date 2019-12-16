import React, { Fragment, useState } from 'react';
import InventoryWrapper from 'components/web/inventory/InventoryWrapper';
import ToggleButton from 'components/web/inventory/toggleButton';
import { ShoppingCartContext } from "components/Datamanagement/ShoppingCart";

const TableContainer = ({ isCartSet }) => {

  const [showSelected, setShowSelected] = useState(false);
  const onClickHandler = () => setShowSelected(!showSelected);

  const toggleButton = isCartSet ? <ToggleButton show={showSelected} toggleFunction={onClickHandler}/> : null

  return (
    <Fragment>
      <InventoryWrapper />
      {toggleButton}
    </Fragment>
  );
};

const TableWrapper = () => {
  return (
    <ShoppingCartContext.Consumer>
      { value => (
        <TableContainer isCartSet={value.isCartSet} />
      )}
    </ShoppingCartContext.Consumer>
  )
}

export default TableWrapper;