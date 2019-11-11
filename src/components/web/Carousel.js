import React, {Component} from 'react';
// import './stylesheets/Carousel.css';

class Carousel extends Component {

  item = {
    src: require('../../assets/images/carousel/frame1.jpg'),
    alt: 'conference hall',
    caption: 'Wir können mehr!',
    text: 'Ob Konzert, Party, Kongress, Hochzeit, Geburtstag: Ihr Partner in Sachen Veranstaltung!',
    href: '#services',
    actiontext: 'LEISTUNGEN'
  };

  render() {
    return (
      <div id='carousel'>
        <img id='frame-placeholder' src={this.item.src} alt={this.item.alt}/>
        <div id='float'>
          <h2>{this.item.caption}</h2>
          <p>{this.item.text}</p>
          <a href={this.item.href}>{this.item.actiontext}</a>
        </div>
      </div>
    );
  }

}

export default Carousel;