import React, { FC as Component, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import SidebarAction from './sidebar-action.component';
import Action from '../../main/sections/services/table/table-action.model';

interface Props {
  index: number;
  name: string;
  actions: Action[];
  onItemClick: (parentIndex: number, childIndex: number) => void;
  onActionHover: () => void;
}

const SidebarItem: Component<Props> = ({
  index, name, actions, onItemClick, onActionHover,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsCollapsed(false);
  }, []);

  const onActionClick = (actionIndex: number) => {
    onItemClick(index, actionIndex);
  };

  const onClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getIsCollapsed = () => isCollapsed ?? true;

  return (
    <li>
      <div
        // collapsed={getIsCollapsed()}
        className="sidebar_item"
        role="button"
        // onKeyDown={() => onClick(index)}
        // onClick={() => onClick(index)}
        onKeyDown={onClick}
        onClick={onClick}
        tabIndex={0}
      >
        <p className="sidebar_item_name">{name}</p>
        <span className="sidebar_item_arrow" />
      </div>
      {
          actions.map((action) => (
            <SidebarAction
              key={nanoid()}
              index={index}
              id={action.id}
              name={action.name}
              description={action.description}
              onActionClick={onActionClick}
              onActionHover={onActionHover}
              isCollapsed={getIsCollapsed()}
            />
          ))
        }
    </li>
  );
};

export default SidebarItem;
