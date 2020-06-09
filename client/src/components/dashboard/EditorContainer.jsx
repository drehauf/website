import React from 'react';
import { Editor } from 'components/dashboard/editor';

const EditorContainer = ({ action, onClose }) => {

  const onDoneClick = () => {
    document.getElementById(action.id).checked = false;
    onClose()
  }

  const onCancelClick = () => {
    if (window.confirm('Wirklich verlassen? Änderungen werden nicht gespeichert')) {
      onDoneClick()
    };
  }

  return (
    <Editor>
      <div className='widget'>
        <div className='widget_header'></div>
        <div className='widget_body'>
          {action.widget}
        </div>
        <div className='widget_footer'>
          <p>{action.name}</p>
          <div className='widget_footer_actions'>
            <a className="button" onClick={() => onDoneClick()}>FERTIG</a>
            <a className="button destructive" onClick={() => onCancelClick()}>ABBRECHEN</a>
          </div>
        </div>
      </div>
    </Editor>
  );
}

export default EditorContainer;