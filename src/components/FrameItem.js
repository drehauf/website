import React from 'react';
import Button from './essentials/Button';
import '../stylesheets/Carousel.scss';

const FrameItem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} className="carousel_image" />
      <div className="carousel_overlay">
        <div className="carousel_headline u-margin-bottom--small">
          {props.caption}
        </div>
        <div className="carousel_text u-margin-bottom--medium">{props.text}</div>
        <Button link={props.href} text={props.actiontext} />
      </div>
    </div>
  );
}

export default FrameItem;