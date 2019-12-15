import React, { useState, useEffect } from 'react';
import InventoryData from 'assets/data/inventory.csv';
import InventoryItem from 'components/web/inventory/InventoryItem.js';
import CSVParser from 'components/web/utils/CSVParser.js';
import Pagination from 'components/essentials/Pagination';

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
        <InventoryItem
          rowData={row}
          onItemChange={props.onItemChange}
        />
      </tr>
    ));
  };

  const previousPage = () => {
    console.log('previous');
  };

  const nextPage = () => {
    console.log('next');
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
              <Pagination
                previous='MIKROFONE'
                current='Pulte'
                next='LICHTER'
                previousPage={previousPage}
                nextPage={nextPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );

}

export default Inventory;