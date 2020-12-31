import React, { FC as Component } from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import frames from '../../data/carousel.data';
import Sections from '../sections/sections.component';
import Carousel from '../carousel/carousel.component';
import Contact from '../sections/contact.component';
import ShoppingCart from '../inventory/shoppingcart.component';
import Cookies from './cookies.component';
import {
  AboutItem, ServicesItem, CredentialsItem, ContactItem,
} from '../header/header-items.component';

const Main: Component = () => (
  <>
    <Cookies />
    <ShoppingCart>
      <Header items={[AboutItem, ServicesItem, CredentialsItem, ContactItem]} />
      {/* Only render `Carousel` when `frames` are available */}
      {frames ? <Carousel frames={frames} /> : null}
      <Sections />
      <Contact />
      <Footer />
    </ShoppingCart>
  </>
);

export default Main;
