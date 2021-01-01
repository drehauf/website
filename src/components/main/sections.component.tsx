import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './sections/section/section.component';
import About from './sections/about/about.component';
import Services from './sections/services/services.component';
import Credentials from './sections/credentials/credentials.component';

const sections = [
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

const Sections: Component = () => (
  <>
    {
      sections.map(({ id, title, content }) => (
        <Section
          key={nanoid()}
          id={id}
          section={{
            title,
            content,
            style: {},
          }}
        />
      ))
    }
  </>
);

export default Sections;
