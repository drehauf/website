import React from 'react';
import Section from 'components/sections/Section';
import About from 'components/sections/About';
import Services from 'components/sections/Services';
import Credentials from 'components/sections/Credentials';

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