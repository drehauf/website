import React, { FC as Component } from 'react';
import BurgerMenu from './header-hamburger.component';
import Button from '../simple/button.component';

interface Props {
  items?: Element[];
}

const Header: Component<Props> = ({ items }: Props) => {
  const logo = <div className="h-logo" />;

  return (
    <header>
      <div className="header_wrapper container">
        <Button
          href="/"
          content={logo}
          external={false}
        />
        <div className="h-right">
          <div id="hamburger-list">
            {items}
          </div>
          <BurgerMenu items={items} />
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  items: [],
} as Props;

export default Header;
