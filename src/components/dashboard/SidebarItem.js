import React, { useState, useEffect } from 'react';
import SidebarAction from 'components/dashboard/SidebarAction';

const SidebarItem = ({ index, name, actions, onItemClick }) => {

  const [ isCollapsed, setIsCollapsed ] = useState(undefined)

  useEffect(() => {
    setIsCollapsed(false);
  }, []);

  const onActionClick = (actionIndex) => {
    onItemClick(index, actionIndex)
  };

  const onClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const getIsCollapsed = () => ((isCollapsed ?? true).toString());

  return (
    <li>
      <div
        collapsed={getIsCollapsed()}
        className='sidebar_item'
        onClick={() => onClick(index)}
        >
          <p className='sidebar_item_name'>{name}</p>
          <span className='sidebar_item_arrow'></span>
        </div>
        {
          actions.map((action, index) => (
            <SidebarAction
              key={index}
              index={index}
              name={action.name}
              description={action.description}
              onActionClick={onActionClick}
              isCollapsed={getIsCollapsed()}
            />
          ))
        }
      </li>
    );

  }

  export default SidebarItem;