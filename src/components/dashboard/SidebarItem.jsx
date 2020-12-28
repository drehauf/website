import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import SidebarAction from './SidebarAction';

const SidebarItem = ({
  index, name, actions, onItemClick, onActionHover,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(undefined);

  useEffect(() => {
    setIsCollapsed(false);
  }, []);

  const onActionClick = (actionIndex) => {
    onItemClick(index, actionIndex);
  };

  const onClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getIsCollapsed = () => ((isCollapsed ?? true).toString());

  return (
    <li>
      <div
        collapsed={getIsCollapsed()}
        className="sidebar_item"
        role="button"
        onKeyDown={() => onClick(index)}
        onClick={() => onClick(index)}
        tabIndex={0}
      >
        <p className="sidebar_item_name">{name}</p>
        <span className="sidebar_item_arrow" />
      </div>
      {
          actions.map((action) => (
            <SidebarAction
              key={index}
              index={nanoid()}
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
