import React, { Fragment, useState, useEffect } from 'react';
import EditorContainer from 'components/dashboard/EditorContainer';
import { useEditorContext } from 'components/dashboard/editor';
import { Sidebar, items } from 'components/dashboard/sidebar';

const Dashboard = () => {

  const { editor, setEditor } = useEditorContext();
  const [editorDescription, setEditorDescription] = useState();
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setEditing(editor !== undefined);
  }, [editor])

  const onOpenEditor = (editor) => {
    setEditor(editor);
  };

  const onCloseEditor = () => {
    setEditor(undefined);
    setEditorDescription(undefined);
  }

  const showEditor = () => {
    if (isEditing) {
      return <EditorContainer editor={editor} onCloseEditor={onCloseEditor} />
    }
    return (
      <div className='widget_none'>
        <p>{editorDescription ?? 'Nichts ausgewählt'}</p>
      </div>
    )
  }

  return (
    <div className='dashboard'>
      <Sidebar items={items} onOpenEditor={onOpenEditor} onHover={setEditorDescription} />
      <div className='dashboard_context-area'>
        <div className='dashboard_context-area_wrapper'>
          {showEditor()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;