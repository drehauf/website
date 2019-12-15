import React, { useState, useEffect } from 'react';
import InventoryData from 'assets/data/inventory.csv';
import InventoryItem from 'components/web/inventory/InventoryItem.js';
import CSVParser from 'components/web/utils/CSVParser.js';
import { ShoppingCartContext } from 'components/Datamanagement/ShoppingCart'; 

const Inventory = (props) => {

  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    CSVParser.get(InventoryData, (data) => {
      setInventory(data);
    })
  }, []);

  const table = (tableData) => {
    return tableData.map((row, index) => (
      <tr key={index} className="table_row">
        <ShoppingCartContext.Consumer>
          {value => (
            <InventoryItem rowData={row} onItemChange={value.onItemChange} />
          )}
        </ShoppingCartContext.Consumer>
      </tr>
    ));
  };

  return(
    <div className='table_wrapper'>
      <table className='table'>
        <thead className="table_head">
          <tr>
            <th colSpan='2'>Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>
          {
            inventory ? table(inventory) : null
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'>
              Hallo ich rieche nach Käse
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );

}

export default Inventory;