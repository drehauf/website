import React from 'react';

const SidebarAction = ({ index, name, description, onActionClicked, isCollapsed }) => {

  return (
    <div
      className='sidebar_action'
      is-collapsed={isCollapsed}
      onClick={() => onActionClicked(index)}
    >
      <p className='sidebar_action_name'>{name}</p>
      {/* <p className='sidebar_action_description'>{description}</p> */}
    </div>
  );

}

export default SidebarAction;