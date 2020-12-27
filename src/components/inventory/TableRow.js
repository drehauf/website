import React, { Fragment } from 'react';
import Dropdown from '../inventory/Dropdown';

const TableRow = ({ data, onItemChange }) => {
  
  const { name, quantity } = data;
  let isChecked = data.isChecked;

  const quantityHandler = quantity => {
    onItemChange({ name, quantity, isChecked });
  };

  const onClickHandler = () => {
    isChecked = !isChecked
    onItemChange({ name, quantity, isChecked });
  }

  return (
    <Fragment>
      <td className="table_column table_column_checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onClickHandler()}
        />
      </td>
      <td
        className="table_column table_column_name"
        onClick={() => onClickHandler()}
      >
        {name}
      </td>
      <td className="table_column table_column_quantity">
        <Dropdown
          maxQuantity={data.maxQuantity}
          quantity={quantity}
          returnFunction={quantityHandler}
          isDisabled={!isChecked}
        />
      </td>
    </Fragment>
  );
};

export default TableRow;