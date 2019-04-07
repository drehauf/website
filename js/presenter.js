let presenter = {

  carousel: {
    src: 'img/carousel/frame6.jpg',
    alt: 'rehearsal room',
    caption: "\"Schülerfirma\"",
    text: "Was das bedeutet und wie wir dazu gekommen sind.",
    href: "#about",
    actiontext: "ÜBER UNS"
  },

  showCarousel: function(timePerImageSeconds) {
    helper.cloneTemplate('carousel-template', 'slider', (clone) => {
      helper.setCloneData(slider, presenter.carousel);
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

  sendMail: function() {
    let mail = 'info@drehauf.com';
    let date = new Date();
    let subject = 'R' + helper.formatDate(date);
    let body = '';
    if (cart.items.length > 0) {
      body = cart.toString();
    }
    window.location.href = `mailto:${mail}.com?subject=${subject}&body=${body}`;
  },

};

presenter.showCarousel(5);

let getContactInformation = helper.getElement('request-action');

getContactInformation.addEventListener('click', () => {
  presenter.sendMail();
  // grecaptcha.ready(() => {
  //   grecaptcha.execute('6LdKoZwUAAAAAAtkdLxDk5F40j6QesBPhdx_zICd', {
  //     action: 'homepage'
  //   }).then((token) => {
  //     console.log(token);
  //   });
  // });
});

parser.get('../data/inventar.csv', parser.processCSV);

function populateTable(data) {
  let table = helper.getElement('inventory');
  for (let key of data) {
    let name = key.name;
    let quantity = key.quantity;

    let row = table.insertRow();
    let checkboxCell = row.insertCell()
    let checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.addEventListener('click', didCheckBox);
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
    selectElement.addEventListener('change', didSelectOption);
    selectCell.append(selectElement);
  }
}

function didCheckBox(event) {
  let rows = event.target.parentNode.parentNode.parentNode.children;
  let cells = event.target.parentNode.parentNode.children;
  let name = cells[1].firstElementChild.innerHTML;
  let select = cells[2].firstElementChild;
  let options = select.options;
  let currentQuantity = options[options.selectedIndex].value;
  let maxQuantity = options[options.length - 1].value;
  // let difference = maxQuantity - currentQuantity;
  select.disabled = !select.disabled;
  if (select.disabled) {
    select.value = maxQuantity;
    cart.remove(name, currentQuantity);
  } else {
    cart.add(name, currentQuantity);
  }
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

function didSelectOption(event) {
  console.log(event);
}