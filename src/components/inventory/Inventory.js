import React from 'react';
import TableBody from 'components/inventory/TableBody';
import Table from 'components/inventory/Table';

const Inventory = ({ pages }) => {

  const loading = <p>Daten werden geladen</p>;

  const table = () => {
    return (
      <Table data={pages}>
        <TableBody tableData={pages[0].data}/>
      </Table>
    )
  }

  return pages ? <Table data={pages} /> : loading;
}

export default Inventory;