import React from 'react';

const SidebarAction = ({ index, id, name, description, onActionClick, onActionHover, isCollapsed }) => {

  return (
    <div
      className='sidebar_action'
      collapsed={isCollapsed}
      onClick={() => onActionClick(index)}
      onMouseEnter={() => onActionHover(description)}
      onMouseLeave={() => onActionHover(undefined)}
    >
      <input type='radio' name='sidebar_actions' id={id}/>
      <label className='sidebar_action_wrapper' htmlFor={id}>
        <p className='sidebar_action_wrapper_name'>{name}</p>
        {/* <p className='sidebar_action_description'>{description}</p> */}
      </label>
      {/*
        <div className='tooltip'>
          <p>{description}</p>
        </div>
      */}
    </div>
  );

}

export default SidebarAction;