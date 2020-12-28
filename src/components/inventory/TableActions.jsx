import React from 'react';
import MailButton from '../simple/MailButton';

const actions = {
  show: 'ALLE ANZEIGEN',
  hide: 'AUSWAHL ANZEIGEN',
  remove: 'AUSWAHL LÖSCHEN',
  done: 'ANFRAGE STELLEN',
};

const ActionArea = ({ show, onClick, onUnselect }) => {
  const content = {
    text: actions.hide,
    onClick,
  };

  if (show) {
    content.text = actions.show;
  }

  return (
    <div className="u-margin-top--large inventory-actions">
      <a className="button" onClick={content.onClick}>{content.text}</a>
      <a className="button destructive" onClick={onUnselect}>{actions.remove}</a>
      <MailButton text={actions.done} />
    </div>
  );
};

export default ActionArea;
