import React, { FC as Component } from 'react';
import FrameOverlay from './frame-overlay.component';
import Button from '../simple/Button';
import Frame from '../../models/frame.model';

const FrameItem: Component<Frame> = ({
  href, src, alt, caption, text, actiontext, external,
}: Frame) => {
  const button = <Button href={href} text={actiontext} external={external} />;
  return (
    <div>
      <img src={src} alt={alt} className="carousel_image" />
      <FrameOverlay
        caption={caption}
        text={text}
        button={button}
      />
    </div>
  );
};

export default FrameItem;
