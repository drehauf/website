import React, { Fragment, useState, useEffect } from 'react';
import Dropdown from 'components/essentials/Dropdown';

const InventoryItem = ({ rowData, onItemChange }) => {

  const name = rowData.name;
  
  const [didMount, setDidMount] = useState(false);
  const [quantity, setQuantitiy] = useState(rowData.quantity);
  const [isChecked, setChecked] = useState(rowData.isChecked);

  const quantityHandler = quantity => {
    setQuantitiy(quantity);
  };

  const checkedHandler = () => {
    setChecked(prev => !prev.isChecked);
  };

  useEffect(() => {
    if (didMount) {
      onItemChange({ name, quantity, isChecked });
    } else setDidMount(true);
  }, [quantity, isChecked]);

  return (
    <Fragment>
      <td className="table_column table_column_checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => checkedHandler()}
        />
      </td>
      <td
        className="table_column table_column_name"
        onClick={() => setChecked(!isChecked)}
      >
        {name}
      </td>
      <td className="table_column table_column_quantity">
        <Dropdown
          maxQuantity={rowData.maxQuantity}
          quantity={quantity}
          returnFunction={quantityHandler}
          isDisabled={!isChecked}
        />
      </td>
    </Fragment>
  );
};

export default InventoryItem;