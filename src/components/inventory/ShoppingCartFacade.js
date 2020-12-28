const ShoppingCartFacade = () => {
  // eslint-disable-next-line max-len
  const sameItemUnequalValue = (a, b) => a.name === b.name && (a.isChecked !== b.isChecked || a.quantity !== b.quantity);

  const updateItems = (items, item) => {
    const newItems = items.map((table) => {
      table.data.forEach((tableItem) => {
        if (sameItemUnequalValue(tableItem, item)) {
          tableItem.quantity = item.quantity;
          tableItem.isChecked = item.isChecked;
        }
      });
      return table;
    });
    return newItems;
  };

  const updatePackage = (items, packageItems) => {
    let newItems = [];
    packageItems.forEach((item) => {
      newItems = updateItems(items, item);
    });
    return newItems;
  };

  const getSelectedItems = (array) => {
    const items = [];
    array.map((table) => {
      table.data.forEach((tableItem) => {
        if (tableItem.isChecked) {
          items.push(tableItem);
        }
      });
      return table;
    });
    return items;
  };

  const clearItems = (items) => items.map((page) => {
    page.data.forEach((item) => {
      if (item.isChecked) {
        item.isChecked = false;
      }
    });
    return page;
  });

  const getEmailText = (selected) => {
    const NEWLINE = '%0D%0A';
    let emailText = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;
    selected.forEach((item) => {
      emailText += `${item.quantity}x `;
      emailText += encodeURIComponent(item.name);
      emailText += NEWLINE;
    });
    return emailText;
  };

  return {
    updateItems,
    updatePackage,
    clearItems,
    getSelectedItems,
    getEmailText,
  };
};

export default ShoppingCartFacade();
