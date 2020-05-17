import React, { useState, useEffect } from 'react';

const Packages = ({ tableHasSelectedItems, selectPackage }) => {

  const packages = [
    {
      name: 'S',
      description: 'Ein kleines Starterpaket, das gut zu gemütlichen Anlässen passt.',
      details: 'Transport, Auf- und Abbau inklusive.',
      id: 0,
      items: [
        {
          name: "Behringer X32 Producer",
          quantity: 1,
          isChecked: true
        }
      ]
    },
    {
      name: 'M',
      description: 'Unsere Empfehlung für die meisten Parties und Veranstaltungen.',
      details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
      id: 1,
      items: [
        {
          name: "Pioneer DJM-250-K",
          quantity: 1,
          isChecked: true
        }
      ]
    },
    {
      name: 'XL',
      description: 'Alles drin: Konzerte, Theateraufführungen, Konferenzen und co.',
      details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
      id: 2,
      items: [
        {
          name: "Mackie Onyx 1640i",
          quantity: 1,
          isChecked: true
        }
      ]
    }
  ];

  const [ activePackage, setActivePackage ] = useState(undefined);

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
        checked={
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