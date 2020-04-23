import React from 'react';
import Pagination from "components/inventory/Pagination";


const Table = ({ children, showPegination = false, data }) => {
  const handlePreviousPage = () => {
    console.log("previous");
  };

  const handleNextPage = () => {
    console.log("next");
  };

  const pegination = () => {
    return (
      <Pagination
        previous={data[1].title}
        current={data[0].title}
        next={data[4].title}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    );
  };

  const renderPegination = showPegination ? pegination() : null;

  return (
    <div className="table_wrapper">
      <table className="table">
        <thead className="table_head">
          <tr>
            <th colSpan="2">Bezeichnung</th>
            <th>Anzahl</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        <tfoot>
          <tr>
            <td colSpan="3">{renderPegination}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;