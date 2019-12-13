import React, { Fragment } from 'react';

const InventoryItem = ({ rowData }) => {

  const { name, quantity } = rowData;

  const selectOptions = (quantity) => {
    let options = []
    for (let value = 1; value <= quantity; value++) {
      options.push(
        <option key={value}>{value}</option>
      );
    }
    return options;
  }

  return(
    <Fragment>
      <td>
        <input type='checkbox'/>
      </td>
      <td>
        {name}
      </td>
      <td>
        <select disabled>
          {selectOptions(quantity)}
        </select>
      </td>
    </Fragment>
  );

}

export default InventoryItem;