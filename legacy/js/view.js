let view = {

  /*
  * Presents the image carousel on top of the page
  * If there is more than image displayed, the old one gets removed
  */
  presentCarousel: function(timePerImageSeconds, data) {
    helper.cloneTemplate('carousel-template', 'slider', (clone) => {
      helper.setCloneData(slider, data[data.length - 1]);
    });
    let i = 0;
    setInterval(() => {
      helper.cloneTemplate('carousel-template', 'slider', (clone) => {
        helper.setCloneData(slider, data[i]);
        let slides = helper.getElement('slider').children;
        if (slides.length > 1) {
          slides[0].remove();
        }
      });
      i++;
      i = i > data.length - 1 ? 0 : i;
    }, timePerImageSeconds * 1000);
  },

  /*
  * Initializes and presents the inventory table
  */
  presentInventory: function(data) {
    let table = helper.getElement('inventory');
    for (let key of data) {
      let name = key.name;
      let quantity = key.quantity;

      let row = table.insertRow();
      let checkboxCell = row.insertCell()
      let checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxElement.addEventListener('click', presenter.didCheckBox);
      checkboxCell.append(checkboxElement);

      let nameCell = row.insertCell()
      let nameElement = document.createElement('p');
      nameElement.innerHTML = name;
      nameCell.append(nameElement);

      let selectCell = row.insertCell()
      let selectElement = document.createElement('select');
      selectElement.disabled = true;
      for (let i = 1; i <= quantity; i++) {
        let optionElement = new Option(i, i);
        optionElement.selected = quantity;
        selectElement.add(optionElement);
      }
      selectElement.addEventListener('change', presenter.didSelectOption);
      selectCell.append(selectElement);
    }
  },

  /*
  * Presents a table row item change
  */
  presentTableRowItem: function(row, item) {
    row.select.disabled = !row.select.disabled;
    if (row.select.disabled) {
      row.select = item.quantity.max;
      cart.remove(item.name, item.quantity.current);
    } else {
      cart.add(item.name, item.quantity.current);
    }
  },

  /*
  * Presents a notification by cloning template
  * Sets css attributes for notification elements
  */
  presentNotification: function(content) {
    helper.cloneTemplate('notification-template', 'notifications', (clone) => {
      notification.setAttributes(content, (attributes, action) => {
        helper.setCloneData(clone, attributes);
        helper.getElement('notification').setAttribute('action', action);
        helper.getElement('n-amount').setAttribute('action', action);
        notification.post(clone);
      });
    });
  },

  presentCustomers: function(data) {
    for (let customer of data) {
      helper.cloneTemplate('customer-template', 'customers', (clone) => {
        customer.alt = `${customer.name} logo`;
        helper.setCloneData(clone, customer);
      });
    }
  },

  /*
  * Presents the buttons to direct to the checkout
  * Sets css attributes for checkout elements
  */
  presentCheckOut: function() {
    let done = helper.getElement('done');
    let amountP = helper.getElement('request-amount');
    if (cart.items.length > 0) {
      done.setAttribute('cart-is-empty', 'false');
      amountP.setAttribute('cart-is-empty', 'false');
      amountP.innerHTML = cart.items.length + ' ausgewählt';
    } else {
      done.setAttribute('cart-is-empty', 'true');
      amountP.setAttribute('cart-is-empty', 'true');
    }
  }

};