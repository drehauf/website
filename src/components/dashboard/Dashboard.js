import React, { useState } from 'react';
import Header from 'components/header/Header';
import { LogoutItem } from 'components/header/HeaderItems'
import Sidebar from 'components/dashboard/Sidebar';

const Dashboard = () => {

  const [ selectedAction, setSelectedAction ] = useState(undefined);

  return (
    <section className='dashboard'>
      <Header items={
        [LogoutItem]
      }/>
      <Sidebar onSelection={setSelectedAction}/>
      <p className='dashboard_current-action'>{selectedAction ? '' : 'Nichts ausgewählt'}</p>
    </section>
  );

}

export default Dashboard;