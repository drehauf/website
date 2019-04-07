let cart = {

  // Contains all items the user added: {name, quantity}
  items: [],

  add: function(name, quantity) {
    cart.contains(name, quantity, (difference) => {
      cart.items.push({
        name: name,
        quantity: quantity
      });
      notification.post(false, name, difference);
    });
  },

  remove: function(name, quantity) {
    cart.contains(name, quantity, (difference) => {
      cart.items.pop({
        name: name,
        quantity: quantity
      });
      notification.post(true, name, difference);
    });
  },

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