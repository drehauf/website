import React from 'react';
// import { items } from 'components/dashboard/DashboardItems';
import SidebarItem from 'components/dashboard/sidebar/SidebarItem';

const Sidebar = ({ items, onSelection, onHover }) => {

  // const onClick = (parentIndex, childIndex) => {
  //   if (childIndex !== undefined) {
  //     let action = items[parentIndex].actions[childIndex].name;
  //     onSelection(action);
  //   }
  // }

  return (
    <div className='sidebar'>
      <ul>
        <fieldset id='sidebar_actions'>
          {
            items.map((item, index) => (
              <SidebarItem
                key={index}
                index={index}
                name={item.name}
                actions={item.actions}
                onItemClick={onSelection}
                onActionHover={onHover}
              />
            ))
          }
        </fieldset>
      </ul>
    </div>
  );

}

export default Sidebar;