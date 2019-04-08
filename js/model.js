let model = {

  getCarousel: function(callback) {
    let data = {
      src: 'img/carousel/frame6.jpg',
      alt: 'rehearsal room',
      caption: "\"Schülerfirma\"",
      text: "Was das bedeutet und wie wir dazu gekommen sind.",
      href: "#about",
      actiontext: "ÜBER UNS"
    };
    callback(data);
  },

  /*
  * Passes the file data to callback()
  */
  getFile: function(uri, callback) {
    parser.parse(uri, (data) => {
      callback(data);
    });
  },

  /*
  * Passes the clicked row and contained item to callback()
  */
  getItemForTableRow: function(target, callback) {
    let rows = target.parentNode.parentNode.parentNode.children;
    let cells = target.parentNode.parentNode.children;
    let checkbox = cells[0].firstElementChild;
    let name = cells[1].firstElementChild.innerHTML;
    let select = cells[2].firstElementChild;
    let options = select.options;
    let currentQuantity = options[options.selectedIndex].value;
    let maxQuantity = options[options.length - 1].value;
    callback({
      checkbox: checkbox,
      select: select
    }, {
      name: name,
      quantity: {
        max: maxQuantity,
        current: currentQuantity
      },
    });
  },

  /*
  * Passes the reCaptcha v3 bot-score to callback()
  */
  getReCaptchaScore: function(callback) {
    callback();
    // grecaptcha.ready(() => {
    //   grecaptcha.execute('6LdKoZwUAAAAAAtkdLxDk5F40j6QesBPhdx_zICd', {
    //     action: 'homepage'
    //   }).then((token) => {
    //     console.log(token);
    //   });
    // });
  }

};