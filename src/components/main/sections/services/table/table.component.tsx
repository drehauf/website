import React, { FC as Component, ReactNode } from 'react';
import TableBody from './table-body.component';
import InventoryItem from '../../../../../models/inventory-item.model';

interface Props {
  data: InventoryItem[];
  pagination?: ReactNode;
}

const Table: Component<Props> = ({ data, pagination }: Props) => (
  <div className="table_wrapper">
    <table className="table">
      <thead className="table_head">
        <tr>
          <th colSpan={2}>Bezeichnung</th>
          <th>Anzahl</th>
        </tr>
      </thead>
      <tbody>
        <TableBody rows={data} />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>
            {pagination}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

Table.defaultProps = {
  pagination: null,
} as Props;

export default Table;
