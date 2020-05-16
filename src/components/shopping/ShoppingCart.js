import React, { useState, useEffect, useRef } from "react";
import InventoryData from "components/inventory/InventoryData";
import ShoppingCartFacade from 'components/shopping/ShoppingCartFacade';

export const ShoppingCartContext = React.createContext({
  onItemChange: () => { },
  isCartSet: false,
  items: undefined,
  selected: undefined
});

const ShoppingCart = (props) => {
  const [items, setItems] = useState(undefined);
  const [isCartSet, setIsCartSet] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedItems, setSelectedItems] = useState(undefined);
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

  const onItemChange = item => {
    const newItems = ShoppingCartFacade.updateItems(items, item);
    setItems(newItems);
  };

  const removeAllSelectedItems = () => {
    const newItems = items.map((page) => {
      page.data.forEach((item) => {
        if (item.isChecked) {
          item.isChecked = false;
        }
      })
      return page;
    });
    setItems(newItems);
  };

  return (
    <ShoppingCartContext.Provider
      value={
        {
          onItemChange: onItemChange,
          isCartSet: isCartSet,
          items: items,
          selected: selectedItems,
          emailText: emailText.current,
          uncheckAll: removeAllSelectedItems
        }
      }
    >
      {props.children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCart;
