import React, { Fragment, useState } from 'react';
import Header from '../header/Header';
import { LogoutItem, SidebarItem } from '../header/HeaderItems'
import Sidebar from '../dashboard/Sidebar';
import Widget from '../dashboard/Widget';
import { items } from '../dashboard/DashboardItems';

const Dashboard = () => {

  const [ selectedAction, setSelectedAction ] = useState(undefined);
  const [ hoverAction, setHoverAction ] = useState(undefined);

  const onSelection = (parentIndex, childIndex) => {
    if (childIndex !== undefined) {
      let action = items[parentIndex].actions[childIndex];
      setSelectedAction(action);
    }
  }

  return (
    <Fragment>
      <Header items={
        [SidebarItem, LogoutItem]
      }/>
      <div className='dashboard'>
        <Sidebar
          items={items}
          onSelection={onSelection}
          onHover={setHoverAction}
        />
        <div className='dashboard_context-area'>
          <div className='dashboard_context-area_wrapper'>
            {
              selectedAction ?
              <Widget
                action={selectedAction}
                onClose={
                  () => {
                    setSelectedAction(undefined)
                    setHoverAction(undefined)
                  }
                }
              /> :
              <div className='widget_none'>
                <p>{hoverAction ?? 'Nichts ausgewählt'}</p>
              </div>
          }
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default Dashboard;