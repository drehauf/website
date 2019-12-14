import React, { Fragment } from 'react';
import Button from './essentials/Button';

const Datenschutz = () => (
  <Fragment>
    <p>Datenschutzerklärung</p>
    <Button href="/" text="home" external={false} />
  </Fragment>
);

export default Datenschutz;