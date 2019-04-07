let notification = {

  history: [],

  /*
  * Posts a notification about the changed cart
  * Can be of type remove, add
  */
  post: function(isDestructive, name, difference) {
    let action;
    let message = {
      caption: undefined,
      item: name,
      quantity: difference
    }
    if (isDestructive) {
      action = 'remove';
      message.caption = 'Enfernt: ';
    } else {
      action = 'add';
      message.caption = 'Gespeichert: ';
    }
    helper.cloneTemplate('notification-template', 'notifications', (clone) => {
      helper.setCloneData(clone, message);
      helper.getElement('notification').setAttribute('action', action);
      helper.getElement('n-amount').setAttribute('action', action);
      notification.history.push(clone);
      notification.remove(3, clone);
    });
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