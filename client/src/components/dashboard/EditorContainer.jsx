import React from 'react';

const EditorContainer = ({ editor, onCloseEditor }) => {

  const onDone = () => {
    document.getElementById(editor.id).checked = false;
    onCloseEditor()
  }

  const onCancel = () => {
    if (window.confirm('Wirklich verlassen? Änderungen werden nicht gespeichert')) {
      onDone()
    };
  }

  if (editor) {
    return (
      <div className='widget'>
        <div className='widget_header'></div>
        <div className='widget_body'>
          {editor.form}
        </div>
        <div className='widget_footer'>
          <p>{editor.name}</p>
          <div className='widget_footer_actions'>
            <a className="button" onClick={() => onDone()}>FERTIG</a>
            <a className="button destructive" onClick={() => onCancel()}>ABBRECHEN</a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default EditorContainer;