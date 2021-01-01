import React, { FC as Component, Fragment } from 'react';
import Header from '../header/header.component';
import Section from '../sections/section/section.component';
import legal from './legal.data';
import useSection from '../sections/section/section.hook';

const Impressum: Component = () => (
  <>
    <Header />
    <Section section={{
      title: 'Impressum',
      content: useSection(legal),
      style: { paddingTop: '4.8em' },
    }}
    />
  </>
);

export default Impressum;
