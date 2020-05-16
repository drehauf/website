import React, { Fragment, useRef } from 'react';
import Dropdown from 'components/inventory/Dropdown';

const TableRow = ({ data, onItemChange }) => {

  const name = data.name;
  const quantity = data.quantity;

  const checked = useRef(data.isChecked);

  const quantityHandler = quantity => {
    const isChecked = checked.current;
    onItemChange({ name, quantity, isChecked });
  };

  const onClickHandler = () => {
    checked.current = !checked.current
    const isChecked = checked.current;
    onItemChange({ name, quantity, isChecked });
  }

  return (
    <Fragment>
      <td className="table_column table_column_checkbox">
        <input
          type="checkbox"
          checked={checked.current}
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
          isDisabled={!checked.current}
        />
      </td>
    </Fragment>
  );
};

export default TableRow;