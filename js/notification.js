let notification = {

  // Contains all currently displayed notifications
  history: [],

  /*
  * Sets all notification attributes
  * Can be of type remove, add
  * Passes the attributes to callback
  */
  setAttributes: function(content, callback) {
    let action;
    let attributes = {
      caption: undefined,
      item: content.item.name,
      quantity: content.item.difference
    }
    if (content.isDestructive) {
      action = 'remove';
      attributes.caption = 'Enfernt: ';
    } else {
      action = 'add';
      attributes.caption = 'Gespeichert: ';
    }
    callback(attributes, action);
  },

  /*
  * Posts a notification about the changed cart
  * Adds notification to remove queue
  */
  post: function(message) {
    notification.history.push(message);
    notification.remove(3, message);
  },

  /*
  * Removes a notification from the history
  * Notifications get removed either after timePerNotificationSeconds elapses or when more than 3 notifications get posted simultaneously
  */
  remove: function(timePerNotificationSeconds, message) {
    if (notification.history.length > 3) {
      notification.history.shift().remove();
    }
    setTimeout(() => {
      message.remove();
    }, timePerNotificationSeconds * 1000);
  }
};