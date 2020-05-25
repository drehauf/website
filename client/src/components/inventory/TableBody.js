import React from 'react';
import { ShoppingCartContext } from 'components/inventory/ShoppingCart';
import TableRow from 'components/inventory/TableRow';

const TableBody = ({ rows }) => {  

  return rows.map((row, index) => (
    <tr key={index} className="table_row">
      <ShoppingCartContext.Consumer>
        {value => (
          <TableRow data={row} onItemChange={value.onItemChange}/>
        )}
      </ShoppingCartContext.Consumer>
    </tr>
  ));

}

export default TableBody;