import React from 'react';
import InventoryBody from 'components/web/inventory/InventoryBody';
import Table from 'components/web/inventory/Table';

const Inventory = ({ pages }) => {
  
  const loading = <p>Daten werden geladen</p>;
  
  const table = () => {
    return (
      <Table showPegination={true} data={pages}>
        <InventoryBody tableData={pages[0].data}/>
      </Table>
    )
  }

  return pages ? table() : loading;
}

export default Inventory;