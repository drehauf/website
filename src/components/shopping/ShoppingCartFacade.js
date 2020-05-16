const ShoppingCartFacade = () => {

  const sameItemUnequalValue = (a, b) => {
    return a.name === b.name && (a.isChecked !== b.isChecked || a.quantity !== b.quantity);
  }

  const updateItems = (items, item) => {
    const newItems = items.map(table => {
      table.data.forEach(tableItem => {
        if (sameItemUnequalValue(tableItem, item)) {
          tableItem.quantity = item.quantity;
          tableItem.isChecked = item.isChecked;
        }
      })
      return table;
    });
    return newItems;
  }

  const getSelectedItems = (array) => {
    const items = []
    array.map(table => {
      table.data.forEach(tableItem => {
        if (tableItem.isChecked) {
          items.push(tableItem);
        }
      })
      return table;
    })
    return items;
  }

  const getEmailText = selected => {
    let NEWLINE = "%0D%0A";
    let emailText = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;
    for (let item of selected) {
      // console.log('item ', item.name, item.quantity);
      emailText += `${item.quantity}x ${item.name}${NEWLINE}`;
    }
    return emailText;
  }

  return {
    updateItems: updateItems,
    getSelectedItems: getSelectedItems,
    getEmailText: getEmailText
  };
}

export default ShoppingCartFacade();