import React, { useContext } from 'react';
import '../../stylesheets/Header.scss';
import Button from '../essentials/Button';

const Footer = () => {

  return (
    <footer>
      <ul>
        <Button href="/impressum" text="IMPRESSUM" />
        <Button href="/datenschutz" text="DATENSCHUTZ" />
      </ul>
    </footer>
  );
}

export default Footer;