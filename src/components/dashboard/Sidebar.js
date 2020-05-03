import React from 'react';
import { items } from 'components/dashboard/SidebarItems';
import SidebarItem from 'components/dashboard/SidebarItem';

const Sidebar = ({ onSelection }) => {

  const onClick = (parentIndex, childIndex) => {
    if (childIndex === undefined) {
    } else {
      let action = items[parentIndex].actions[childIndex].name;
      onSelection(action);
    }
  }

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
                onItemClick={onClick}
              />
            ))
          }
        </fieldset>
      </ul>
    </div>
  );

}

export default Sidebar;