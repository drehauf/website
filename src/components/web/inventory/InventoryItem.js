import React, { Fragment } from 'react';
import Dropdown from 'components/essentials/Dropdown';


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

  const setOptions = () => {
    let options = [];
    for (let value = 1; value <= quantity; value++) {
      options.push(
        {value: value, label: value}
      );
    }
    return options;
  }

  return(
    <Fragment>
      <td className="table_column table_column_checkbox">
        <input type='checkbox'/>
      </td>
      <td className="table_column table_column_name">
        {name}
      </td>
      <td className="table_column table_column_quantity">
        <Dropdown options={5}/>
        
        {/* <select disabled>
          {selectOptions(quantity)}
        </select> */}
      </td>
    </Fragment>
  );

}

export default InventoryItem;