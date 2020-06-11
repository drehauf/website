import React from 'react'
import Editor from 'components/dashboard/editor';
import Header, { SidebarItem, LogoutItem } from 'components/header';
import Dasboard from 'components/dashboard/Dashboard';

const Private = () => {
  return (
    <Editor>
      <Header items={
        [ SidebarItem, LogoutItem ]
      }/>
      <Dasboard/>
    </Editor>
  )
}

export default Private
