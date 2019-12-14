import React from 'react';
import '../../stylesheets/Button.scss';

const Button = (props) => {
  return (
    <a className="button" href={props.link}>{props.text}</a>
  );
};

export default Button;