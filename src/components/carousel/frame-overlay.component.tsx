import React, { FC as Component, PropsWithChildren, ReactNode } from 'react';
import Subheadline from '../simple/subheadline.component';
import TextBlock from '../simple/textblock.component';
import Overlay from '../../models/overlay.model';

type Props = Overlay & PropsWithChildren<any>;

const FrameOverlay: Component<Props> = ({ caption, text, button }: Props) => (
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
