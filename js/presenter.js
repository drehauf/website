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
    let template = presenter.getElement(templateId);
    let div = presenter.getElement(divId);
    let clone = template.cloneNode(true);
    div.append(clone);
    callback(clone);
    if (div.children.length > 0) {
      div.removeChild();
    }

  },

  showCarousel: function(timePerImageMs) {
    let data = presenter.carousel;
    presenter.cloneTemplate('carousel', 'slider', (clone) => {
      presenter.setTemplateData(slider, data[data.length - 1]);
    });
    let i = 0;
    setInterval(() => {
      presenter.cloneTemplate('carousel', 'slider', (clone) => {
        presenter.setTemplateData(slider, data[i]);
      });
      i++;
      i = i > data.length - 1 ? 0 : i;
    }, timePerImageMs * 1000);
  }
};

presenter.showCarousel(5);