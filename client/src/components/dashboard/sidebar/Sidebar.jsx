import React from 'react';
import SidebarSection from 'components/dashboard/sidebar/SidebarSection';

const Sidebar = ({ items, onOpenEditor, onHover }) => {

  return (
    <div className='sidebar'>
      <ul>
        <fieldset id='sidebar_actions'>
          {
            items.map((section, index) => (
              <SidebarSection
                key={index}
                index={index}
                name={section.name}
                items={section.items}
                onOpenEditor={onOpenEditor}
                onHover={onHover}
              />
            ))
          }
        </fieldset>
      </ul>
    </div>
  );

}

export default Sidebar;