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
      alt: 'sound equipment'
    },
    {
      src: 'img/carousel/frame3.jpg',
      alt: 'mixer knobs'
    },
    {
      src: 'img/carousel/frame4.jpg',
      alt: 'concert at night'
    },
    {
      src: 'img/carousel/frame5.jpg',
      alt: 'illuminated staircase'
    },
    {
      src: 'img/carousel/frame6.jpg',
      alt: 'rehearsal room'
    }
  ],

  setTemplateData: function(element, data) {
    for (let key in data) {
      element.innerHTML = element.innerHTML.replace('%' + key, data[key]);
      console.log(element.innerHTML);
    }
  },

  cloneTemplate: function(templateId, divId, callback) {
    let template = presenter.getElement(templateId);
    let div = presenter.getElement(divId);
    // div.parent.firstChild.remove();
    let clone = template.cloneNode(true);
    callback(clone);
    div.append(clone);
  },

  showCarousel: function(timePerImageMs) {
    let data = presenter.carousel;
    let i = 0;
    setInterval(() => {
      presenter.cloneTemplate('carousel', 'slider', (clone) => {
        let image = presenter.getElement('image-placeholder');
        image.setAttribute('src', '%src');
        image.setAttribute('alt', '%alt');
        presenter.setTemplateData(clone, data[i])
      });
      i++;
      i = i > data.length - 1 ? 0 : i;
    }, timePerImageMs * 1000);
  }
};

presenter.showCarousel(3)