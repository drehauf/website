import React, {Fragment} from 'react';
import Button from 'components/simple/Button';

function BurgerMenu() {

  const burger = (() => {
    return (
      <Fragment>
        <span></span>
        <span></span>
        <span></span>
      </Fragment>
    );
  })();

  return (
    <div id="menuToggle">
      <input type="checkbox" />

      {burger}

      <ul id="menu">
        <div className="menu_item">
          <Button href="/#about" text="ÜBER UNS" external={false} />
        </div>
        <div className="menu_item">
          <Button href="/#services" text="LEISTUNGEN" external={false} />
        </div>
        <div className="menu_item">
          <Button href="/#credentials" text="REFERENZEN" external={false} />
        </div>
        <div className="menu_item">
          <Button href="/#contact" text="KONTAKT" external={false} />
        </div>
      </ul>
    </div>
  );
}

export default BurgerMenu;