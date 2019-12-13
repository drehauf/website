import React, {Component} from 'react';
// import './stylesheets/Carousel.css';

class Carousel extends Component {

  frames = [
    {
      src: require('../../assets/images/carousel/frame1.jpg'),
      alt: 'conference hall',
      caption: 'Wir können mehr!',
      text: 'Ob Konzert, Party, Kongress, Hochzeit, Geburtstag: Ihr Partner in Sachen Veranstaltung!',
      href: '#services',
      actiontext: 'LEISTUNGEN'
    },
    {
      src: require('../../assets/images/carousel/frame2.jpg'),
      alt: 'sound equipment',
      caption: 'Licht, Ton, Strom.',
      text: 'Damit Ihre Veranstaltung gelingt, braucht man nicht nur Organisationsgeschick, sondern eben auch die eine oder andere Lampe, Lautsprecher und kilometerlange Kabel. Wir beraten Sie gern.',
      href: '#services',
      actiontext: 'VERMIETUNG'
    },
    {
      src: require('../../assets/images/carousel/frame4.jpg'),
      alt: 'concert at night',
      caption: 'Herausforderungen willkommen!',
      text: 'Herausforderungen inspirieren und bringen uns voran. Wir entwickeln ständig neue Konzepte und Ideen.',
      href: 'https://www.instagram.com/dreh_auf/',
      actiontext: 'INSTAGRAM'
    },
    {
      src: require('../../assets/images/carousel/frame3.jpg'),
      alt: 'mixer knobs',
      caption: 'Regler, Knöpfe, Schieber.',
      text: 'Wir wissen damit umzugehen und welche davon Sie für ihre Veranstaltung benötigen.',
      href: '#services',
      actiontext: 'VERMIETUNG'
    },
    {
      src: require('../../assets/images/carousel/frame5.jpg'),
      alt: 'illuminated staircase',
      caption: 'Bunt und schön.',
      text: 'Für wen wir gearbeitet haben, wo wir bisher waren und was wir geschafft haben.',
      href: '#credentials',
      actiontext: 'REFERENZEN'
    },
    {
      src: require('../../assets/images/carousel/frame6.jpg'),
      alt: 'rehearsal room',
      caption: '\'Schülerfirma\'',
      text: 'Was das bedeutet und wie wir dazu gekommen sind.',
      href: '#about',
      actiontext: 'ÜBER UNS'
    }
  ];

  // componentDidMount() {
  //   let i = 0;
  //   let timePerImageSeconds = 1;
  //   setInterval(() => {
  //     this.setState({
  //       currentFrame: this.frames[i]
  //     });
  //     i = i > this.frames.length - 1 ? 0 : i;
  //   }, timePerImageSeconds * 1000);
  // }

  render() {
    let currentFrame = this.frames[0];
    return (
      <div id='carousel'>
        <img id='frame-placeholder' src={currentFrame.src} alt={currentFrame.alt}/>
        <div id='float'>
          <h2>{currentFrame.caption}</h2>
          <p>{currentFrame.text}</p>
          <a href={currentFrame.href}>{currentFrame.actiontext}</a>
        </div>
      </div>
    );
  }

}

export default Carousel;