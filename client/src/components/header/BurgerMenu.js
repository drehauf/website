import React, {Fragment} from 'react';

const HamburgerMenu = ({ items }) => {

  const menu = items.map((item, index) => (
    <div className="menu_item" key={index}>
      {item}
    </div>
  ));

  return (
    <div id="menuToggle">
      <input type="checkbox"/>
      <Fragment>
        <span></span>
        <span></span>
        <span></span>
      </Fragment>
      <ul id="menu">
        {menu}
      </ul>
    </div>
  );
};

export default HamburgerMenu;