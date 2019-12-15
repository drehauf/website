import React, { Component, useState, useEffect, Suspense } from 'react';
import InventoryItem from 'components/web/inventory/InventoryItem.js';
import CSVParser from 'components/web/utils/CSVParser.js';
import { ShoppingCartContext } from 'components/Datamanagement/ShoppingCart'; 
import Pagination from 'components/essentials/Pagination';

import InventoryData2 from 'assets/data/Inventur190827/data2.csv';
import InventoryData3 from 'assets/data/Inventur190827/data3.csv';
import InventoryData4 from 'assets/data/Inventur190827/data4.csv';
import InventoryData5 from 'assets/data/Inventur190827/data5.csv';
import InventoryData6 from 'assets/data/Inventur190827/data6.csv';

const Inventory = (props) => {

  const data = [
    InventoryData2, InventoryData3, InventoryData4, InventoryData5, InventoryData6
  ];

  const [ pages, setPages ] = useState([]);
  const [ didLoad, setDidLoad ] = useState(false);

  useEffect(() => {
    data.forEach((file) => {
      CSVParser.get(file, (data) => {
        setPages((prev) => [...prev, data]);
      });
    });
  }, []);

  useEffect(() => {
    if (pages.length === data.length) {
      setDidLoad(true);
    }
    console.log('pagesDidLoad');
  }, [pages]);

  useEffect(() => {
    console.log(didLoad);
  }, [didLoad])

  const createBody = (tableData) => {
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

  const handlePreviousPage = () => {
    console.log('previous');
  };

  const handleNextPage = () => {
    console.log('next');
  };

  const table = () => (
    <div className='table_wrapper'>
      <table className='table'>
        <thead className="table_head">
          <tr>
            <th colSpan='2'>Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>
          {createBody(pages[0].data)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'>
              <Pagination
                previous={pages[1].title}
                current={pages[0].title}
                next={pages[4].title}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );

  return didLoad ? table : null;

}

export default Inventory;