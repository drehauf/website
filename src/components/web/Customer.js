import React from 'react';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';
import Button from 'components/essentials/Button';

const Customer = (props) => {

  return(
    <div className='customer'>
      <img
        className='customer_logo'
        src={props.data.src}
        alt={props.data.name}
        />
      {
        // <Subheadline
        //   text={props.data.name}
        //   />
      }
      <h3>{props.data.name}</h3>
      <TextBlock>
        <p>
          {props.data.event}
        </p>
      </TextBlock>
      {
        // <Button
        //   href={props.data.href}
        //   text={props.data.name.toUpperCase()}
        //   external={true}
        //   />
      }
    </div>
  );

}

export default Customer;