import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import FrameItem from './frame-item.component';
import Frame from '../../models/frame.model';

interface Props {
  frames: Frame[];
}

const ImageCarousel: Component<Props> = ({ frames }: Props) => {
  // Create elements from `frames`
  const FrameList = frames.map((frame: Frame) => <FrameItem key={nanoid()} {...frame} />);

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

export default ImageCarousel;
