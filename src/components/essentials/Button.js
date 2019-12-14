import React from 'react';
import { HashLink } from "react-router-hash-link";
import '../../stylesheets/Button.scss';

const Button = ({ href, text, external }) => {
  let link = <HashLink to={href}>{text}</HashLink>;
  
  if (external) {
    link = <a href={href}>{text}</a>;
  }

  return <div className="button">{link}</div>;
};

export default Button;