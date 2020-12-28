import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';

const HamburgerMenu = ({ items }) => {
  const menu = items.map((item) => (
    <div className="menu_item" key={nanoid()}>
      {item}
    </div>
  ));

  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <>
        <span />
        <span />
        <span />
      </>
      <ul id="menu">
        {menu}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
