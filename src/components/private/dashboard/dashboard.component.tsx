import React, { useState } from 'react';
import Header from '../../main/header/header.component';
import { LogoutItem, SidebarItem } from '../../main/header/header-items.component';
import Sidebar from '../sidebar/sidebar.component';
import Widget from '../widget.component';
import items from './dashboard.data';
import Action from '../../main/sections/services/table/table-action.model';

// TODO(#7): `collapsed` and `isCollapsed` HTML attributes should be rebuilt in JSS
// This component is implicitly typed as `React.FC<{}>` due to the way `PrivateRoute` is constructed
const Dashboard = () => {
  const [selectedAction, setSelectedAction] = useState<Action | undefined>(undefined);
  const [hoverAction, setHoverAction] = useState<Action | undefined>(undefined);

  const onSelection = (parentIndex: number, childIndex: number) => {
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
          onHover={setHoverAction as () => void}
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
