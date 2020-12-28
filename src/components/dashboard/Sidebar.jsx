import React from 'react';
import { nanoid } from 'nanoid';
import SidebarItem from './SidebarItem';

/* eslint-disable arrow-body-style */
const Sidebar = ({ items, onSelection, onHover }) => {
// const onClick = (parentIndex, childIndex) => {
//   if (childIndex !== undefined) {
//     let action = items[parentIndex].actions[childIndex].name;
//     onSelection(action);
//   }
// }

  return (
    <div className="sidebar">
      <ul>
        <fieldset id="sidebar_actions">
          {
            items.map((item, index) => (
              <SidebarItem
                key={nanoid()}
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
};

export default Sidebar;
