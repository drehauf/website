import React, { useState, useEffect, createContext, useContext } from 'react';

export const EditorContext = createContext({
  editor: undefined,
  setEditor: () => {}
});

const Editor = ({ children }) => {

  const [editor, setEditor] = useState();

  const onChangeEditor = (editor) => {
    console.log('setEditor', editor);
    setEditor(editor);
  }

  return (
    <EditorContext.Provider
      value={
        {
          editor: editor,
          setEditor: onChangeEditor,
        }
      }
    >
      {children}
    </EditorContext.Provider>
  );

}

export const useEditorContext = () => useContext(EditorContext);
export default Editor;
