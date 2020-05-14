import React from 'react';
import MailButton from 'components/simple/MailButton'

const actions = {
  show: "ALLE ANZEIGEN",
  hide: "AUSWAHL ANZEIGEN",
  remove: "AUSWAHL LÖSCHEN",
  done: "ANFRAGE STELLEN"
};

const ActionArea = ({ show, toggleFunction }) => {

  let content = {
    text: actions.hide,
    onClick: toggleFunction
  }

  if (show) {
    content.text = actions.show;
  }

  return (
    <div className="u-margin-top--large inventory-actions">
      <a className="button" onClick={content.onClick}>{content.text}</a>
      <a className="button destructive" onClick={undefined}>{actions.remove}</a>
      <MailButton text={actions.done}/>
    </div>
  );
}

export default ActionArea;
