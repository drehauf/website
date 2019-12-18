let cart = {

  // Contains all items the user added: {name, quantity}
  items: [],

  /*
  * Adds a item to the cart items list
  */
  add: function(name, quantity) {
    cart.contains(name, quantity, (difference) => {
      cart.items.push({
        name: name,
        quantity: quantity
      });
      view.presentNotification({
        isDestructive: false,
        item: {
          name: name,
          difference: difference
        }
      });
    });
  },

  /*
  * Removes a item from the cart items list
  */
  remove: function(name, quantity) {
    cart.contains(name, quantity, (difference) => {
      cart.items.pop({
        name: name,
        quantity: quantity
      });
      view.presentNotification({
        isDestructive: true,
        item: {
          name: name,
          difference: difference
        }
      });
    });
  },

  /*
  * Checks if a item is already in the cart items list
  * If there is already the same item in the cart the difference is calculated, otherwise the difference is the current quantity
  * The difference in quantity is passed to callback()
  */
  contains: function(name, quantity, callback) {
    let difference;
    for (let item in cart.items) {
      if (item.name === name) {
        difference = item.quantity - quantity;
        item.quantity = quantity;
      }
      if (!difference) {
        difference = quantity;
      }
    }
    callback(difference);
  },

  /*
  * Returns a string representation of the items list
  */
  toString: function() {
    let NEWLINE = '%0D%0A';
    let str = `${NEWLINE}${NEWLINE}Ich habe folgendes Equipment online ausgewählt:${NEWLINE}${NEWLINE}`;
    for (let item of cart.items) {
      str += `${item.quantity}x ${item.name}${NEWLINE}`;
    }
    return str;
  }

};