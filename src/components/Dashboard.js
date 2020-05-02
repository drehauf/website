import React, { Fragment } from 'react';
import Header from 'components/header/Header';
import { LogoutItem } from 'components/header/HeaderItems'
import Login from 'components/login/Login';

const Dashboard = () => {

  return (
    <Fragment>
      <Header items={
        [LogoutItem]
      }/>
      <Login/>
    </Fragment>
  );

}

export default Dashboard;