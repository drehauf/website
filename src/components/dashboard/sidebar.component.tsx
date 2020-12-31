import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import SidebarItem from './sidebar-item.component';

interface Props {
  items: any[];
  onSelection: (parentIndex: number, childIndex: number) => void;
  onHover: () => void;
}

/* eslint-disable arrow-body-style */
const Sidebar: Component<Props> = ({ items, onSelection, onHover }: Props) => {
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
