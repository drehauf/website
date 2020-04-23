import React from 'react';

const textContent = {
  show: "ALLE ANZEIGEN",
  hide: "AUSWAHL ANZEIGEN"
};

const ToggleButton = ({ show, toggleFunction }) => {

  let content = {text: textContent.hide, onClick: toggleFunction}
  if (show) {
    content = {text: textContent.show, onClick: toggleFunction}
  }

  return (
    <div className="u-margin-top--large">
      <div onClick={content.onClick}>
        {content.text}
      </div>
    </div>
  );
}

export default ToggleButton;
