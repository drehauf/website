import React from 'react';

const Button = (props) => {
  return <a href={props.link}>{props.text}</a>;
};

export default Button;