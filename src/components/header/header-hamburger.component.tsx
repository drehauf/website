import React, { FC as Component, Fragment } from 'react';
import { nanoid } from 'nanoid';

interface Props {
  items?: Element[];
}

const HeaderHamburger: Component<Props> = ({ items }: Props) => {
  const menu = items ? (
    items.map((item) => (
      <div className="menu_item" key={nanoid()}>
        {item}
      </div>
    ))
  ) : null;

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

HeaderHamburger.defaultProps = {
  items: [],
} as Props;

export default HeaderHamburger;
