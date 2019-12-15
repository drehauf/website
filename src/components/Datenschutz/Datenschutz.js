import React, { Fragment } from 'react';
import Navbar from "components/web/Header";
import Section from "components/web/Section";
import Content from 'components/Datenschutz/Content';

const Datenschutz = () => (
  <Fragment>
    <Navbar />
    <Section
      title="Datenschutz"
      content={Content}
      sectionStyle={{paddingTop: '4.8em'}}
    />
  </Fragment>
);

export default Datenschutz;