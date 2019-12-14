import React from 'react';
import '../../stylesheets/Header.scss';
import Button from '../essentials/Button';
import Link from '../essentials/Link';

const Footer = () => {

  const impressumLink = <Link href="/impressum" text="IMPRESSUM" />;
  const datenschutzLink = <Link href="/datenschutz" text="DATENSCHUTZ" />;

  return (
    <footer>
      <ul>
        <Button link={impressumLink}/>
        <Button link={datenschutzLink}/>
      </ul>
    </footer>
  );
}

export default Footer;