import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const Packages = ({ tableHasSelectedItems, selectPackage }) => {
  const packages = [
    {
      name: 'S',
      description: 'Ein kleines Starterpaket, das gut zu gemütlichen Anlässen passt.',
      details: 'Transport, Auf- und Abbau inklusive.',
      id: 0,
      items: [
        {
          name: 'Behringer X32 Producer',
          quantity: 1,
          isChecked: true,
        },
      ],
    },
    {
      name: 'M',
      description: 'Unsere Empfehlung für die meisten Parties und Veranstaltungen.',
      details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
      id: 1,
      items: [
        {
          name: 'Pioneer DJM-250-K',
          quantity: 1,
          isChecked: true,
        },
      ],
    },
    {
      name: 'XL',
      description: 'Alles drin: Konzerte, Theateraufführungen, Konferenzen und co.',
      details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
      id: 2,
      items: [
        {
          name: 'Mackie Onyx 1640i',
          quantity: 1,
          isChecked: true,
        },
      ],
    },
  ];

  const [activePackage, setActivePackage] = useState(undefined);

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
      selectPackage(activePackage.items);
    }
  }, [activePackage]);

  return packages.map(({
    id, name, description, details,
  }) => (
    <div
      className="packages_item"
      key={nanoid()}
    >
      <input
        type="radio"
        className="packages_item_checkbox"
        id={id}
        defaultChecked={
          activePackage ? (activePackage.id === id) : false
        }
      />
      <label
        className="packages_item_label"
        htmlFor={id}
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
};

export default Packages;
