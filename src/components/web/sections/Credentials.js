import React, { Fragment } from 'react';
import TextBlock from 'components/essentials/TextBlock';
import Subheadline from 'components/essentials/Subheadline';
import Customer from 'components/web/Customer';

import BeBe from 'assets/images/customers/bebe.svg';
import EKD from 'assets/images/customers/ekd.jpg';
import LER from 'assets/images/customers/ler.jpg';
import LSR from 'assets/images/customers/lsr.png';
import Monte from 'assets/images/customers/monte.jpeg';
import RoRo from 'assets/images/customers/roro.png';
import SMK from 'assets/images/customers/smk.svg';

const Credentials = () => {

  const customers = [
    {
      name: 'Evangelisches Kreuzgymnasium Dresden',
      event: 'Hausball der Kruzianer',
      src: EKD,
      link: 'https://kreuzgymnasium.evangelische-schulen-sachsen.de'
    },
    {
      name: 'Sächsisches Staatsministerium für Kultus',
      event: 'Irgendeine große Veranstaltung',
      src: SMK,
      link: 'https://www.smk.sachsen.de'
    },
    {
      name: 'Landesschülerrat Sachsen',
      event: 'Landesdeligiertenkonferenz seit XXXX',
      src: LSR,
      link: 'https://lsr-sachsen.de'
    },
    {
      name: 'Freie Montessorischule Huckepack e.V.',
      event: 'Hausinterne Veranstaltungen',
      src: Monte,
      link: 'https://www.huckepack-ev.de/montessorischule.html'
    },
    {
      name: 'Landeselternrat Sachsen',
      event: 'Irgendeine Veranstaltung',
      src: LER,
      link: 'https://www.landeselternrat-sachsen.de'
    },
    {
      name: 'Romain-Rolland-Gymnasium',
      event: 'Noch eine Veranstaltung',
      src: RoRo,
      link: 'https://www.romain-rolland-gymnasium-dresden.de'
    },
    {
      name: 'Berthold-Brecht-Gymnasium',
      event: 'Schneeball XXXX - XXXX',
      src: BeBe,
      link: 'https://bebe-dresden.de'
    }
  ];

  const createCustomers = () => {
    return customers.map((customer, index) => (
      <Customer key={index} data={customer}/>
    ));
  }

  return(
    <Fragment>
      <Subheadline text='Nur zufriedene Kunden'/>
      <div className='u-margin-top-bottom--large'>
        <TextBlock>
          <p>
            Ein Auzug aus dem, was die Firma so erbracht hat. Von 2011 bis heute:
          </p>
        </TextBlock>
      </div>
      {createCustomers()}
    </Fragment>
  );


}

export default Credentials;