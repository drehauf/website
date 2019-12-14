import React, { Fragment } from 'react';
import Button from './essentials/Button';

const Impressum = () => (
  <Fragment>
    <p>Impressum</p>
    <Button href="/" text="home" external={false} />
  </Fragment>
);

export default Impressum;