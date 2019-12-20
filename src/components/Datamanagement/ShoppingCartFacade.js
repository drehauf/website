const ShoppingCartFacade = () => {

  const sameItemUnequalValue = (a, b) => {
    return a.name === b.name && (a.isChecked !== b.isChecked || a.quantity !== b.quantity);
  }

  const updateCart = (cart, item) => {
    const newCart = cart.map(table => {
      table.data.forEach(tableItem => {
        if (sameItemUnequalValue(tableItem, item)) {
          tableItem.quantity = item.quantity;
          tableItem.isChecked = item.isChecked;
        }
      })
      return table;
    });
    return newCart;
  }

  const getSelected = (array) => {
    const returnArray = []
    array.map(table => {
      table.data.forEach(tableItem => {
        if (tableItem.isChecked) {
          returnArray.push(tableItem);
        }
      })
      return table;
    })
    return returnArray;
  }

  const getEmailText = selected => {
    console.log('selected ', selected);

    let NEWLINE = "%0D%0A";
    let emailText = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;

    for (let item of selected) {
      console.log('item ', item);
      emailText += `${item.quantity}x ${item.name}${NEWLINE}`;
    }
    
    return emailText;
  }

  return {
    updateCart: updateCart,
    getSelected: getSelected,
    getEmailText: getEmailText
  };
}

export default ShoppingCartFacade();