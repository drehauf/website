import React, { FC as Component } from 'react';
import Button from '../simple/button.component';

const Footer: Component = () => (
  <footer>
    <ul>
      <li>
        <Button href="/dashboard" content="ANMELDEN" />
      </li>
      <li>
        <Button href="/impressum" content="IMPRESSUM" />
      </li>
      <li>
        <Button href="/datenschutz" content="DATENSCHUTZ" />
      </li>
    </ul>
  </footer>
);

export default Footer;
