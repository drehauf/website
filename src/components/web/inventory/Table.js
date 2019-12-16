import React from 'react';

const Table = ({ children, pegination }) => {

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead className="table_head">
          <tr>
            <th colSpan="2">Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              {pegination}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;