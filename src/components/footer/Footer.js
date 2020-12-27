import React from 'react';
import Button from '../simple/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Button href="/dashboard" text="ANMELDEN" />
        </li>
        <li>
          <Button href="/impressum" text="IMPRESSUM"/>
        </li>
        <li>
          <Button href="/datenschutz" text="DATENSCHUTZ"/>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;