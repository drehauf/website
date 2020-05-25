import React, { Fragment } from 'react';
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import FrameData from "components/carousel/Frames";
import Sections from "components/sections/Sections";
import Carousel from "components/carousel/Carousel";
import Contact from 'components/sections/Contact';
import ShoppingCart, { ShoppingCartContext } from "components/inventory/ShoppingCart";
import SecurityDisclaimer from 'components/main/SecurityDisclaimer';
import { AboutItem, ServicesItem, CredentialsItem, ContactItem } from 'components/header/HeaderItems'


const Main = () => (
  <Fragment>
    <SecurityDisclaimer />
    <ShoppingCart>
      <Header items={
        [AboutItem, ServicesItem, CredentialsItem, ContactItem]
      } />
      <Carousel frameData={FrameData} />
      <Sections />
      <ShoppingCartContext.Consumer>
        {
          value => <Contact isCardSet={value.isCartSet} />
        }
      </ShoppingCartContext.Consumer>
      <Footer />
    </ShoppingCart>
  </Fragment>
);

export default Main;