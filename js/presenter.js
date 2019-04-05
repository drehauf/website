let presenter = {

  getElement: (id) => (document.getElementById(id)),
  getElements: (className) => (document.getElementsByClassName(className)),

  carousel: {
    images: [
      {
        src: 'img/carousel/frame1.jpg',
        alt: 'conference hall'
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
    ]
  },

  start: function() {
    let images = presenter.carousel.images;
    let div = presenter.getElement('slider')
    let i = 0;
    setInterval(() => {
      console.log(div.innerHTML);
      div.innerHTML = div.innerHTML.replace('%src', images[i].src);
      div.innerHTML = div.innerHTML.replace('%alt', images[i].alt);
      i++;
      i = i > images.length - 1 ? 0 : i;
    }, 5000);
  }
};

presenter.start(presenter.start);