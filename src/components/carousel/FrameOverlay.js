import React from 'react';
import Subheadline from '../simple/Subheadline';
import TextBlock from '../simple/TextBlock';

const FrameItem = ({ caption, text, button }) => {

  return(
    <div className="carousel_overlay">
      <Subheadline text={caption}/>
      <div className='u-margin-top-bottom--medium'>
        <TextBlock>
          <p>{text}</p>
        </TextBlock>
      </div>
      {button}
    </div>
  );

};

export default FrameItem;