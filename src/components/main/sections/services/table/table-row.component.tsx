import React, { FC as Component } from 'react';
import InventoryItem from '../../../../../models/inventory-item.model';
import Dropdown from '../../../../simple/dropdown.component';

interface Props {
  data: InventoryItem;
  onItemChange: (item: InventoryItem) => void;
}

const TableRow: Component<Props> = ({ data, onItemChange }: Props) => {
  const { name, quantity } = data;
  let { isChecked } = data;

  const quantityHandler = (newQuantity: number) => {
    onItemChange({
      name,
      quantity: newQuantity,
      isChecked,
    });
  };

  const onClickHandler = () => {
    isChecked = !isChecked;
    onItemChange({ name, quantity, isChecked });
  };

  return (
    <>
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
          maxQuantity={data.quantity}
          quantity={quantity}
          returnFunction={quantityHandler}
          isDisabled={!isChecked}
        />
      </td>
    </>
  );
};

export default TableRow;
