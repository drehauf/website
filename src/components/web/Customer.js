import React from 'react';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';
import Button from 'components/essentials/Button';

const Customer = (props) => {

  return(
    <div className='customers'>
      <div className='customer u-margin--medium'>
        <img
          className='customer_logo'
          src={props.data.src}
          alt={props.data.name}
          />
        <Subheadline
          text={props.data.name}
          />
        <TextBlock>
          <p>
            {props.data.event}
          </p>
        </TextBlock>
        <Button
          href={props.data.href}
          text={props.data.name}
          external={true}
          />
      </div>
    </div>
  );

}

export default Customer;