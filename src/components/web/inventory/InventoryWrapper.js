import React, { useState, useEffect } from 'react';
import CSVParser from 'components/web/utils/CSVParser.js';
import InventoryBody from 'components/web/inventory/InventoryBody';
import InventoryData from 'components/web/inventory/InventoryData';
import Table from 'components/web/inventory/Table';

const InventoryWrapper = (props) => {
  
  const [ pages, setPages ] = useState([]);
  const [ didLoad, setDidLoad ] = useState(false);

  useEffect(() => {
    fetchTabelData();
  }, []);

  const fetchTabelData = () => {
    InventoryData.forEach((file, index) => {
      CSVParser.get(file, data => {
        setPages(prev => [...prev, data]);
      });
     });
  }

  useEffect(() => {
    if (pages.length === InventoryData.length) {
      setDidLoad(true);
    }
  }, [pages]);

  const table = () => {
    console.log('pages ', pages);
    return (
      <Table showPegination={true} data={pages}>
        <InventoryBody tableData={pages[0].data}/>
      </Table>
    );
  }
  

  return didLoad ? table() : <p>Daten werden geladen...</p>

}

export default InventoryWrapper;