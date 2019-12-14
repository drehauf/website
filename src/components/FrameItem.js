import React from 'react';
import Button from './essentials/Button';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';
import '../stylesheets/Carousel.scss';

const FrameItem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} className="carousel_image" />
      <div className="carousel_overlay">
        <Subheadline text={props.caption}/>
        <div className='u-margin-top-bottom--medium'>
          <TextBlock>
            <p>{props.text}</p>
          </TextBlock>
        </div>
        <Button link={props.href} text={props.actiontext} />
      </div>
    </div>
  );
}

export default FrameItem;