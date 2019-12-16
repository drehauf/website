import React, { Fragment } from 'react';
import Inventory from 'components/web/inventory/InventoryWrapper';

const TableContainer = () => {
  return(
    <Fragment>
      <Inventory />
      <div className='u-margin-top--large'>
        <a href='/'>AUSWAHL ANZEIGEN</a>
      </div>
    </Fragment>
  );
};

export default TableContainer;