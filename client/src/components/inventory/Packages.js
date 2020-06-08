import React, { useState, useEffect } from 'react';
import packages from 'components/inventory/PackageItems';

const Packages = ({ tableHasSelectedItems, selectPackage }) => {

  const [ activePackage, setActivePackage ] = useState();

  useEffect(() => {
    if (!tableHasSelectedItems) {
      setActivePackage(undefined);
    }
  }, [tableHasSelectedItems]);

  const onClick = (packageId) => {
    if (tableHasSelectedItems) {
      if (!window.confirm('Die aktuellen Auswahl wird entfernt. Fortfahren?')) {
        return;
      }
    }
    setActivePackage(packages[packageId]);
  };

  useEffect(() => {
    if (activePackage) {
      selectPackage(activePackage.items)
    }
  }, [activePackage]);

  return packages.map((item, index) => (
    <div
      className='packages_item'
      key={index}
    >
      <input
        type='radio'
        className='packages_item_checkbox'
        id={item.id}
        defaultChecked={
          activePackage ? (activePackage.id == item.id) : false
        }
      />
      <label 
        className='packages_item_label'
        htmlFor={item.id}
        onClick={() => onClick(item.id)}
      >
        <p className='packages_item_name'>{item.name}</p>
        <div className='packages_item_text'>
          <p className='packages_item_description'>{item.description}</p>
          <p className='packages_item_details'>{item.details}</p>
        </div>
      </label>
    </div>
  ));

};

export default Packages;