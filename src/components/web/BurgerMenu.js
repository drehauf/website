import React from 'react';

function BurgerMenu() {
  return(
    <div id="menuToggle">
      <input type="checkbox" />
      
      <span></span>
      <span></span>
      <span></span>
      
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