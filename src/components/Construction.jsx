import React from 'react';
// import '../Construction.scss';

const Construction = () => {
  const subscript = 'info';
  const domaine = 'drehauf.com';

  const mailTo = () => {
    window.location.href = `mailto:${subscript}@${domaine}`;
  };

  return (
    <div id="construction">
      <img src={`${process.env.PUBLIC_URL}/banner-construction.png`} alt="Logo mit Bauarbeiterhelm" />
      <h1>Wir bauen für Sie um!</h1>
      <div id="message">
        <h2>Währenddessen errreichen Sie uns unter</h2>
        <code role="button" onClick={mailTo} onKeyDown={mailTo} tabIndex={0}>
          {subscript}
          @
          {domaine}
        </code>
      </div>
      <h2>Vielen Dank für Ihr Verständnis!</h2>
    </div>
  );
};

export default Construction;
