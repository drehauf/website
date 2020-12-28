import React from 'react';
import TextBlock from '../simple/TextBlock';

const Customer = ({ data }) => (
  <div className="customer">
    <img
      className="customer_logo"
      src={data.src}
      alt={data.name}
    />
    <h3>{data.name}</h3>
    <TextBlock>
      <p>
        {data.event}
      </p>
    </TextBlock>
  </div>
);

export default Customer;
