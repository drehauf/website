import React from 'react';

const SidebarAction = ({ index, name, description, onActionClick, isCollapsed }) => {

  const getID = () => (name.toLowerCase().replace(' ', '-'));

  return (
    <div
      className='sidebar_action'
      collapsed={isCollapsed}
      onClick={() => onActionClick(index)}
    >
      <input type='radio' name='sidebar_actions' id={getID()}/>
      <label className='sidebar_action_wrapper' htmlFor={getID()}>
        <p className='sidebar_action_wrapper_name'>{name}</p>
        {/* <p className='sidebar_action_description'>{description}</p> */}
      </label>
    </div>
  );

}

export default SidebarAction;