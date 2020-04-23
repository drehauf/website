import React from 'react';
import FrameOverlay from 'components/carousel/FrameOverlay';
import Button from 'components/simple/Button';

const FrameItem = (props) => {
  const button = <Button href={props.href} text={props.actiontext} external={props.external}/>
  return (
    <div>
      <img src={props.src} alt={props.alt} className="carousel_image" />
      <FrameOverlay
        caption={props.caption}
        text={props.text}
        button={button}
      />
    </div>
  );
}

export default FrameItem;