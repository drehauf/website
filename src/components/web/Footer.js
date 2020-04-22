import React from 'react';
import Button from '../essentials/Button';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Button href="/impressum" text="IMPRESSUM" />
        </li>
        <li>
          <Button href="/datenschutz" text="DATENSCHUTZ" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;