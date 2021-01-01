import React, { FC as Component } from 'react';
import { nanoid } from 'nanoid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Frame from '../../../frame/frame.component';
import FrameModel from '../../../frame/frame.model';

interface Props {
  frames: FrameModel[];
}

const ImageCarousel: Component<Props> = ({ frames }: Props) => (
  <div id="carousel">
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      interval={6000}
    >
      {
        // Create a `FrameItem` for each frame in `frames`
        frames.map((frame) => <Frame key={nanoid()} {...frame} />)
      }
    </Carousel>
  </div>
);

export default ImageCarousel;
