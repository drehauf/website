import React, { Fragment } from 'react';
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import FrameData from "components/carousel/Frames";
import Sections from "components/sections/Sections";
import Carousel from "components/carousel/Carousel";
import Contact from 'components/sections/Contact';
import ShoppingCart, { useShoppingContext } from "components/inventory/ShoppingCart";
import SecurityDisclaimer from 'components/main/SecurityDisclaimer';
import { AboutItem, ServicesItem, CredentialsItem, ContactItem } from 'components/header/HeaderItems'

const Main = () => {

  const { isCartSet } = useShoppingContext();

  return (
    <Fragment>
      <SecurityDisclaimer />
      <ShoppingCart>
        <Header items={
          [AboutItem, ServicesItem, CredentialsItem, ContactItem]
        } />
        <Carousel frameData={FrameData} />
        <Sections />
        <Contact isCardSet={isCartSet} />
        <Footer />
      </ShoppingCart>
    </Fragment>
  );

};

export default Main;