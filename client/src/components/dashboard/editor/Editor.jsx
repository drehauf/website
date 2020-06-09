import React, { useState, createContext, useContext } from 'react';

export const EditorContext = createContext({
  data: undefined,
  schema: undefined,
  onWidgetChange: () => {}
});

const Editor = ({ children }) => {

  const [widget, setWidget] = useState({
    data: undefined,
    schema: undefined
  });

  const onWidgetChange = (newWidget) => {
    setWidget(newWidget);
  };

  return (
    <EditorContext.Provider
      value={
        {
          data: widget.data,
          schema: widget.schema,
          onWidgetChange: onWidgetChange
        }
      }
    >
      {children}
    </EditorContext.Provider>
  );

}

export const useEditorContext = () => useContext(EditorContext);
export default Editor;
