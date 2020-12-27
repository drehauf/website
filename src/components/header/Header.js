import React from 'react';
import BurgerMenu from '../header/BurgerMenu';
import Button from "../simple/Button";

const Header = ({ items }) => {

  const logo = <div className='h-logo'></div>

  return (
    <header>
      <div className="header_wrapper container">
        <Button
          href="/"
          text={logo}
          external={false}
        />
        <div className="h-right">
          <div id="hamburger-list">
            {items}
          </div>
          <BurgerMenu items={items}/>
        </div>
      </div>
    </header>
  );

}

export default Header;