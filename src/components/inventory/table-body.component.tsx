import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import { useShoppingCart } from '../../hooks/shoppingcart.hook';
import TableRow from './table-row.component';
import InventoryItem from '../../models/inventory-item.model';

interface Props {
  rows: InventoryItem[];
}

const TableBody: Component<Props> = ({ rows }: Props) => {
  const { onItemChange } = useShoppingCart();
  return (
    <>
      {
        rows.map((row) => (
          <tr key={nanoid()} className="table_row">
            <TableRow data={row} onItemChange={onItemChange} />
          </tr>
        ))
      }
    </>
  );
};

export default TableBody;
