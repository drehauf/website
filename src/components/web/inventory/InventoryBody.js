import React from 'react';
import { ShoppingCartContext } from 'components/Datamanagement/ShoppingCart';
import InventoryItem from 'components/web/inventory/InventoryItem';

const Inventory = ({ tableData }) => {

  return tableData.map((row, index) => (
    <tr key={index} className="table_row">
      <ShoppingCartContext.Consumer>
        {value => (
          <InventoryItem rowData={row} onItemChange={value.onItemChange} cart={value.cart} />
        )}
      </ShoppingCartContext.Consumer>
    </tr>
  ));

}

export default Inventory;