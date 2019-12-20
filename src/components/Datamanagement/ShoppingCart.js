import React, { useState, useEffect } from "react";
import InventoryData from "components/web/inventory/InventoryData";
import ShoppingCartFacade from 'components/Datamanagement/ShoppingCartFacade';

// import CSVParser from "components/web/utils/CSVParser.js";

export const ShoppingCartContext = React.createContext({
  onItemChange: () => {},
  isCartSet: false, 
  cart: undefined,
  selected: undefined
});

const ShoppingCart = (props) => {
  const [cart, setCart] = useState(undefined);
  const [isCartSet, setIsCartSet] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
      InventoryData.fetchTables(table => { setFetchData(prev => [...prev, table]) });
  }, []);

  useEffect(() => {
    if (InventoryData.allDataLoaded(fetchData)) {
      setCart([...fetchData]);
    }
  }, [fetchData]);
  
  useEffect(() => {
    if (cart) {
      const getSelected = ShoppingCartFacade.getSelected(cart)
      setSelected(getSelected);
    }
  }, [cart])
  
  useEffect(() => {
    if (selected) {
      setIsCartSet(selected.length > 0)
    }
  }, [selected])
  
  const onItemChange = item => {
    const newCart = ShoppingCartFacade.updateCart(cart, item);
    setCart(newCart);
  };

  return (
    <ShoppingCartContext.Provider value={{onItemChange: onItemChange, isCartSet: isCartSet, cart: cart, selected: selected}}>
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
