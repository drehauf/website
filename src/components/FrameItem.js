import React from 'react';
import Button from './essentials/Button';

const FrameItem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <div className="legend">
        <p>{props.caption}</p>
        <p>{props.text}</p>
        <Button link={props.href} text={props.actiontext} />
      </div>
    </div>
  );
}

export default FrameItem;