import React, { Fragment } from 'react';
import Header from "./web/Header";
import Footer from "./web/Footer";
import FrameData from "./web/Frames";
import Sections from "./web/Sections";
import Carousel from "./Carousel";

const Main = () => (
  <Fragment>
    <Header />
    <Carousel frameData={FrameData} />
    <Sections />
    <Footer />
  </Fragment>
);

export default Main;