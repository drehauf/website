import React from 'react';
import { nanoid } from 'nanoid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import FrameItem from './FrameItem';

const ImgCarousel = ({ frameData }) => {
  const FrameList = frameData.map((frame) => <FrameItem key={nanoid()} {...frame} />);

  return (
    <div id="carousel">
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={6000}
      >
        {FrameList}
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
