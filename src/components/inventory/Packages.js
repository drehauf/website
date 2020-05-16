import React from 'react';

const Packages = () => {

  const items = [
    {
      name: 'Paket 1',
      description: 'Ein kleines Starterpaket, passt gut zu gemütlichen Anlässen'
    },
    {
      name: 'Paket 2',
      description: 'Ein medium Paket, perfekt für kleinere Parties'
    },
    {
      name: 'Paket 3',
      description: 'Alles drin: Konzerte, Konferenzen und co'
    }
  ];

  return items.map((item, index) => (
    <div className='packages_item' key={index}>
      <input type='checkbox' className='packages_item_checkbox' />
      <div>
        <p className='packages_item_name'>{item.name}</p>
        <p className='packages_item_description'>{item.description}</p>
      </div>
    </div>
  ));

};

export default Packages;