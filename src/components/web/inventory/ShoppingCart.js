import React, { Fragment, useState, useEffect } from 'react';
import Inventory from 'components/web/inventory/Inventory';
import Button from 'components/essentials/Button';

const ShoppingCart = () => {

  const [cart, setCart] = useState([]);

  const onItemChange = (item) => {
    const containsItem = cart.some( cartItem => cartItem.name === item.name);
    let newCart = undefined;
    if (containsItem) {
      newCart = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          return item
        }
        return cartItem
      })
    } else {
      newCart = [...cart, item]
    }
    setCart(newCart);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return(
    <Fragment>
      <Inventory onItemChange={onItemChange}/>
      <div className='u-margin-top--large'>
        <a href='/'>AUSWAHL ANZEIGEN</a>
      </div>
    </Fragment>
  );

};

export default ShoppingCart;

// const toString = () => {
//   let NEWLINE = '%0D%0A';
//   let str = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;
//   for (let item of cart.items) {
//     str += `${item.quantity}x ${item.name}${NEWLINE}`;
//   }
//   return str;
// }