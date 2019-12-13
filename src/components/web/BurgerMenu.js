import React, {Fragment} from 'react';

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

  return(
    <div id="menuToggle">
      <input type="checkbox" />
      
      {burger}
      
      <ul id="menu">
        <a href="#about"><li>ÜBER UNS</li></a>
        <a href="#service"><li>LEISTUNGEN</li></a>
        <a href="#credentials"><li>REFERENZEN</li></a>
        <a href="#contact"><li>KONTAKT</li></a>
      </ul>
    </div>
  );
}

export default BurgerMenu;