import React, { Fragment } from 'react';
import Button from './essentials/Button';
import Link from './essentials/Link';

const link = (
  <Link href="/" text="home" external={false}/>
)

const Datenschutz = () => (
  <Fragment>
    <p>Datenschutzerklärung</p>
    <Button link={link}/>
  </Fragment>
)

export default Datenschutz;