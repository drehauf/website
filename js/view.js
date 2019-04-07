let view = {



  presentCarousel: function(timePerImageSeconds) {
    helper.cloneTemplate('carousel-template', 'slider', (clone) => {
      helper.setCloneData(slider, model.getCarousel());
    });
    // let i = 0;
    // setInterval(() => {
    //   helper.cloneTemplate('carousel', 'slider', (clone) => {
    //     helper.setCloneData(slider, data[i]);
    //   });
    //   i++;
    //   i = i > data.length - 1 ? 0 : i;
    // }, timePerImageSeconds * 1000);
  },

  presentFloater: function() {
    helper.getElement('request-action').addEventListener('click', presenter.didCheckOut);
  },

  presentInventory: function() {
    parser.get('../data/inventar.csv', Files.CSV, (data) => {
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
    });
  },

  presentNotification: function(isDestructive, name, difference) {
    notification.post(isDestructive, name, difference);
  },

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