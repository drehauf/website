import Customer from '../models/customer.model';
import BeBe from '../assets/images/customers/bebe.svg';
import EKD from '../assets/images/customers/ekd.jpg';
import LER from '../assets/images/customers/ler.jpg';
import LSR from '../assets/images/customers/lsr.png';
import Monte from '../assets/images/customers/monte.png';
import RoRo from '../assets/images/customers/roro.png';
import SMK from '../assets/images/customers/smk.svg';

const Customers: Customer[] = [
  {
    name: 'Evangelisches Kreuzgymnasium Dresden',
    event: 'Jährliche Hausbälle der Kruzianer seit 2012',
    image: EKD,
    link: 'https://kreuzgymnasium.evangelische-schulen-sachsen.de',
  },
  {
    name: 'Sächsisches Staatsministerium für Kultus',
    event: 'Sächsischer Schulpreis 2016 - Auszeichnungsveranstaltung',
    image: SMK,
    link: 'https://www.smk.sachsen.de',
  },
  {
    name: 'Landesschülerrat Sachsen',
    event: 'Landesdeligiertenkonferenzen seit 2012',
    image: LSR,
    link: 'https://lsr-sachsen.de',
  },
  {
    name: 'Freie Montessorischule Huckepack e.V.',
    event: 'Mitgliederversammlungen, Theateraufführungen und Vereinsfeste',
    image: Monte,
    link: 'https://www.huckepack-ev.de/montessorischule.html',
  },
  {
    name: 'Landeselternrat Sachsen',
    event: 'Diskussionsrunden',
    image: LER,
    link: 'https://www.landeselternrat-sachsen.de',
  },
  {
    name: 'Romain-Rolland-Gymnasium',
    event: 'Benefizkonzerte',
    image: RoRo,
    link: 'https://www.romain-rolland-gymnasium-dresden.de',
  },
  {
    name: 'Berthold-Brecht-Gymnasium',
    event: 'Schulbälle',
    image: BeBe,
    link: 'https://bebe-dresden.de',
  },
];

export default Customers;
