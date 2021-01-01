import React, { FC as Component } from 'react';
import Button from '../../simple/button.component';
import FrameModel from './frame.model';
import useSection from '../sections/section/section.hook';

const Frame: Component<FrameModel> = ({
  href, src, alt, caption, text, actiontext, external,
}: FrameModel) => (
  <div>
    <img src={src} alt={alt} className="carousel_image" />
    <div className="carousel_overlay">
      {useSection([
        {
          title: caption,
          paragraphs: [text],
        },
      ])}
      <Button href={href} content={actiontext} external={external} />
    </div>
  </div>
);

export default Frame;
