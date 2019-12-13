import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FrameItem from './FrameItem'

const ImgCarousel = (props) => {
  const FrameList = props.frameData.map((frame, index) => {
    return <FrameItem key={index} {...frame} />;
  });

  return (
    <div id="carousel">
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        interval={6000}
      >
        {FrameList}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;