import React from 'react';
import FrameOverlay from './FrameOverlay';
import Button from '../simple/Button';

const FrameItem = ({
  href, src, alt, caption, text, actiontext, external,
}) => {
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
