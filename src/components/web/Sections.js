import React, {Component} from 'react';
import About from './sections/About';
import Services from './sections/Services';
import Credentials from './sections/Credentials';
import Contact from './sections/Contact';
import Section from './Section';
import '../../stylesheets/Sections.scss';

const sectionList = [
  {
    content: <About/>,
    title: 'Über uns'
  },
  {
    content: <Services/>,
    title: 'Leistungen'
  },
  {
    content: <Credentials/>,
    title: 'Referenzen'
  },
  {
    content: <Contact/>,
    title: 'Kontakt'
  }
];

const Sections = () => {

  return sectionList.map((sectionItem, index) => (
    <Section
      key={index}
      title={sectionItem.title}
      content={sectionItem.content}
    />
  ));
}

export default Sections;