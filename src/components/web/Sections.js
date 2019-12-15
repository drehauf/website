import React from 'react';
import About from './sections/About';
import Services from './sections/Services';
import Credentials from './sections/Credentials';
import Section from './Section';

const sectionList = [
  {
    content: <About/>,
    title: 'Über uns',
    id: 'about'
  },
  {
    content: <Services/>,
    title: 'Leistungen',
    id: 'services'
  },
  {
    content: <Credentials/>,
    title: 'Referenzen',
    id: 'credentials'
  }
];

const Sections = () => {

  return sectionList.map((sectionItem, index) => (
    <Section
      key={index}
      id={sectionItem.id}
      title={sectionItem.title}
      content={sectionItem.content}
    />
  ));
}

export default Sections;