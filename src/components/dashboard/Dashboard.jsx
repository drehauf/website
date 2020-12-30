import React, { Fragment, useState } from 'react';
import Header from '../header/header.component';
import { LogoutItem, SidebarItem } from '../header/header-items.component';
import Sidebar from './Sidebar';
import Widget from './Widget';
import items from './DashboardItems';

const Dashboard = () => {
  const [selectedAction, setSelectedAction] = useState(undefined);
  const [hoverAction, setHoverAction] = useState(undefined);

  const onSelection = (parentIndex, childIndex) => {
    if (childIndex !== undefined) {
      const action = items[parentIndex].actions[childIndex];
      setSelectedAction(action);
    }
  };

  return (
    <>
      <Header items={
        [SidebarItem, LogoutItem]
      }
      />
      <div className="dashboard">
        <Sidebar
          items={items}
          onSelection={onSelection}
          onHover={setHoverAction}
        />
        <div className="dashboard_context-area">
          <div className="dashboard_context-area_wrapper">
            {
              selectedAction
                ? (
                  <Widget
                    action={selectedAction}
                    onClose={
                  () => {
                    setSelectedAction(undefined);
                    setHoverAction(undefined);
                  }
                }
                  />
                )
                : (
                  <div className="widget_none">
                    <p>{hoverAction ?? 'Nichts ausgewählt'}</p>
                  </div>
                )
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
