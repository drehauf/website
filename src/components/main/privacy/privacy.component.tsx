import React, { FC as Component, Fragment } from 'react';
import Navbar from '../header/header.component';
import Section from '../sections/section/section.component';
import privacy from './privacy.data';
import useSection from '../sections/section/section.hook';

const Datenschutz: Component = () => (
  <>
    <Navbar />
    <Section section={{
      title: 'Datenschutz',
      content: useSection(privacy),
      style: { paddingTop: '4.8em' },
    }}
    />
  </>
);

export default Datenschutz;
