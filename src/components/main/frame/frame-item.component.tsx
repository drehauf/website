import React, { FC as Component } from 'react';
import FrameOverlay from './frame-overlay.component';
import Button from '../../simple/button.component';
import Frame from './frame.model';

const FrameItem: Component<Frame> = ({
  href, src, alt, caption, text, actiontext, external,
}: Frame) => {
  const button = <Button href={href} content={actiontext} external={external} />;
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
