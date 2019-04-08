let presenter = {

  /*
  * Presenter initializer
  * Sets event listeners for <a> elements
  * Calls show() functions
  */
  init: function() {
    $(document).on('click', 'a[href^="#"]', presenter.didClickScrollableLink);
    helper.getElement('request-action').addEventListener('click', presenter.didCheckOut);
    presenter.showCarousel();
    presenter.showContactFloater();
    presenter.showInventory();
    // presenter.showInfo();
  },

  showCarousel: function() {
    model.getFile('../data/carousel.json', (data) => {
      view.presentCarousel(5, data[data.length - 1]);
    });
  },

  showContactFloater: function() {
    view.presentContactFloater();
  },

  showInventory: function() {
    model.getFile('../data/inventar.csv', (data) => {
      view.presentInventory(data);
    });
  },

  showInfo: function() {
    model.getFile('../data/dashboard.json', (data) => {
      console.log(data);
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
  },

  /*
  * Animate scrolling to hrefs
  * Overrides all default href -> id hopping
  */
  didClickScrollableLink: function(event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let x = $(href).offset().top;
    $('body, html').animate({
      scrollTop: x
    }, 500);
  }

};

presenter.init();