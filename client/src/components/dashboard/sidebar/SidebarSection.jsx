import React, { useState, useEffect } from 'react';
import SidebarItem from 'components/dashboard/sidebar/SidebarItem';

const SidebarSection = ({ index, name, items, onOpenEditor, onHover }) => {

  const [ isCollapsed, setIsCollapsed ] = useState(undefined)

  useEffect(() => {
    setIsCollapsed(false);
  }, []);

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
          items.map((item, index) => (
            <SidebarItem
              key={index}
              index={index}
              item={item}
              onOpenEditor={onOpenEditor}
              onHover={onHover}
              isCollapsed={getIsCollapsed()}
            />
          ))
        }
      </li>
    );

  }

  export default SidebarSection;