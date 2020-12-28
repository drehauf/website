import img1 from '../../assets/images/carousel/frame1.jpg';
import img2 from '../../assets/images/carousel/frame2.jpg';
import img3 from '../../assets/images/carousel/frame3.jpg';
import img4 from '../../assets/images/carousel/frame4.jpg';
import img5 from '../../assets/images/carousel/frame5.jpg';
import img6 from '../../assets/images/carousel/frame6.jpg';

const Frames = [
  {
    src: img1,
    alt: 'conference hall',
    caption: 'Wir können mehr!',
    text:
      'Ob Konzert, Party, Kongress, Hochzeit, Geburtstag: Ihr Partner in Sachen Veranstaltung!',
    href: '#services',
    actiontext: 'LEISTUNGEN',
    external: false,
  },
  {
    src: img2,
    alt: 'sound equipment',
    caption: 'Licht, Ton, Strom.',
    text:
      'Damit Ihre Veranstaltung gelingt, braucht man nicht nur Organisationsgeschick, sondern eben auch die eine oder andere Lampe, Lautsprecher und kilometerlange Kabel. Wir beraten Sie gern.',
    href: '#services',
    actiontext: 'VERMIETUNG',
    external: false,
  },
  {
    src: img4,
    alt: 'concert at night',
    caption: 'Herausforderungen willkommen!',
    text:
      'Herausforderungen inspirieren und bringen uns voran. Wir entwickeln ständig neue Konzepte und Ideen.',
    href: 'https://www.instagram.com/dreh_auf/',
    actiontext: 'INSTAGRAM',
    external: true,
  },
  {
    src: img3,
    alt: 'mixer knobs',
    caption: 'Regler, Knöpfe, Schieber.',
    text:
      'Wir wissen damit umzugehen und welche davon Sie für ihre Veranstaltung benötigen.',
    href: '#services',
    actiontext: 'VERMIETUNG',
    external: false,
  },
  {
    src: img5,
    alt: 'illuminated staircase',
    caption: 'Bunt und schön.',
    text:
      'Für wen wir gearbeitet haben, wo wir bisher waren und was wir geschafft haben.',
    href: '#credentials',
    actiontext: 'REFERENZEN',
    external: false,
  },
  {
    src: img6,
    alt: 'rehearsal room',
    caption: "'Schülerfirma'",
    text: 'Was das bedeutet und wie wir dazu gekommen sind.',
    href: '#about',
    actiontext: 'ÜBER UNS',
    external: false,
  },
];

export default Frames;
