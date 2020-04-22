import React, { Fragment } from 'react';
import Header from "./web/Header";
import Footer from "./web/Footer";
import FrameData from "./web/Frames";
import Sections from "./web/Sections";
import Carousel from "./Carousel";
import Contact from 'components/web/sections/Contact';
import ShoppingCart, {
  ShoppingCartContext
} from "components/Datamanagement/ShoppingCart";
import SecurityDisclaimer from './SecurityDisclaimer';

const Main = () => (
  <Fragment>
    <SecurityDisclaimer/>
    <ShoppingCart>
      <Header />
      <Carousel frameData={FrameData} />
      <Sections />
      <ShoppingCartContext.Consumer>
        {value => <Contact isCardSet={value.isCartSet}/>}
      </ShoppingCartContext.Consumer>
      <Footer />
    </ShoppingCart>
  </Fragment>
);

export default Main;