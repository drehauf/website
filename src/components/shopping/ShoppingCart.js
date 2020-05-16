import React, { useState, useEffect, useRef } from "react";
import InventoryData from "components/inventory/InventoryData";
import ShoppingCartFacade from 'components/shopping/ShoppingCartFacade';

export const ShoppingCartContext = React.createContext({
  onItemChange: () => { },
  isCartSet: false,
  cart: undefined,
  selected: undefined
});

const ShoppingCart = (props) => {
  const [cart, setCart] = useState(undefined);
  const [isCartSet, setIsCartSet] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedItems, setSelectedItems] = useState(undefined);
  const emailText = useRef(undefined);

  useEffect(() => {
    InventoryData.fetchTables(table => { 
      setFetchedData(prev => [...prev, table]) 
    });
  }, []);

  useEffect(() => {
    if (InventoryData.allDataLoaded(fetchedData)) {
      setCart([...fetchedData]);
    }
  }, [fetchedData]);

  useEffect(() => {
    if (cart) {
      const getSelectedItems = ShoppingCartFacade.getSelectedItems(cart)
      setSelectedItems(getSelectedItems);
    }
  }, [cart])

  useEffect(() => {
    if (selectedItems) {
      setIsCartSet(selectedItems.length > 0)
      emailText.current = ShoppingCartFacade.getEmailText(selectedItems);
    }
  }, [selectedItems])

  const onItemChange = item => {
    const newCart = ShoppingCartFacade.updateCart(cart, item);
    setCart(newCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={
        {
          onItemChange: onItemChange,
          isCartSet: isCartSet,
          cart: cart,
          selected: selectedItems,
          emailText: emailText.current
        }
      }
    >
      {props.children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCart;
