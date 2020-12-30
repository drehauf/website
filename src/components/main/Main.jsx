import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import frames from '../../data/carousel.data';
import Sections from '../sections/sections.component';
import Carousel from '../carousel/carousel.component';
import Contact from '../sections/Contact';
import ShoppingCart, { useShoppingContext } from '../inventory/ShoppingCart';
import SecurityDisclaimer from './SecurityDisclaimer';
import {
  AboutItem, ServicesItem, CredentialsItem, ContactItem,
} from '../header/HeaderItems';

const Main = () => {
  const { isCartSet } = useShoppingContext();

  return (
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
        <Contact isCardSet={isCartSet} />
        <Footer />
      </ShoppingCart>
    </>
  );
};

export default Main;
