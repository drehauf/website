let presenter = {

  init: function() {
    view.presentCarousel(5);
    view.presentFloater();
    view.presentInventory();
  },

  didCheckBox: function(event) {
    let target = event.target;
    let rows = target.parentNode.parentNode.parentNode.children;
    let cells = target.parentNode.parentNode.children;
    let checkbox = cells[0].firstElementChild;
    let name = cells[1].firstElementChild.innerHTML;
    let select = cells[2].firstElementChild;
    let options = select.options;
    let currentQuantity = options[options.selectedIndex].value;
    let maxQuantity = options[options.length - 1].value;
    select.disabled = !select.disabled;
    if (select.disabled) {
      select.value = maxQuantity;
      cart.remove(name, currentQuantity);
    } else {
      cart.add(name, currentQuantity);
    }
    view.presentCheckOut();
  },

  didSelectOption: function(event) {
    console.log(event);
  },

  didCheckOut: function() {
    helper.mailTo();
    // grecaptcha.ready(() => {
    //   grecaptcha.execute('6LdKoZwUAAAAAAtkdLxDk5F40j6QesBPhdx_zICd', {
    //     action: 'homepage'
    //   }).then((token) => {
    //     console.log(token);
    //   });
    // });
  }

};

presenter.init();