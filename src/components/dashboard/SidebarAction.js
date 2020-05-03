import React from 'react';

const SidebarAction = ({ index, name, description, onActionClick, isCollapsed }) => {

  return (
    <div
      className='sidebar_action'
      collapsed={isCollapsed}
      onClick={() => onActionClick(index)}
    >
      <p className='sidebar_action_name'>{name}</p>
      {/* <p className='sidebar_action_description'>{description}</p> */}
    </div>
  );

}

export default SidebarAction;