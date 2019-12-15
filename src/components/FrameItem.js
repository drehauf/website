import React from 'react';
import FrameOverlay from 'components/FrameOverlay';
import '../stylesheets/Carousel.scss';

const FrameItem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} className="carousel_image" />
      <FrameOverlay
        caption={props.caption}
        text={props.text}
        href={props.href}
        actiontext={props.actiontext}
        external={props.external}
      />
    </div>
  );
}

export default FrameItem;