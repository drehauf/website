import React, { Fragment, useState } from 'react';
import Header from 'components/header/Header';
import { LogoutItem, SidebarItem } from 'components/header/HeaderItems'
import Sidebar from 'components/dashboard/Sidebar';
import Widget from 'components/Widget';

const Dashboard = () => {

  const [ selectedAction, setSelectedAction ] = useState(undefined);

  return (
    <Fragment>
      <Header items={
        [SidebarItem, LogoutItem]
      }/>
      <div className='dashboard'>
        <Sidebar onSelection={setSelectedAction}/>
        <div className='dashboard_context-area'>
          <div className='dashboard_context-area_wrapper'>
            <Widget
              action={selectedAction}
              onClose={() => setSelectedAction(undefined)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default Dashboard;