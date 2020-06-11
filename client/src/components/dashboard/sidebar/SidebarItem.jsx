import React from 'react';
import { useEditorContext } from 'components/dashboard/editor';

const SidebarItem = ({ item, onOpenEditor, onHover, isCollapsed }) => { 
  
  const { setEditor } = useEditorContext();

  return (
    <div
      className='sidebar_action'
      collapsed={isCollapsed}
      // onClick={() => onOpenEditor(item)}
      onClick={() => setEditor(item)}
      onMouseEnter={() => onHover(item.description)}
      onMouseLeave={() => onHover(undefined)}
    >
      <input type='radio' name='sidebar_actions' id={item.id}/>
      <label className='sidebar_action_wrapper' htmlFor={item.id}>
        <p className='sidebar_action_wrapper_name'>{item.name}</p>
        {/* 
          <p className='sidebar_action_description'>{editor.description}</p> 
        */}
      </label>
      {/*
        <div className='tooltip'>
          <p>{description}</p>
        </div>
      */}
    </div>
  );

}

export default SidebarItem;