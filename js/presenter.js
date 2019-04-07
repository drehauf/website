let presenter = {

  getElement: (id) => (document.getElementById(id)),
  getElements: (className) => (document.getElementsByClassName(className)),

  carousel: [
    {
      src: 'img/carousel/frame1.jpg',
      alt: 'conference hall',
      caption: "Wir können mehr!",
      text: "Ob Konzert, Party, Kongress, Hochzeit, Geburtstag: Ihr Partner in Sachen Veranstaltung!",
      href: "#services",
      actiontext: "LEISTUNGEN"
    },
    {
      src: 'img/carousel/frame2.jpg',
      alt: 'sound equipment',
      caption: "Licht, Ton, Strom.",
      text: "Damit Ihre Veranstaltung gelingt, braucht man nicht nur Organisationsgeschick, sondern eben auch die eine oder andere Lampe, Lautsprecher und kilometerlange Kabel. Wir beraten Sie gern.",
      href: "#services",
      actiontext: "VERMIETUNG"
    },
    {
      src: 'img/carousel/frame3.jpg',
      alt: 'mixer knobs',
      caption: "Regler, Knöpfe, Schieber.",
      text: "Wir wissen damit umzugehen und welche davon Sie für ihre Veranstaltung benötigen.",
      href: "#services",
      actiontext: "VERMIETUNG"
    },
    {
      src: 'img/carousel/frame4.jpg',
      alt: 'concert at night',
      caption: "Herausforderungen willkommen!",
      text: "Herausforderungen inspirieren und bringen uns voran. Wir entwickeln ständig neue Konzepte und Ideen.",
      href: "#contact",
      actiontext: "SOCIAL"
    },
    {
      src: 'img/carousel/frame5.jpg',
      alt: 'illuminated staircase',
      caption: "Bunt und schön.",
      text: "Für wen wir gearbeitet haben, wo wir bisher waren und was wir geschafft haben.",
      href: "#credentials",
      actiontext: "REFERENZEN"
    },
    {
      src: 'img/carousel/frame6.jpg',
      alt: 'rehearsal room',
      caption: "\"Schülerfirma\"",
      text: "Was das bedeutet und wie wir dazu gekommen sind.",
      href: "#about",
      actiontext: "ÜBER UNS"
    }
  ],

  setTemplateData: function(template, data) {
    for (let key in data) {
      template.innerHTML = template.innerHTML.replace('%' + key, data[key]);
    }
  },

  cloneTemplate: function(templateId, divId, callback) {
    let template = presenter.getElement(templateId).firstElementChild;
    let div = presenter.getElement(divId);
    let clone = template.cloneNode(true);
    div.append(clone);
    callback(clone);
    if (div.children.length > 0) {
      // div.removeChild();
    }
  },

  showCarousel: function(timePerImageSeconds) {
    let data = presenter.carousel;
    presenter.cloneTemplate('carousel-template', 'slider', (clone) => {
      presenter.setTemplateData(slider, data[data.length - 1]);
    });
    // let i = 0;
    // setInterval(() => {
    //   presenter.cloneTemplate('carousel', 'slider', (clone) => {
    //     presenter.setTemplateData(slider, data[i]);
    //   });
    //   i++;
    //   i = i > data.length - 1 ? 0 : i;
    // }, timePerImageSeconds * 1000);
  },

  sendMail: function() {
    let mail = 'info@drehauf.com';
    let date = new Date();
    let subject = 'A' + date;
    let order = {
      items: [
      {
        name: 'Mackie Onyx 1640i',
        quantity: 1
      },
      {
        name: 'HK Audio L.U.K.A.S Alpha: Bass',
        quantity: 2
      },
      {
        name: 'HK Audio L.U.K.A.S Alpha: Top',
        quantity: 4
      }
      ]
    }
    let body = presenter.createOrderTemplate(order);
      window.location.href = `mailto:${mail}.com?subject=${subject}&body=${body}`;
  },

  createOrderTemplate: function(order) {
    let NEWLINE = '%0D%0A';
    let str = `Hallo isch hätt gern so ein boxending wo mugge rauskommt:${NEWLINE}`;
    for (let item of order.items) {
      str += `${item.quantity}x ${item.name}${NEWLINE}`;
    }
    return str;
  }

};

presenter.showCarousel(5);

let getContactInformation = presenter.getElement('request-action');

getContactInformation.addEventListener('click', () => {
  grecaptcha.ready(() => {
    grecaptcha.execute('6LdKoZwUAAAAAAtkdLxDk5F40j6QesBPhdx_zICd', {
      action: 'homepage'
    }).then((token) => {
      presenter.sendMail();
      console.log(token);
    });
  });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../data/inventar.csv",
        dataType: "text",
        success: (file) => {
          processData(file);
        }
     });
});

function processData(file) {
  let data = [];
  let lines = file.split('\n');
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i].split(';');
    data.push({
      name: line[0],
      quantity: line[1]
    });
  }
  populateTable(data);
}

let tableRow = {
  checkbox: undefined,
  value: {
    name: undefined,
    quantity: undefined
  },
  select: undefined
}

function populateTable(data) {
  let table = presenter.getElement('inventory');
  for (let key of data) {
    let name = key.name;
    let quantity = key.quantity;

    let row = table.insertRow();
    let checkboxCell = row.insertCell()
    let checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.addEventListener('click', didCheckBox);
    checkboxCell.append(checkboxElement);
    tableRow.checkbox = checkboxElement;

    let nameCell = row.insertCell()
    let nameElement = document.createElement('p');
    nameElement.innerHTML = name;
    nameCell.append(nameElement);
    tableRow.value.name = nameElement.innerHTML;

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
    tableRow.value.quantity = quantity;
    tableRow.select = selectElement;

    // console.log(tableRow);
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
    removeFromCart(name, currentQuantity);
  } else {
    addToCart(name, currentQuantity);
  }
  // console.log(cart);
}

function didSelectOption(event) {
  console.log(event);
}

let cart = [];

function addToCart(name, quantity) {
  containsItem(name, quantity, (difference) => {
    cart.push({
      name: name,
      quantity: quantity
    });
    if (!difference) {
      difference = quantity;
    }
    addNotification(false, name, difference);
  });
}

function removeFromCart(name, quantity) {
  containsItem(name, quantity, (difference) => {
    cart.pop({
      name: name,
      quantity: quantity
    });
    if (!difference) {
      difference = quantity;
    }
    addNotification(true, name, difference);
  });
}

function containsItem(name, quantity, callback) {
  let difference;
  for (let item in cart) {
    if (item.name === name) {
      difference = item.quantity - quantity;
      item.quantity = quantity;
    }
  }
  callback(difference);
}

let notifications = [];

function addNotification(isDestructive, name, difference) {
  let action;
  let notification = {
    caption: undefined,
    item: name,
    quantity: difference
  }
  if (isDestructive) {
    action = 'remove';
    notification.caption = 'Enfernt: ';
  } else {
    action = 'add';
    notification.caption = 'Gespeichert: ';
  }
  console.log(notification);
  presenter.cloneTemplate('notification-template', 'notifications', (clone) => {
    presenter.setTemplateData(clone, notification);
    presenter.getElement('notification').setAttribute('action', action);
    presenter.getElement('n-amount').setAttribute('action', action);
    // console.log(notification.caption + notification.item + '(' + notification.quantity + ')');
    notifications.push(clone);
    removeNotification(3, clone);
  });
}

function removeNotification(timePerNotificationSeconds, notification) {
  if (notifications.length > 3) {
    notifications.shift().remove();
  }
  setTimeout(() => {
    notification.remove();
  }, timePerNotificationSeconds * 1000);
}