import React from 'react';
import BurgerMenu from 'components/header/BurgerMenu';
import Button from "components/simple/Button";

const Header = () => {

  const logo = <div className='h-logo'></div>

  return (
    <header>
      <div className="header_wrapper container">
        <Button href="/#carousel" text={logo} external={false} />
        <div className="h-right">
          <div id="hamburger-list">
            <Button href="/#about" text="ÜBER UNS" external={false} />
            <Button href="/#services" text="LEISTUNGEN" external={false} />
            <Button href="/#credentials" text="REFERENZEN" external={false} />
            <Button href="/#contact" text="KONTAKT" external={false} />
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );

}

export default Header;