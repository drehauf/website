import React, { Fragment } from 'react';
import Header from "./web/Header";
import Footer from "./web/Footer";
import FrameData from "./web/Frames";
import Sections from "./web/Sections";
import Carousel from "./Carousel";
import Contact from 'components/web/sections/Contact';

const Main = () => (
  <Fragment>
    <Header />
    <Carousel frameData={FrameData} />
    <Sections />
    <Contact />
    <Footer />
  </Fragment>
);

export default Main;