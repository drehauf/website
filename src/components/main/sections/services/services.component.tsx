import React from 'react';
import TableContainer from './table/table-container.component';
import Packages from './packages.component';
import Context from '../../../shoppingcart/shoppingcart.hook';
import { main, inventory, packages } from './services.data';
import useSection from '../section/section.hook';

const Services = () => (
  /* eslint-disable max-len */
  <div>
    <div className="supply">
      {useSection(main)}
    </div>
    <div className="services_flex-wrapper">
      <div className="services_left-wrapper">
        {useSection(inventory)}
        <Context.Consumer>
          {
              ({ isCartSet, items, selected }) => (
                <TableContainer
                  isCartSet={isCartSet}
                  items={items}
                  selected={selected}
                />
              )
            }
        </Context.Consumer>
      </div>
      <div className="services_right-wrapper">
        {useSection(packages)}
        <div className="packages">
          <Context.Consumer>
            {
                ({ selected, onPackageChange, items }) => (
                  <Packages
                    tableHasSelectedItems={selected.length > 0}
                    selectPackageItems={onPackageChange}
                    items={items}
                  />
                )
              }
          </Context.Consumer>
        </div>
        <a href="#contact">MIETANFRAGE SCHICKEN</a>
      </div>
    </div>
  </div>
);

export default Services;
