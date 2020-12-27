import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import InventoryData from "../inventory/InventoryData";
import ShoppingCartFacade from '../inventory/ShoppingCartFacade';

export const ShoppingCartContext = createContext({
  onItemChange: () => {},
  isCartSet: false,
  items: undefined,
  selected: undefined
});

const ShoppingCart = ({ children }) => {
  const [items, setItems] = useState(undefined);
  const [isCartSet, setIsCartSet] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const emailText = useRef(undefined);

  /*
  * Fetch csv data for table pages
  */
  useEffect(() => {
    InventoryData.fetchTables(table => { 
      setFetchedData(prev => [...prev, table]) 
    });
  }, []);

  /*
  * If all data is fetched, add to items
  */
  useEffect(() => {
    if (InventoryData.allDataLoaded(fetchedData)) {
      setItems([...fetchedData]);
    }
  }, [fetchedData]);

  /*
  * Detect all changes to cart and add items to selectedItems
  */
  useEffect(() => {
    if (items) {
      const getSelectedItems = ShoppingCartFacade.getSelectedItems(items)
      setSelectedItems(getSelectedItems);
    }
  }, [items])

  useEffect(() => {
    if (selectedItems) {
      setIsCartSet(selectedItems.length > 0)
      emailText.current = ShoppingCartFacade.getEmailText(selectedItems);
    }
  }, [selectedItems])

  const onItemChange = (item) => {
    setItems(ShoppingCartFacade.updateItems(items, item));
  };  

  const onPackageChange = (packageItems) => {
    removeAllSelectedItems();
    setItems(ShoppingCartFacade.updatePackage(items, packageItems));
  };

  const removeAllSelectedItems = () => {
    setItems(ShoppingCartFacade.clearItems(items));
  };

  return (
    <ShoppingCartContext.Provider
      value={
        {
          onItemChange: onItemChange,
          onPackageChange: onPackageChange,
          isCartSet: isCartSet,
          items: items,
          selected: selectedItems,
          emailText: emailText.current,
          uncheckAll: removeAllSelectedItems
        }
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingContext = () => useContext(ShoppingCartContext);
export default ShoppingCart;
