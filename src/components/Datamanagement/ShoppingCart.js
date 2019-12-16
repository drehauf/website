import React, { useState, useEffect } from "react";

export const ShoppingCartContext = React.createContext({
  onItemChange: () => {},
  isCartSet: false, 
  cart: []
});

const listContainsItem = (list, item) => list.some(cartItem => cartItem.name === item.name);

const ShoppingCart = (props) => {
  const [cart, setCart] = useState([]);
  const [isCartSet, setIsCartSet] = useState(false);

  const onItemChange = item => {
    if (listContainsItem(cart, item)) {
      updateCart(item)
    } else {
      addItemToCart(item)
    }
  };

  useEffect(() => {
    console.log("cart", cart, "isCartSet", isCartSet);
  }, [cart]);

  const updateCart = item => {
    let newCart = cart.map(cartItem => {
      if (cartItem.name === item.name) {
        return item;
      }
      return cartItem;
    });
    newCart = newCart.filter(item => item.isChecked === true);
    setNewCart(newCart);
  }

  const setNewCart = (array) => {
    setCart(array);
    setIsCartSet(array.length > 0);
  }

  const addItemToCart = item => setNewCart([...cart, item]);
  
  return (
    <ShoppingCartContext.Provider value={{onItemChange: onItemChange, isCartSet: isCartSet, cart: cart}}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCart;

// const toString = () => {
//   let NEWLINE = '%0D%0A';
//   let str = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;
//   for (let item of cart.items) {
//     str += `${item.quantity}x ${item.name}${NEWLINE}`;
//   }
//   return str;
// }
