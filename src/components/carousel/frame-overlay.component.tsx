import React, { FC as Component } from 'react';
import Subheadline from '../simple/Subheadline';
import TextBlock from '../simple/TextBlock';
import Overlay from '../../models/overlay.model';

const FrameOverlay: Component<Overlay> = ({ caption, text, button }: Overlay) => (
  <div className="carousel_overlay">
    <Subheadline text={caption} />
    <div className="u-margin-top-bottom--medium">
      <TextBlock>
        <p>{text}</p>
      </TextBlock>
    </div>
    {button}
  </div>
);

export default FrameOverlay;
