import React from 'react';
import { HashLink } from "react-router-hash-link";

const Link = ({ href, text, external }) => {
  if (external) {
    return <a href={href}>{text}</a>
  }

  return (
    <HashLink to={href}>
      {text}
    </HashLink>
  )
};

export default Link;