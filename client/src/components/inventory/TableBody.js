import React from 'react';
import { useShoppingContext } from 'components/inventory/ShoppingCart';
import TableRow from 'components/inventory/TableRow';

const TableBody = ({ rows }) => {

  const { onItemChange } = useShoppingContext();

  return rows.map((row, index) => (
    <tr key={index} className="table_row">
      <TableRow data={row} onItemChange={onItemChange} />
    </tr>
  ));

}

export default TableBody;