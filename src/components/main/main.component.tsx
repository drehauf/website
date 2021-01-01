import React, { FC as Component } from 'react';
import Header from './header/header.component';
import Footer from './footer.component';
import frames from './sections/about/carousel/carousel.data';
import Sections from './sections/sections.component';
import Carousel from './sections/about/carousel/carousel.component';
import Contact from './sections/contact/contact.component';
import ShoppingCart from '../shoppingcart/shoppingcart.component';
import Cookies from './cookies.component';
import {
  AboutItem, ServicesItem, CredentialsItem, ContactItem,
} from './header/header-items.component';

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
