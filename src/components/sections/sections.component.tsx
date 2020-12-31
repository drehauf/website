import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './section.component';
import About from './about.component';
import Services from './services.component';
import Credentials from './credentials.component';
import SectionModel from '../../models/section.model';

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
          } as SectionModel}
        />
      ))
    }
  </>
);

export default Sections;
