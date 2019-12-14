import React, { Fragment } from 'react';
import Button from './essentials/Button';
import Link from "./essentials/Link";

const link = <Link href="/" text="home" external={false} />;

const Impressum = () => (
  <Fragment>
    <p>Impressum</p>
    <Button link={link}/>
  </Fragment>
)

export default Impressum;