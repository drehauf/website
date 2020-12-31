import React, { FC as Component, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import packages from '../../data/packages.data';
import Package from '../../models/inventory-package.model';
import InventoryItem from '../../models/inventory-item.model';

interface Props {
  tableHasSelectedItems: boolean;
  selectPackageItems: (items: InventoryItem[]) => void;
  items: InventoryItem[];
}

const Packages: Component<Props> = ({
  tableHasSelectedItems, selectPackageItems, items,
}: Props) => {
  const [activePackage, setActivePackage] = useState<Package | null>(null);

  useEffect(() => {
    if (!tableHasSelectedItems) {
      setActivePackage(null);
    }
  }, [tableHasSelectedItems]);

  const onClick = (packageId: number) => {
    if (tableHasSelectedItems) {
      // eslint-disable-next-line no-alert
      if (!window.confirm('Die aktuellen Auswahl wird entfernt. Fortfahren?')) {
        return;
      }
    }
    setActivePackage(packages[packageId]);
  };

  useEffect(() => {
    if (activePackage) {
      selectPackageItems(activePackage.items);
    }
  }, [activePackage]);

  const content = packages.map(({
    id, name, description, details,
  }: Package) => (
    <div
      className="packages_item"
      key={nanoid()}
    >
      <input
        type="radio"
        className="packages_item_checkbox"
        id={String(id)}
        defaultChecked={
          activePackage ? (activePackage.id === id) : false
        }
      />
      <label
        className="packages_item_label"
        htmlFor={String(id)}
        onClick={() => onClick(id)}
      >
        <p className="packages_item_name">{name}</p>
        <div className="packages_item_text">
          <p className="packages_item_description">{description}</p>
          <p className="packages_item_details">{details}</p>
        </div>
      </label>
    </div>
  ));

  // only render packages when `Table` is rendered
  return (
    <>
      {items ? content : null}
    </>
  );
};

export default Packages;
