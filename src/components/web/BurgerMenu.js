import React, {Fragment} from 'react';
import Button from 'components/essentials/Button';

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
        <Button href="/#about" text="ÜBER UNS" external={false} />
        <Button href="/#service" text="LEISTUNGEN" external={false} />
        <Button href="/#credentials" text="REFERENZEN" external={false} />
        <Button href="/#contact" text="KONTAKT" external={false} />
      </ul>
    </div>
  );
}

export default BurgerMenu;