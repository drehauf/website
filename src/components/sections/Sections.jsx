import React from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import About from './About';
import Services from './Services';
import Credentials from './credentials.component';

// TODO: move to `/data`

const sectionList = [
  {
    content: <About />,
    title: 'Über uns',
    id: 'about',
  },
  {
    content: <Services />,
    title: 'Leistungen',
    id: 'services',
  },
  {
    content: <Credentials />,
    title: 'Referenzen',
    id: 'credentials',
  },
];

const Sections = () => sectionList.map(({ id, title, content }) => (
  <Section
    key={nanoid()}
    id={id}
    title={title}
    content={content}
  />
));

export default Sections;
