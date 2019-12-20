import React, { useState, useEffect, useRef } from "react";
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
  const emailText = useRef(undefined);

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
      emailText.current = ShoppingCartFacade.getEmailText(selected);
    }
  }, [selected])
  
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
          selected: selected,
          emailText: emailText.current
        }
      }
    >
      {props.children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCart;
