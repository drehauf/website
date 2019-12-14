import React, { Fragment, useState, useEffect } from 'react';
import Dropdown from 'components/essentials/Dropdown';


const InventoryItem = (props) => {

  const rowData = props.rowData;
  const [ didMount, setDidMount ] = useState(false)
  const [ name, setName ] = useState(rowData.name);
  const [ quantity, setQuantitiy ] = useState(1);
  const [ isChecked, setChecked ] = useState(false);

  const selectOptions = (quantity) => {
    let options = []
    for (let value = 1; value <= quantity; value++) {
      options.push(
        <option key={value}>{value}</option>
      );
    }
    return options;
  }

const quantityHandler = (quantity) => {
  setQuantitiy(quantity);
};

const checkedHandler = (name, quantity = 1) => {
  setChecked(!isChecked);
};

useEffect(() => {
  if (didMount) {
    props.onItemChange({ name, quantity, isChecked });
  } else setDidMount(true);
}, [name, quantity, isChecked]);

  return(
    <Fragment>
      <td className="table_column table_column_checkbox">
        <input
          type='checkbox'
          onChange={
            () => checkedHandler(rowData.name, quantity)
          }
        />
      </td>
      <td className="table_column table_column_name">
        {rowData.name}
      </td>
      <td className="table_column table_column_quantity">
        <Dropdown
          options={rowData.quantity}
          returnFunction={quantityHandler}
          disabled={!isChecked}
        />
      </td>
    </Fragment>
  );

}

export default InventoryItem;