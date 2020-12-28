import React from 'react';
import TableBody from './TableBody';

const Table = ({ data, pagination }) => (
  <div className="table_wrapper">
    <table className="table">
      <thead className="table_head">
        <tr>
          <th colSpan="2">Bezeichnung</th>
          <th>Anzahl</th>
        </tr>
      </thead>
      <tbody>
        <TableBody rows={data} />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">
            {pagination}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default Table;
