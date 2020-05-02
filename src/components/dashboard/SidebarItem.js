import React, { useState, useEffect } from 'react';
import SidebarAction from 'components/dashboard/SidebarAction';

const SidebarItem = ({ index, name, actions, onItemClicked }) => {

  const [ isCollapsed, setIsCollapsed ] = useState(undefined)

  useEffect(() => {
    setIsCollapsed(false);
  }, []);

  const onActionClicked = (actionIndex) => {
    onItemClicked(index, actionIndex)
  };

  const onClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const getIsCollapsed = () => ((isCollapsed ?? true).toString());

  return (
    <li>
      <div
        is-collapsed={getIsCollapsed()}
        className='sidebar_item'
        onClick={() => onClick(index)}
        >
          <p className='sidebar_item_name'>{name}</p>
        </div>
        {
          actions.map((action, index) => (
            <SidebarAction
              key={index}
              index={index}
              name={action.name}
              description={action.description}
              onActionClicked={onActionClicked}
              isCollapsed={getIsCollapsed()}
            />
          ))
        }
      </li>
    );

  }

  export default SidebarItem;