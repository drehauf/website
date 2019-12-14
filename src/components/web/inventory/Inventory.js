import React, { useState, useEffect } from 'react';
import InventoryData from 'assets/data/inventory.csv';
import InventoryItem from 'components/web/inventory/InventoryItem.js';
import CSVParser from 'components/web/utils/CSVParser.js';


const Inventory = (props) => {

  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    CSVParser.get(InventoryData, (data) => {
      setInventory(data);
    })
  }, []);

  const table = (tableData) => {
    return tableData.map((row, index) => (
      <tr key={index}>
        <InventoryItem
          rowData={row}
          onItemChange={props.onItemChange}
        />
      </tr>
    ));
  };

  return(
    <table id='inventory'>
      <tbody>
        {
          inventory ? table(inventory) : null
        }
      </tbody>
    </table>
  );

}

export default Inventory;