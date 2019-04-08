let presenter = {

  /*
  * Presenter initializer
  * Sets event listeners for <a> elements
  * Calls show() functions
  */
  init: function() {
    helper.getElement('request-action').addEventListener('click', presenter.didCheckOut);
    presenter.showCarousel();
    presenter.showFloater();
    presenter.showInventory();
  },

  showCarousel: function() {
    model.getCarousel((data) => {
      view.presentCarousel(5, data);
    });
  },

  showFloater: function() {
    view.presentFloater();
  },

  showInventory: function() {
    model.getFile('../data/inventar.csv', (data) => {
      view.presentInventory(data);
    });
  },

  /*
  * EventListener that gets called when a click is detected on a checkbox within the inventory table
  */
  didCheckBox: function(event) {
    model.getItemForTableRow(event.target, (row, item) => {
      view.presentTableRowItem(row, item)
    });
    view.presentCheckOut();
  },

  /*
  * EventListener that gets called when a select within the inventory table changes it's slected option
  */
  didSelectOption: function(event) {
    console.log(event);
  },

  /*
  * EventListener that gets called when a click is detected in the checkout
  * Evaluates the reCaptcha score and then drafts the contact mail
  */
  didCheckOut: function() {
    model.getReCaptchaScore(() => {
      helper.mailTo();
    });
  }

};

presenter.init();