import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import frames from '../../data/carousel.data';
import Sections from '../sections/sections.component';
import Carousel from '../carousel/carousel.component';
import Contact from '../sections/Contact';
import ShoppingCart from '../inventory/shoppingcart.component';
import SecurityDisclaimer from './SecurityDisclaimer';
import {
  AboutItem, ServicesItem, CredentialsItem, ContactItem,
} from '../header/header-items.component';

const Main = () => (
  <>
    <SecurityDisclaimer />
    <ShoppingCart>
      <Header items={
        [AboutItem, ServicesItem, CredentialsItem, ContactItem]
      }
      />
      {
        // Only render `Carousel` when `frames` are available
        frames ? <Carousel frames={frames} /> : null
      }
      <Sections />
      <Contact />
      <Footer />
    </ShoppingCart>
  </>
);

export default Main;
