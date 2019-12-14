import React from 'react';
import '../../stylesheets/Button.scss';

const Button = ({ link }) => {
  return (
    <div className="button">
      {link}
    </div>
  );
};

export default Button;