import React, { useState, useEffect } from "react";
import InventoryData from "components/web/inventory/InventoryData";
import CSVParser from "components/web/utils/CSVParser.js";

export const ShoppingCartContext = React.createContext({
  onItemChange: () => {},
  isCartSet: false, 
  cart: []
});

const listContainsItem = (list, item) => list.some(cartItem => cartItem.name === item.name);

const ShoppingCart = (props) => {
  const [cart, setCart] = useState(undefined);
  const [isCartSet, setIsCartSet] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    fetchTabelData();
  }, []);
  
  const fetchTabelData = () => {
    InventoryData.forEach((file) => {
      CSVParser.get(file, table => {
        const newTableData = table.data.map(item => {
          item.quantity = 1
          item.isChecked = false
          return item;
        })
        table.data = newTableData;
        setFetchData(prev => [...prev, table]);
        console.log('fetchData wurde im loop gecalled ');
      });
    });
  };

  useEffect(() => {
    if (InventoryData.length === fetchData.length) {
      setCart([...fetchData]);
    }
  }, [fetchData]);

  const onItemChange = item => {
    updateCart(item);
  };

  const sameItemUnequalValue = (a, b) => {
    return a.name === b.name && (a.isChecked !== b.isChecked || a.quantity !== b.quantity);
  }

  const updateCart = item => {
    console.log('cart ', cart);
    const newCart = cart.map( table => {
      table.data.forEach( tableItem => {
        if (sameItemUnequalValue(tableItem, item)) {
          tableItem.quantity = item.quantity;
          tableItem.isChecked = item.isChecked;
        }
      })
      return table;
    });
    setCart(newCart);
  };

  useEffect(() => {
    console.log('cart wurde neu geladen ', cart);
    if (cart) {
      setSelected(getSelected(cart));
    }
  }, [cart])

  useEffect(() => {
    if (selected) {
      setIsCartSet(selected.length > 0)
    }
  }, [selected])

  const getSelected = (array) => {
    const returnArray = []
    array.map( table => {
      table.data.forEach ( tableItem => {
        if (tableItem.isChecked) {
          returnArray.push(tableItem);
        }
      })
      return table;
    })
    return returnArray;
  }

  const addItemToCart = item => setCart([...cart, item]);
  
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
