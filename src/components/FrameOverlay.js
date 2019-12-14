import React from 'react';
import Button from './essentials/Button';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';

const FrameItem = (props) => {

  return(
    <div className="carousel_overlay">
      <Subheadline text={props.caption}/>
      <div className='u-margin-top-bottom--medium'>
        <TextBlock>
          <p>{props.text}</p>
        </TextBlock>
      </div>
      <Button href={props.href} text={props.actiontext} external={props.external}/>
    </div>
  );

};

export default FrameItem;