import React from 'react';
import { ShoppingCartContext } from 'components/shopping/ShoppingCart';
import InventoryItem from 'components/inventory/InventoryItem';

const InventoryBody = ({ tableData }) => {

  return tableData.map((row, index) => (
    <tr key={index} className="table_row">
      <ShoppingCartContext.Consumer>
        {value => (
          <InventoryItem rowData={row} onItemChange={value.onItemChange} />
        )}
      </ShoppingCartContext.Consumer>
    </tr>
  ));

}

export default InventoryBody;