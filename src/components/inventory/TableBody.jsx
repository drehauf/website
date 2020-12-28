import React from 'react';
import { nanoid } from 'nanoid';
import { useShoppingContext } from './ShoppingCart';
import TableRow from './TableRow';

const TableBody = ({ rows }) => {
  const { onItemChange } = useShoppingContext();

  return rows.map((row) => (
    <tr key={nanoid()} className="table_row">
      <TableRow data={row} onItemChange={onItemChange} />
    </tr>
  ));
};

export default TableBody;
