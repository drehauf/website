import React, { Fragment, useState } from 'react';
import Header from 'components/header/Header';
import { LogoutItem, SidebarItem } from 'components/header/HeaderItems'
import Sidebar from 'components/dashboard/sidebar';
import EditorContainer from 'components/dashboard/EditorContainer';
import editors from 'components/dashboard/editors';

const Dashboard = () => {

  const [ selectedAction, setSelectedAction ] = useState(undefined);
  const [ hoverAction, setHoverAction ] = useState(undefined);

  const onSelection = (parentIndex, childIndex) => {
    if (childIndex !== undefined) {
      let action = editors[parentIndex].actions[childIndex];
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
          items={editors}
          onSelection={onSelection}
          onHover={setHoverAction}
        />
        <div className='dashboard_context-area'>
          <div className='dashboard_context-area_wrapper'>
            {
              selectedAction ?
              <EditorContainer
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