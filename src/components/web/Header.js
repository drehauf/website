import React from 'react';
import BurgerMenu from './BurgerMenu';
import Button from "components/essentials/Button";
import Logo from '../../assets/images/logo.png';

const Header = () => {

  return (
    <header>
      <div className="header_wrapper container">
        <a className="h-left animate" href="#slider" hidden>
          <img className="h-logo" src={Logo} alt="Logo" />
        </a>
        <div className="h-right">
          <div id="hamburger-list">
            <Button href="#about" text="ÜBER UNS" external={false} />
            <Button href="#services" text="LEISTUNGEN" external={false} />
            <Button href="#credentials" text="REFERENZEN" external={false} />
            <Button href="#contact" text="KONTAKT" external={false} />
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );

}

export default Header;