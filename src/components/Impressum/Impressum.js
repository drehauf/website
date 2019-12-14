import React, { Fragment } from 'react';
import Navbar from 'components/web/Header';
import Section from 'components/web/Section';
import Content from 'components/Impressum/Content';

const Impressum = () => {

  return (
    <Fragment>
      <Navbar />
      <Section title="Impressum" content={Content}></Section>
    </Fragment>
  );
}

export default Impressum;